import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mobileImg from '../Mobiless/img/pocomobile.png'
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CounterComponent from "./IncDec";
import * as action from './Reduxx/cartActions';
import { useDispatch } from 'react-redux';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    padding: 0,
    borderRadius: 0,
    "& img": {
        width: "50%",
        height: "auto",

    },
}));

const MobileName = styled("h2")(({ theme }) => ({
    color: "#000",
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(20),
    marginBottom: 0,
    textAlign: 'start',

}));
const MobilePrice = styled("p")(({ theme }) => ({
    textAlign: 'start',
}));
const MobilePercent = styled("span")(({ theme }) => ({
    textAlign: 'start',
    color: 'green',
    fontWeight: 1000,

}));

const Rating = styled("p")(({ theme }) => ({
    color: "#808080",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin:0,
    // marginBottom: theme.spacing(2),
    "& span": {
        display: "block",
        marginRight: theme.spacing(1),
        backgroundColor: 'green',
        color: "#FFF",
        paddingRight: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        borderRadius: "5px"
    },
    "& svg": {
        fill: "#FFC107",
        marginRight: theme.spacing(0.5),
    },
    "& p": {
        fontWeight: 900,
    },
}));

const FeatureList = styled("ul")(({ theme }) => ({
    listStyle: "none",
    margin: 0,
    padding: 0,
}));

const FeatureItem = styled("li")(({ theme }) => ({
    color: "#808080",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    listStyleType: "circle",
    // marginBottom: theme.spacing(1),
    "& ul li": {
        fontWeight: 900,
        marginRight: theme.spacing(2),
        textAlign: 'start'

    },
    "& span": {
        paddingRight: '5px',
        paddingLeft: '5px',
        fontWeight: 900,
    }
}));
const TotalTText = styled("p")(({ theme }) => ({
    textAlign: 'start',
    color: '#000',
    fontWeight: 1000,
    // padding: "10px",
    fontSize: '15px',
    margin:0

}));
type CustomButtonProps = {
    component?: React.ElementType;
    to: string;
};
export default function CartItems({ data }: any) {
    const dispatch = useDispatch();
    const removeToCart=async(id:any)=>{
        dispatch(action.removeCartRequest(id));
        console.log("removeToCart id",id);
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Box >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Item>
                                <img src={mobileImg} alt="mobile" />
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <MobileName>{data?.title.toUpperCase()} {" "} ({" "} {data?.features?.ram + " | " + data?.features?.rom}{" "} )
                                </MobileName>
                              
                                <Rating>
                                    <span>{data?.ratings?.overallRating}*
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 16.3l-5.83 3.54 1.69-6.18L3.56 9.16l6.22-.54L12 3l2.22 5.62 6.22.54-4.3 3.53 1.69 6.18L12 16.3z" />
                                        </svg>
                                    </span>
                                    <p>{data?.ratings?.totalRatings} Rating &amp; {data?.ratings?.totalReviews}  Reviews</p>
                                </Rating>
                                <TotalTText>
                                    < i className="fa fa-inr"></i>{data?.price}
                                </TotalTText>
                                <FeatureList>
                                    <FeatureItem> <span>{data?.features?.ram} {" "}</span>{" "} | {" "} <span>{data?.features?.rom}</span> | <span>Upto</span> | </FeatureItem>
                                    <FeatureItem> <span>{data?.features?.screenSize}</span> </FeatureItem>
                                    <FeatureItem> <span>{data?.features?.secondaryCamera}</span>| <span>{data?.features?.primaryCamera}</span> </FeatureItem>
                                    <FeatureItem> <span> {data?.features?.batteryCapacity}</span> </FeatureItem>
                                    <FeatureItem> <span> {data?.features?.warranty}</span> </FeatureItem>
                                </FeatureList>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Item>
                                <MobilePrice>Delivery in {"2 days"} ,{"wed"} |  <MobilePercent>Free </MobilePercent></MobilePrice>
                            </Item>
                        </Grid>
                    </Grid>
                   
                </Box>
               
                <Box sx={{ display: 'flex', justifyContent: "space-between", }}>
                <CounterComponent />
                  <Button size="small" sx={{
                    backgroundColor: "#e2232e",
                    color: "#fff",
                    width:'auto',
                     padding:"0 10px",
                    // padding:'10px',
                     margin: '10px',
                    '&:hover': {
                      backgroundColor: "#fff",
                      color: "#fb641b",
                      border: '1px solid #fb641b'
                    }
                  }} onClick={()=>removeToCart(data?._id)}>Remove</Button>
                </Box>
            </Box>

        </>

    );

}
