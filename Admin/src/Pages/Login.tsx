import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin, setToken } from '../App/Service/Service'
import toast from 'react-hot-toast';
import './Style.css';
import { Dispatch } from "redux";
import { useAppDispatch } from "../App/Redux/hooks";
import { loginUser } from "../App/Service/service.commondata";

function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useAppDispatch();

  const handleInputChange = async (e: any) => {
    await setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (userData.username === "" || userData.password === "") {
        setErrorMessage("Empty username/password field")
      }
      const res: any = await dispatch(loginUser({ email: userData?.username, password: userData.password }))
      console.log('rtk res', res)
      if (res?.payload?.status === 200 && res?.payload?.data?.success && res?.payload?.data?.payload?.isAdmin) {
        setToken(res?.data?.accesToken)
        navigate('/dashboard')
        toast.success(res?.payload?.data?.message);
      } else {
        toast.error('User Not Admin');
      }
    } catch (error) {
      console.log('error', error);

    }
  };

  return (

    <section className="vh-100 login_main_container" >
      <div className="d-flex align-items-center justify-content-center  vh-100">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card shadow-2-strong login_cont" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <form onSubmit={handleSubmit}>
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="tex" id="typeEmailX-2" className="form-control form-control-lg" placeholder="user name"
                      name="username"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="jack@123"
                      name="password"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>


                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember Me </label>
                  </div>
                  {errorMessage && (
                    <p className="text-danger"> {errorMessage} </p>
                  )}
                  <div>
                    <button className="btn btn-primary btn-lg btn-block login_btn" type="submit">
                      Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Login;