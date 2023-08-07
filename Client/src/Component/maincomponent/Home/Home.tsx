import React from 'react'
import Carousel from './Carousel'
import TemplateCarousel from './TemplateCarousel'
const    Items= [
  {
      Name: "Macbook Pro",
      Image: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/a8c05695e910d0ad.jpg?q=50",
      path:"/moblies"
  },
  {
      Name: "iPhone",
      Image: "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/58ffd2fd90f0e2a1.png?q=50",
      path:"/moblies"
  },  
  {
      Name: "iPhone",
      Image: "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/33dffe51193ad724.jpg?q=50",
      path:"/moblies"
  },
  {
      Name: "iPhone",
      Image: "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/f087885f5bc98f4f.jpg?q=50",
      path:"/moblies"
  }
]
function Home() {
  return (
   <>
   <TemplateCarousel templateData={Items} />
   <br />
   <TemplateCarousel templateData={Items} />
   </>
  )
}

export default Home