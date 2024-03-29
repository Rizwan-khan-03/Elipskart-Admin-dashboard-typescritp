import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import * as action from './Reduxx/GroceryAction';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
const cardStyles = {
  width: "100%",
  "@media (min-width: 600px)": {
    width: "auto"
  },
  height: "auto"
};

const ImageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "30px 30px 0 30px"
});

export default function GroceriesList(data: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gotToCart = async (event: any, id: any) => {
    event.preventDefault()
    dispatch(action.adCartRequest(id));
    navigate('/cart')
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        {data?.data?.map((item: any) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Link to={`/grocery/${item?._id}`} style={{ textDecoration: 'none', }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140, margin: "10px" }}
                  image={item?.img}
                  title={item?.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item?.desc}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button disabled sx={{ width: '50%', color: '#000', fontSize: '16px' }} size="small" variant="outlined">
                    {item?.weight + " " + "g"}
                  </Button>
                  <Button sx={{
                    width: '50%',
                    color: '#2874f0',
                    fontSize: '16px',
                    textTransform: "capitalize"
                  }}
                    onClick={(e) => gotToCart(e, item?._id)}
                    size="small" variant="outlined">
                    Add Item
                  </Button>
                </CardActions>
              </Card>
            </Link>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

