import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterSideBar from './FilterSideBar';
import GroceriesList from './List';
import { getAllMobileList } from '../../../Config/Service/mobileService';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './Reduxx/MobileAction';
import { useMediaQuery } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));
const FilterContainer = styled(Box)({
  height: "100vh",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.3em"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888"
  },
  backgroundColor: '#fff'
});

export default function Grocery() {
  const [mobileList, setMobileList] = useState([])
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(action.getMobileListRequest(getListOfAllMobile));
  }, [])
  const getListOfAllMobile = async (callbackdata: any) => {
    try {
      setMobileList(callbackdata?.payload)
    } catch (error) {
      console.log(error);
    }
  }
  const isXsScreen = useMediaQuery((theme:any) => theme.breakpoints.down('md'));
console.log('isXsScreen',isXsScreen);

  const Container = styled(Grid)({
    flexGrow: 1,
    padding: "20px",
  });
  return (

    <Box sx={{ flexGrow: 1, bgcolor: "#f1f2f6", height: '100vh', }}>
      <Grid container spacing={1} columns={12}>
        <Grid item   md={2}>
          {isXsScreen ? null : (
            <FilterContainer>
              <FilterSideBar />
            </FilterContainer>
          )}
        </Grid>
        <Grid item  xs={12} sm={12} md={10}>
          <FilterContainer>
            <GroceriesList data={mobileList} />
          </FilterContainer>
        </Grid>
      </Grid>
    </Box>

  );
}
