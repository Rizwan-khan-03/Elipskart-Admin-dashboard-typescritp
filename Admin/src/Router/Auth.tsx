import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { getToken } from '../App/Service/Service';
import toast from 'react-hot-toast';
const isAuthenticated = getToken();
const AuthPoint = ({Component}:any) => {
    const navigate = useNavigate()
    useEffect(()=>{
        if (isAuthenticated){
          console.log('if isAuthenticated',isAuthenticated)
            navigate('/dashboard')
        }else{
          console.log('else isAuthenticated',isAuthenticated)
          toast.error('You Are Not Authorised');
          navigate('/')
        }
      }, [isAuthenticated])

  return (
    <>
    <Component/>
    </>
  )
}

export default AuthPoint