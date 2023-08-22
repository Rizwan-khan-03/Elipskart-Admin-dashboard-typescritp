import React from 'react'
import { Link } from "react-router-dom";

function NavigateTo({url}: any) {
  console.log('url',url);
  
  return (
    <>
      <Link to={url} />
    </>
  )
}

export default NavigateTo


