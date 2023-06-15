import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

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
    margin: 0,
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
    margin: 0

}));
interface MediaProps {
    loading?: boolean;
}

export default function SkeletonCart(props: MediaProps) {
    const { loading = false } = props;

    return (
        <>
            {/* <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                action={null}
                title={
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                    />
                }
                subheader={<Skeleton animation="wave" height={10} width="40%" />}
            />
            {<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />}
            <CardContent>
                {
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                }
            </CardContent>
        </Card> */}
            <Box sx={{ flexGrow: 1 }}>
                <Box >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Item>
                                {<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />}

                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <MobileName>
                                    <Skeleton
                                        animation="wave"
                                        height={10}
                                        width="80%"
                                        style={{ marginBottom: 6 }}
                                    />
                                </MobileName>
                                <FeatureList>
                                    <span>
                                        {<Skeleton animation="wave" height={10} width="40%" />}
                                    </span>
                                    {<Skeleton animation="wave" height={10} width="40%" />}
                                </FeatureList>
                                <TotalTText>
                                    {/* <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" /> */}
                                </TotalTText>
                                <FeatureList>
                                    {<Skeleton animation="wave" height={10} width="40%" />}
                                    {<Skeleton animation="wave" height={10} width="40%" />}
                                    {<Skeleton animation="wave" height={10} width="40%" />}
                                    {<Skeleton animation="wave" height={10} width="40%" />}
                                    {<Skeleton animation="wave" height={10} width="40%" />}
                                </FeatureList>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Item>
                                {<Skeleton animation="wave" height={10} width="40%" />}
                                <p>No Item In Cart</p>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: "flex-end", }}>
                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                </Box>
            </Box>
        </>
    )
}



