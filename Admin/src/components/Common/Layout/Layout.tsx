import React, { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { clearStorage } from '../../../App/Service/Service';
// import Header from './Header';
// import SideBaar from './SideBaar';
import Sidebar2 from './Sidebar2';
import { useAppSelector } from "../../../App/Redux/hooks";
import { setUserId } from '../../../App/Service/Service';
function Layout() {
  const user: any = useAppSelector(state => state?.commonDataSlice?.user)
 useEffect(()=>{
  setUserId(user._id)
 },[user])
  return (
    <>
      {/* <SideBaar /> */}
      <Sidebar2 />
      {/* <Header /> */}
    </>
  )
}

export default Layout