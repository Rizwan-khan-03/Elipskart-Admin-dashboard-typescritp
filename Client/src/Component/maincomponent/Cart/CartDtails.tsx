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
import { useSelector, useDispatch } from 'react-redux';
import * as action from './Reduxx/cartActions';
import { useNavigate } from 'react-router-dom';
import SkeletonCart from './Skelton';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from "react-toastify";
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
const FilterContainer = styled(Box)({
    height: "80vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
        width: "0.3em"
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888"
    }
});
const initialData = {
    userId: "",
    products: [],
    amount: 0,
    address: "indore",
    status: "pending"
}
function CartDtails() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cartItems: any = useSelector((state: any) => state?.cart)
    const [order, setOrder] = useState<any>({ ...initialData })
    const [cardData, setCardData] = useState<any>({
        totalDiscount: '',
        totalDeliveryCharges: '',
        fee: 0,
        totalAmount: '',
        totalItemsPrice: '',
        saving: ''
    });
    const [product, setProduct] = useState({
        price: 10,
        name: "Payment Details",
        description:'Address and Card Details',
        currency: 'USD',
        projectId: '',
    })
    // const user :any= JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        cartHandler()
        let itemIds: any = []
        let amount = 0
        cartItems?.cart?.filter((item: any) => {
            if (item?._id) {
                itemIds.push({ productId: item?._id, quantity: 1 })
                amount += item?.price
            } else if (item?.price) {

            }
        });
        setOrder((prev: any) => ({
            ...prev,
            userId: "6454fa649b0ffa5392ed86ba",
            products: itemIds,
            amount: amount,
        }))
    }, [cartItems])
    const cartHandler = async () => {
        const filteredItems = cartItems?.cart?.filter((item: any) => {
            if (item?.price && item.discountPercentage) return item
        });

        const totalDiscount = filteredItems.reduce((acc: number, item: any) => {
            return acc + item?.discountPercentage;
        }, 0);
        const totalAmount = filteredItems.reduce((acc: number, item: any) => {

            return acc + item?.price;
        }, 0);
        const savings = totalAmount * (totalDiscount / 100)

        setCardData((prevData: any) => {
            return {
                ...prevData,
                totalDiscount: totalDiscount,
                totalItemsPrice: totalAmount,
                totalAmount: totalAmount + prevData?.fee,
                saving: savings,
                fee: order.products.length ? 140 : 0,
            };
        });
    };
    const placeOrder = async (id: any) => {
        if (order.userId && order.products.length && order.amount && order.address && order.status) {
            const res: any = await dispatch(action.placeOrderRequest({ order: order, callback: orderCallBack }));
        } else {
            console.log('place order ', order);
        }
    }
    const orderCallBack = (value: any) => {
        if (value?.success) {
            dispatch(action.removeCartRequest("empty"));
            navigate('/home')
        }
    }
    const makePayment = async (token:any) => {
        try {
            const body = {
                token,
                product
            };
            const response = await fetch('http://localhost:5000/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                toast.success("Payment succeeded");
            } else {
                toast.error("Payment failed");
            }
        } catch (error) {
            toast.error("An error occurred");
        }
    };
    const stripe = (
        <StripeCheckout
            token={makePayment}
            stripeKey={process.env.REACT_APP_KEY || ""}
            name="Payment Details"
            email={product?.name}
            currency="USD"
            description={product?.description}
            amount={product?.price * 100}
            shippingAddress
            billingAddress
            panelLabel="Place Order"
            allowRememberMe
        />   
    )

    return (
        <div className='cart_container'>
            <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
                <Box sx={{ flexGrow: 1, height: '86vh' }} >
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
                                        {
                                            order.products.length ?
                                                cartItems?.cart?.map((item: any) => (
                                                    <Item>
                                                        <CartItems data={item} />
                                                        <Divider />
                                                    </Item>
                                                )) : <SkeletonCart />

                                        }
                                    </Item>
                                </FilterContainer>
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
                                <Box sx={{ display: 'flex', justifyContent: "flex-end", marginTop: '5px', }}>
                                    {/* <Button size="large" sx={{
                                        backgroundColor: "#fb641b",
                                        color: "#fff",
                                        marginRight: '5px',
                                        '&:hover': {
                                            backgroundColor: "#fff",
                                            color: "#fb641b",
                                            border: '1px solid #fb641b'
                                        }
                                    }}
                                        disabled={!order.userId || !order.products.length || !order.amount || !order.address || !order.status}
                                        onClick={placeOrder}
                                    >Place Order</Button> */}
                                    {stripe}
                                </Box>
                            </Item>
                        </Grid>

                    </Grid>

                </Box>
            </Container >

        </div >
    )
}

export default CartDtails