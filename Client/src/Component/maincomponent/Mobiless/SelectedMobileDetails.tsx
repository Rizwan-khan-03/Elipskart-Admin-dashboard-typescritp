import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import * as action from './Reduxx/MobileAction';
import MobileImageList from './MobileImgList';
import './mobile.css';
import MobileImg from './MobileImg';
import MobileDetails from './MobileDetails';
import {  useParams } from 'react-router-dom';
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
const FilterContainerForImgList = styled(Box)({
  height: "62vh",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.3em"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888"
  }
});

export default function SelectedMobileDetails() {
  const [mobileData, setMobileData] = useState<any>([])
  const [imgSrc, setImgSrc] = useState('')
  const mobileId = useParams()
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(action.getMobileDetailsRequest(mobileId?.id, getMobileDetails));
  }, [])
  const getMobileDetails = async (callbackdata: any) => {
    try {

      setMobileData(callbackdata?.payload)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} >
          {/*  */}
          <Grid container spacing={1}>
            {/* <Grid item xs={3} md={3} >
              <FilterContainerForImgList>
                <MobileImageList setImgSrc={setImgSrc} />
              </FilterContainerForImgList>
            </Grid> */}
            <Grid item xs={9} md={12} >
              <MobileImg imgSrc={mobileData?.img} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <FilterContainer>
            <MobileDetails mobileData={mobileData}/>
          </FilterContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
