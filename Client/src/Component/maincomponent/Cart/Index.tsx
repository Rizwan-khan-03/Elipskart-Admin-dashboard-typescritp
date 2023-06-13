import React, { useEffect, useState } from 'react';
import './cart.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CartItems from './CartItems';
import { Typography, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  backgroundColor: '#fff',
  marginBottom: theme.spacing(1),

}));
const PlaceOrder = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  border: '2px solid #f1f2f6'

}));
const MobilePercent = styled("span")(({ theme }) => ({
  textAlign: 'start',
  color: 'green',
  fontWeight: 1000,
  padding: "10px"

}));
const TotalTText = styled("span")(({ theme }) => ({
  textAlign: 'start',
  color: '#000',
  fontWeight: 1000,
  padding: "10px",
  fontSize: '16px'

}));

function CartDtails() {

  const cartItems: any = useSelector((state: any) => state?.cart)
  console.log('cartItems', cartItems);
  const [cardData, setCardData] = useState<any>({
    totalDiscount: '',
    totalDeliveryCharges: '',
    fee: 140,
    totalAmount: '',
    totalItemsPrice: '',
    saving: ''
  });
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

  const cartHandler = async () => {
    const filteredItems = cartItems?.cart?.filter((item: any) => {
      if (item?.price && item.discountPercentage) return item
    });

    const totalDiscount = filteredItems.reduce((acc: number, item: any) => {
      console.log("totalDiscount acc ,item", acc, item);
      return acc + item?.discountPercentage;
    }, 0);
    const totalAmount = filteredItems.reduce((acc: number, item: any) => {
      console.log("totalAmount acc ,item", acc, item);

      return acc + item?.price;
    }, 0);
    const savings = totalAmount * (totalDiscount / 100)

    setCardData((prevData: any) => {
      return {
        ...prevData,
        totalDiscount: totalDiscount,
        totalItemsPrice: totalAmount,
        totalAmount: totalAmount + prevData?.fee,
        saving: savings
      };
    });
  };


  useEffect(() => {
    cartHandler()

  }, [cartItems])

  return (
    <div className='cart_container'>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={1} >
            <Grid item xs={12} md={8}>
              <Grid item xs={12} md={12}>
                <Item>
                  <Stack spacing={2} direction="row"
                    justifyContent="space-between"
                    alignItems="baseline">
                    <div>
                      <span>Deliver To : </span><span><strong>{"City"}{" "}</strong></span> - <span>{"pincode"}</span>
                    </div>
                    <div><Button variant="outlined" size={"small"}>change</Button></div>
                  </Stack>
                </Item>
              </Grid>
              <Grid item xs={12} md={12} >
                <FilterContainer>
                  <Item>
                    {cartItems?.cart?.map((item: any) => (
                      <Item>
                        <CartItems data={item} />
                        <Divider />
                      </Item>
                    ))}
                  </Item>
                </FilterContainer>
              </Grid>
              <Grid xs={12} md={12}>
              <PlaceOrder sx={{ marginBottom: '0', marginTop: '5px' }}>
                <Box sx={{ display: 'flex', justifyContent: "flex-end", marginTop: '5px', }}>
                  <Button size="large" sx={{
                    backgroundColor: "#fb641b",
                    color: "#fff",
                    marginRight: '5px',
                    '&:hover': {
                      backgroundColor: "#fff",
                      color: "#fb641b",
                      border: '1px solid #fb641b'
                    }
                  }}>Place Order</Button> 
                </Box>
              </PlaceOrder>
            </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                <Stack spacing={2} direction="row"
                  justifyContent="space-between"
                  alignItems="baseline" >
                  <Typography sx={{ padding: '10px 0 10px 10px' }}>{`Price (${cartItems?.cart?.length} Items)`}</Typography>
                  <Typography ><i className="fa fa-inr"></i>{cardData?.totalItemsPrice}</Typography>
                </Stack>
                <Stack spacing={2} direction="row"
                  justifyContent="space-between"
                  alignItems="baseline" >
                  <Typography sx={{ padding: '10px 0 10px 10px' }}>{"Discounts"}</Typography>
                  <Typography ><MobilePercent>{cardData?.totalDiscount} % </MobilePercent></Typography>
                </Stack>
                <Stack spacing={2} direction="row"
                  justifyContent="space-between"
                  alignItems="baseline" >
                  <Typography sx={{ padding: '10px 0 10px 10px' }}>{"Delivery Charges"}</Typography>
                  <Typography ><MobilePercent>Free </MobilePercent></Typography>
                </Stack>
                <Stack spacing={2} direction="row"
                  justifyContent="space-between"
                  alignItems="baseline" >
                  <Typography sx={{ padding: '10px 0 10px 10px' }}>{"Secured Packaging Fee"}</Typography>
                  <Typography ><i className="fa fa-inr"></i>{cardData?.fee}</Typography>
                </Stack>
                <Divider />
                <Stack spacing={2} direction="row"
                  justifyContent="space-between"
                  alignItems="baseline" >
                  <TotalTText sx={{ padding: '10px 0 10px 10px' }}>{"Total Amount"}</TotalTText>
                  <TotalTText ><i className="fa fa-inr"></i>{cardData?.totalAmount}</TotalTText>
                </Stack>
                <Divider />
                <Stack spacing={2} direction="row"
                  justifyContent="space-between"
                  alignItems="baseline" >
                  <MobilePercent>
                    {"You will Save "}
                    <span>Extra</span>
                    <span> <i className="fa fa-inr"></i>{cardData?.saving} on this order</span>
                  </MobilePercent>
                </Stack>
              </Item>
            </Grid>
           
          </Grid>
          
        </Box>
      </Container >

    </div >
  )
}

export default CartDtails