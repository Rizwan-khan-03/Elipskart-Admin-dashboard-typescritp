import React, { useEffect } from 'react';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TablePagination from '@mui/material/TablePagination';
import Modal from './Modal';
import Category from './Category';
import Title from '../Dashboard/Title';
import { Dispatch } from "redux";
import { useAppDispatch } from "../../../App/Redux/hooks";
import { deleteProduct, getProductList } from '../../../App/Service/service.commondata';
import { setUpdate } from '../../../App/Service/Service';
import ConfirmDialog from './ConfirmDialog';
import { useAppSelector } from '../../../App/Redux/hooks';
import { getUserId } from '../../../App/Service/Service';
import { getGroceryList } from '../../../App/Service/service.grocery';
import { deleteCategoryProduct, getCategoryList } from '../../../App/Service/service.category';
const TableExample = ({comp}:any) => {
  console.log('comp',comp);
  
  const dispatch: Dispatch<any> = useAppDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [tableData, setTableData] = React.useState<any>([]);
  const [deleteConfirm, setDeleteConfirm]=React.useState(false);
  const [confirm, setConfirm] = React.useState({
    open: false,
    confirm: false,
    message: "",
    title: ""
  })
  const user: any = useAppSelector(state => state?.commonDataSlice?.user)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    handlGetProductList()
  }, [])

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (e: any, id: any) => {
    await setConfirm((prev) => ({
      ...prev,
      open: true,
      message: 'Do You Really Want To Delete',
      title: 'Delete'

    }))
    if (deleteConfirm) {
      const res: any = await dispatch(deleteCategoryProduct(id));
      if (res?.payload?.data?.responseCode === 200) {
        let array = [...tableData];
        let responsed = res?.payload?.data?.payload;
        let oldObjectIndex = tableData?.findIndex((obj: any) => obj._id === responsed?._id);
        array.splice(oldObjectIndex, 1);
        setTableData(array)
        await setDeleteConfirm(false)
      }
    }

  }
  const handleUpdate = async (e: any, item: any) => {
    await setUpdate(JSON.stringify(item));
    setOpen(true)
  }
  const handlGetProductList = async () => {
    try {

      const res: any = await dispatch(getCategoryList({ userId: getUserId(), isAdmin: true ,categories:comp}))
      if (res?.payload?.data?.responseCode === 200 && res?.payload?.data?.success) {
        await setTableData(res?.payload?.data?.payload)
      }
    } catch (error) {
      console.log('error', error);

    }
  };
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: "space-between", marginBottom: '10px' }}>
        <Title>{comp} Indent</Title>
        <Button variant='outlined' onClick={() => setOpen(true)}>Add {comp}</Button>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Product Code</TableCell>
                <TableCell>Availability</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.categories}</TableCell>
                  <TableCell>{row.productCode}</TableCell>
                  <TableCell>{row.available ? 'Available' : 'Not Available'}</TableCell>
                  <TableCell>
                    <img src={row.img} alt="Product" width="50" height="50" />
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Update">
                      <IconButton>
                        <SecurityUpdateGoodIcon onClick={(e) => handleUpdate(e, row)} />
                      </IconButton>
                    </Tooltip>
                    {" "}
                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon onClick={(e) => handleDelete(e, row?._id)} />
                      </IconButton>
                    </Tooltip>

                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
      
      </Paper >
        <div className='custom_pagination'>
        <Paper >
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <Modal
          content={<Category setOpen={setOpen} setTableData={setTableData} tableData={tableData} category={comp}/>}
          open={open}
          setOpen={setOpen}

        />
      <ConfirmDialog confirm={confirm} setConfirm={setConfirm} setDeleteConfirm={setDeleteConfirm}/>
    </>

  );
};

export default TableExample;
