import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TemplateCarousel from './TemplateCarousel'
import Carousel from './CardCarousel'
function Home() {
  return (
    <>
      {data?.map((item, index) => (
        <TemplateCarousel templateData={item} id={index + 1} />
      ))}
      <Carousel />
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
