import React, { useEffect } from 'react';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TablePagination from '@mui/material/TablePagination';
import Modal from './Modal';
import Mobile from './Mobile';
import Title from '../Dashboard/Title';
import { Dispatch } from "redux";
import { useAppDispatch } from "../../../App/Redux/hooks";
import { getUserList, updateProductById } from '../../../App/Service/service.commondata';
import { setUpdate } from '../../../App/Service/Service';


const TableExample = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [tableData, setTableData] = React.useState<any>([]);
  const dispatch: Dispatch<any> = useAppDispatch();
  const [productUpdate, setProductUpdate] = React.useState({});
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (e: any, id: any) => {
    console.log('handleDelete id', id)
  }
  const handleUpdate = async (e: any, item: any) => {
    await setUpdate(JSON.stringify(item));
    setOpen(true)
    console.log('handleUpdate id', item?._id)
    // const res: any = await dispatch(updateProductById({id:item?._id,title:"F25 black"}))
    // console.log('updateProductById res', res)
    // if(res?.payload?.data?.responseCode===200){
    // }else{
    //   setUpdate(null)
    // }
  }
  useEffect(() => {
    handlGetProductList()
  }, [productUpdate])

  const handlGetProductList = async () => {
    try {

      const res: any = await dispatch(getUserList({ userId: "6454fa649b0ffa5392ed86ba", isAdmin: true }))
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
        <Title>Mobile Indent</Title>
        <Button variant='outlined' onClick={() => setOpen(true)}>Add Mobile</Button>
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
                    <img src={row.image} alt="Product" width="50" height="50" />
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Modal
          content={<Mobile setOpen={setOpen} setTableData={setTableData} tableData={tableData}/>}
          open={open}
          setOpen={setOpen}
          
        />
      </Paper >
    </>

  );
};

export default TableExample;
