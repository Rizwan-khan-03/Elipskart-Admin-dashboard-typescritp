import React from 'react';
import { useNavigate } from "react-router-dom";
import { clearStorage } from '../../../App/Service/Service';
import Header from './Header';
import SideBaar from './SideBaar';
import Sidebar2 from './Sidebar2';

function Layout() {

  return (
    <>
      {/* <SideBaar /> */}
      <Sidebar2 />
      {/* <Header /> */}
    </>
  )
}

export default Layout