import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mobileImg from './img/pocomobile.png'
import { makeStyles } from "@mui/styles";
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import * as action from './Reduxx/MobileAction';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




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
    margin: 0,
    textAlign: 'start',

}));
const MobilePrice = styled("p")(({ theme }) => ({
    textAlign: 'start',
    margin: 0
}));
const MobilePercent = styled("span")(({ theme }) => ({
    textAlign: 'start',
    color: 'green',
    fontWeight: 1000,
    margin: 0

}));

const Rating = styled("p")(({ theme }) => ({
    color: "#808080",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    // marginBottom: theme.spacing(2),
    "& span": {
        display: "block",
        marginRight: theme.spacing(1),
        backgroundColor: '#388e3c',
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
        margin: 0
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
type CustomButtonProps = {
    component?: React.ElementType;
    to: string;
};
export default function MobileDetails({ data }: any) {
    const bankOffer = [1, 2, 3, 4, 5, 6]
    const [mobileData, setMobileData] = useState<any>([])
    const dispatch = useDispatch();
    const mobileId = useParams()
    const [postalCode, setPostalCode] = useState('');
    const handlePostalCodeChange = (event: any) => {
        setPostalCode(event.target.value);
    };
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
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Box >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <MobileName>{mobileData?.title?.toUpperCase()} {" "} ({" "} {mobileData?.features?.ram + " | " + mobileData?.features?.rom}{" "} )
                                </MobileName>
                                <Rating>
                                    <span>{mobileData?.ratings?.overallRating}*
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 16.3l-5.83 3.54 1.69-6.18L3.56 9.16l6.22-.54L12 3l2.22 5.62 6.22.54-4.3 3.53 1.69 6.18L12 16.3z" />
                                        </svg>
                                    </span>
                                    <p>{mobileData?.ratings?.totalRatings} Rating &amp; {mobileData?.ratings?.totalReviews}  Reviews</p>
                                </Rating>
                                <MobilePrice>
                                    <MobilePercent>
                                        <span>Extra</span>
                                        <span> <i className="fa fa-inr"></i>1200 off</span>
                                    </MobilePercent>
                                </MobilePrice>
                                <MobileName> <span> <i className="fa fa-inr"></i> {" "}{mobileData?.price}</span></MobileName>

                                <FeatureList>
                                    <FeatureItem> <span>{mobileData?.features?.ram}</span> | <span>{mobileData?.features?.rom}</span> | <span>Upto</span> | </FeatureItem>
                                    <FeatureItem> <span>{mobileData?.features?.screenSize}</span> </FeatureItem>
                                    <FeatureItem> <span>{mobileData?.features?.secondaryCamera}</span>| <span>{mobileData?.features?.primaryCamera}</span> </FeatureItem>
                                    <FeatureItem> <span> {mobileData?.features?.batteryCapacity}</span> </FeatureItem>
                                    <FeatureItem> <span> {mobileData?.features?.warranty}</span> </FeatureItem>
                                </FeatureList>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FeatureList>
                                {
                                    bankOffer?.map((item, ind) => (
                                        <Box key={`offer${ind + 1}`} display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                            <img width={18} src={"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"} alt="Bank Offer" />
                                            <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                                <strong>Bank Offer</strong>: Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above.
                                                <Typography variant="body2" color="textSecondary" component="span" >
                                                    <Link to={''} style={{ textDecoration: 'none', }}>T&C.</Link>
                                                </Typography>
                                            </Typography>
                                        </Box>
                                    ))
                                }
                            </FeatureList>
                        </Grid>
                        <Grid container xs={12} md={4} >
                            <FeatureList>
                                <FeatureItem>
                                    <Box display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                        <Typography variant="body1" sx={{ fontSize: "14px", margin: "16px" }}>
                                            Delivery
                                        </Typography>
                                        <div className='loacation_containe'>
                                         <span className='location_icon'>
                                         <svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 48 48" width="24px" height="24px">
                                                <path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z" /><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z" /><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z" /><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z" />
                                                <path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z" />
                                            </svg>
                                         </span>
                                            <input
                                                value={postalCode}
                                                type="number"
                                                onInput={(e: any) => {
                                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                                                }}
                                                onChange={handlePostalCodeChange}
                                                className={postalCode ? 'input-field with-value' : 'input-field'}
                                            />

                                        </div>
                                    </Box>
                                </FeatureItem>
                            </FeatureList>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>

    );

}
