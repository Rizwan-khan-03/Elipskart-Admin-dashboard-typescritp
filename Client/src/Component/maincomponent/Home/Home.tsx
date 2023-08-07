import React from 'react'
import TemplateCarousel from './TemplateCarousel'

function Home() {
  return (
    <>
      {data?.map((item, index) => (
        <TemplateCarousel templateData={item} id={index + 1} />
      ))}

    </>
  )
}

export default Home

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
  ]
]
