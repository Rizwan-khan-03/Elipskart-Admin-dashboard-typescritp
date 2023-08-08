import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TemplateCarousel from './TemplateCarousel'
import Carousel from './CardCarousel';
import img1 from './pexels-anna-nekrashevich-6802048.jpg';
import img2 from './pexels-lukas-590016.jpg'
function Home() {
  return (
    <>
      {data?.map((item, index) => (
        <TemplateCarousel templateData={item} id={index + 1} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '20%' ,marginLeft:'20px'}}>
          <div className="advertising-component">
            <img src={img2} alt="Advertisement" style={{ width: '100%',height:'50%' }}/>
            <div className="ad-info">
              <h3>Check out our Amazing Product!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et orci nec libero tristique sagittis.</p>
              <a href="#" className="ad-link">Learn More</a>
            </div>
          </div>
        </div>
        <div style={{ width: '60%' }}>
          <Carousel />
        </div>
        <div style={{ width: '20%' ,marginRight:'20px'}}>
          <div className="advertising-component">
            <img src={img2} alt="Advertisement" style={{ width: '100%' ,height:'50%'}}/>
            <div className="ad-info">
              <h3>Check out our Amazing Product!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et orci nec libero tristique sagittis.</p>
              <a href="#" className="ad-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
const card = (
  <Card sx={{ maxWidth: 245 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Typography gutterBottom variant="subtitle1" component="div">
          name
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div" style={{ color: 'green' }}>
          incl of offer
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          <span>from</span>  <span>Rs 7999</span>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)
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
