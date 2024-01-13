import React,{useEffect} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
// import { loginWithGoogle } from '../../Redux/actions/authActions';
import { toast } from "react-toastify";
import * as action from '../store/Auth/AuthAction';
import { useSelector, useDispatch } from 'react-redux';
import {  setToken } from '../Config/Service/Service';
let body = {
    googleToken: ""
};

const SignUpWithGoogle = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginSuccess=useSelector((state)=>state?.authentication)
    // Wait for the loginSuccess state to update
    useEffect(() => {
      if (loginSuccess?.data?.success) {
        setToken(loginSuccess?.data?.accesToken);
        navigate("/home");
      } else {
        console.log("loginSuccess", loginSuccess?.data?.message);
      }
    }, [loginSuccess]);
    const handleSuccess = async(credentialResponse) => {
        console.log('credentialResponse',credentialResponse);
        if (credentialResponse?.credential) {
            body.googleToken = credentialResponse?.credential
            await  dispatch(action.getLogin(body));
        }
    };

    const handleError = () => {
        console.log('Login Failed');
        // Handle error if needed
    };

    return (
        <div className='rounded-xl w-fit pt-3 flex justify-center items-center text-center '>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                buttonText="Login with Google"
            />
        </div>
    );
};

export default SignUpWithGoogle;

