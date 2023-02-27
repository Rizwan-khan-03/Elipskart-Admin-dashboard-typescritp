import React from 'react';
import { useNavigate } from "react-router-dom";
import { clearStorage } from '../../../App/Service/Service';
import Header from './Header';
import SideBaar from './SideBaar';

function Layout() {

  return (
    <>
      <SideBaar />
      {/* <Header /> */}
    </>
  )
}

export default Layout