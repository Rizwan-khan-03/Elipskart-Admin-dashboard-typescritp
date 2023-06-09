
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getToken } from '../App/Service/Service';
const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate()
  const isAuthenticated = getToken()
 
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  return (
    <>
      {isAuthenticated && <Component />}
    </>
  )
}

export default PrivateRoute



