import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterSideBar from './FilterSideBar';
import MobileList from './List';
import { useDispatch } from 'react-redux';
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
  }
});

export default function Moblie() {
  const [mobileList, setMobileList] = useState<any>([])
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(action.getMobileListRequest(getListOfAllMobile));
  }, [])
  const getListOfAllMobile = (callbackData:any) => {
    try {
      // setMobileList( callbackData?.payload)
     
      const transformedProducts = callbackData?.payload?.map((product:any) => {
        const base64Image = product.img.data.toString("base64");
        const imageSrc = `data:image/png;base64,${base64Image}`;
        return { ...product, img: imageSrc };
      });
      setMobileList(transformedProducts)
    } catch (error) {
      console.log(error);
    }
  };
  
  const isXsScreen = useMediaQuery((theme: any) => theme.breakpoints.down('md'));
  return (

    <Box sx={{ flexGrow: 1, bgcolor: "#f1f2f6", height: '100vh', }}>
      <Grid container spacing={1}>
        <Grid item md={2}>
          {isXsScreen ? null : (
            <FilterContainer>
              <FilterSideBar />
            </FilterContainer>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          <FilterContainer>
            {
              mobileList?.map((item:any, index:any) => (
                <Item key={index + 1} ><MobileList data={item} /></Item>
              ))
            }
          </FilterContainer>
        </Grid>
      </Grid>
    </Box>

  );
}
