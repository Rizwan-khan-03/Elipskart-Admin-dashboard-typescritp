import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TemplateCarousel from './TemplateCarousel'
import Carousel from './CardCarousel';
import img1 from './pexels-anna-nekrashevich-6802048.jpg';
import img2 from './pexels-lukas-590016.jpg';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
const data = [
  [
    {
      Name: "mobiles",
      Image: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/a8c05695e910d0ad.jpg?q=50",
      path: "/mobiles",
      id: 1
    },
    {
      Name: "electronics",
      Image: "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/58ffd2fd90f0e2a1.png?q=50",
      path: "/electronics",
      id: 2
    },

    {
      Name: "iPhone",
      Image: "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/f087885f5bc98f4f.jpg?q=50",
      path: "/grocery",
      id: 3
    }
  ],
]
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Home() {
  return (
    <>
      {data?.map((item, index) => (
        <TemplateCarousel templateData={item} id={index + 1} />
      ))}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={12} sm={8} md={2} >
            <Item>
              <div>
                <div className="advertising-component">
                  <img src={img2} alt="Advertisement" style={{ width: '100%', height: '50%' }} />
                  <div className="ad-info">
                    <h3>Check out our Amazing Product!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et orci nec libero tristique sagittis.</p>
                    <a href="#" className="ad-link">Learn More</a>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={12} sm={8} md={8} >
            <Item>  <Carousel /></Item>
          </Grid>
          <Grid xs={12} sm={8} md={2} >
            <Item>
              <div>
                <div className="advertising-component">
                  <img src={img2} alt="Advertisement" style={{ width: '100%', height: '50%' }} />
                  <div className="ad-info">
                    <h3>Check out our Amazing Product!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et orci nec libero tristique sagittis.</p>
                    <a href="#" className="ad-link">Learn More</a>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default Home


