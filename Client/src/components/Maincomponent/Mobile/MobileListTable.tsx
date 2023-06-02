import React from 'react';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TablePagination from '@mui/material/TablePagination';
import Modal from './Modal';
import Mobile from './Mobile';
const StyledTableHeadRow = styled(TableRow)({
  backgroundColor: '#f5f5f5',
  fontWeight: 'bold',
});
const StyledTableCellRow = styled(TableRow)(({ theme }) => ({

  '&:hover': {
    backgroundColor: "#f5f5f5",
  },
}));
const rows = [
  { name: 'Product 1', price: '10', category: 'Category 1', size: 'Small', isAvailable: true, image: 'image1.jpg' },
  { name: 'Product 2', price: '20', category: 'Category 2', size: 'Medium', isAvailable: true, image: 'image2.jpg' },
  { name: 'Product 3', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
  { name: 'Product 4', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
  { name: 'Product 5', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
  { name: 'Product 6', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
  { name: 'Product 7', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
  { name: 'Product 8', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
  { name: 'Product 9', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
  { name: 'Product 10', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
  { name: 'Product 11', price: '30', category: 'Category 1', size: 'Large', isAvailable: false, image: 'image3.jpg' },
];

const TableExample = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id: any) => {
    console.log('handleDelete id', id)
  }
  const handleUpdate = (id: any) => {
    console.log('handleUpdate id', id)
  }
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: "space-between", marginBottom: '10px' }}>
        <Typography variant='h4'>Mobile Indent</Typography>
        <Button variant='outlined' onClick={()=>setOpen(true)}>Add Mobile</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableHeadRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Availability</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <StyledTableCellRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.size}</TableCell>
                <TableCell>{row.isAvailable ? 'Available' : 'Not Available'}</TableCell>
                <TableCell>
                  <img src={row.image} alt="Product" width="50" height="50" />
                </TableCell>
                <TableCell>
                  <Tooltip title="Update">
                    <IconButton>
                      <SecurityUpdateGoodIcon onClick={() => handleUpdate(row.name)} />
                    </IconButton>
                  </Tooltip>
                  {" "}
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon onClick={() => handleDelete(row.name)} />
                    </IconButton>
                  </Tooltip>

                </TableCell>
              </StyledTableCellRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modal  content={<Mobile setOpen={setOpen}/>} open={open} setOpen={setOpen}/>
    </Paper >
  );
};

export default TableExample;
