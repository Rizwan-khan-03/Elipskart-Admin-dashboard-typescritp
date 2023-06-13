import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import Button from "@mui/material/Button";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as action from './Reduxx/MobileAction';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 350,
      md: 650,
      lg: 900,
      xl: 1200,
    },
  }
});

export default function MobileImg({ imgSrc }: any) {
  const navigate =useNavigate()
  const cartUrl:any=useParams()
  const dispatch = useDispatch();
  const gotToCart=async()=>{
    navigate('/cart')
    console.log("gotToCart");
    dispatch(action.adCartRequest(cartUrl?.id));
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 450,
          backgroundColor: "pink",
          display: "grid",
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(1, 1fr)",
            tablet: "repeat(1, 1fr)",
            desktop: "repeat(1, 1fr)"
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column"
          }
        }}
      >
        <ImageListItem>
          <img
            src={`${imgSrc}?w=248&fit=crop&auto=format`}
            srcSet={`${imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={"img"}
            loading="lazy"
          />
        </ImageListItem>

      </Box>
      <Box sx={{ display: 'flex', justifyContent: "space-around", marginTop: '5px' }}>
        <Button onClick={()=>gotToCart()}  size="large" sx={{
          backgroundColor: "#ff9f00",
          color: "#fff",
          width: "50%",
          marginRight: '5px',
          '&:hover': {
            backgroundColor: "#fff",
            color: "#ff9f00",
            border:'1px solid #ff9f00'
          }
        }}>Add To Cart</Button>
        <Button onClick={()=>gotToCart()} size="large" sx={{
          backgroundColor: "#fb641b",
          color: "#fff",
          width: "50%",
          marginLeft: '5px',
          '&:hover': {
            backgroundColor: "#fff",
            color: "#fb641b",
            border:'1px solid #fb641b'
          }
        }}>Buy Now</Button>
      </Box>

    </ThemeProvider>
  );
}
