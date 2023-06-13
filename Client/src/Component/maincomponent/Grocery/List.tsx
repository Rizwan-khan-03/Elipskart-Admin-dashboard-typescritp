// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Link } from 'react-router-dom';
// const cardStyles = {
//     width: "100%",
//     "@media (min-width: 600px)": {
//         width: "auto"
//     },
//     height: "auto"
// };
// export default function GroceriesList(data: any) {
//     console.log("data", data);

//     return (
//         <Link to={''} style={{ textDecoration: 'none', }}>
//             <Box sx={{ width: "100%" }}>
//                 <Grid container spacing={2}>
//                     {data?.data?.map((item: any) => (
//                         <Grid item xs={12} sm={6} md={3} key={item}>
//                             <Card sx={cardStyles}>
//                                 <CardMedia
//                                     component="img"
//                                     alt="green iguana"
//                                     height="50%"
//                                     image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         Lizard
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         Lizards are a widespread group of squamate reptiles
//                                     </Typography>
//                                 </CardContent>
//                                 <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
//                                     <Button sx={{width:'50%',color:'#000',fontSize:'16px'}} size="small" variant="outlined">{200 + " " + "g"}</Button>
//                                     <Button sx={{width:'50%',color:'#2874f0',fontSize:'16px',textTransform:"capitalize"}} size="small" variant="outlined">Add Item</Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </Link>

//     );
// }
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
  height: "50%",
  margin: "30px 30px 0 30px"
});

export default function GroceriesList(data: any) {

  return (
    <Link to={''} style={{ textDecoration: 'none', }}>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          {data?.data?.map((item: any) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Card sx={cardStyles}>
                <ImageWrapper>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                  />
                </ImageWrapper>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button sx={{ width: '50%', color: '#000', fontSize: '16px' }} size="small" variant="outlined">
                    {200 + " " + "g"}
                  </Button>
                  <Button sx={{ width: '50%', color: '#2874f0', fontSize: '16px', textTransform: "capitalize" }} size="small" variant="outlined">
                    Add Item
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Link>
  );
}

