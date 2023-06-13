import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { getToken } from '../Config/Service/Service';

const AuthPoint = ({Component}:any) => {
    const navigate = useNavigate()
    useEffect(()=>{
        const isAuthenticated = getToken();
        if (isAuthenticated){
            navigate('/dashboard')
        }
      }, [])

  return (
    <>
    <Component/>
    </>
  )
}

export default AuthPoint