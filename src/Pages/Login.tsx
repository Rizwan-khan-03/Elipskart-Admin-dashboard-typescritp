import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin, setToken } from '../App/Service/Service'
import toast from 'react-hot-toast';
import './Style.css'
function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  console.log("auth", localStorage.getItem("isAuthenticated"));
  const navigate = useNavigate();

  const handleInputChange = async (e: any) => {
    await setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
try {
  
} catch (error) {
  
}
    e.preventDefault();
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (userData.username === "superadmin" && userData.password === "Nishant@123") {
      setErrorMessage((prevState) => ({
        value: "",
      }));
      const res: any = await loginAdmin({ username: userData?.username, password: userData.password })
      console.log('res super admin', res?.data?.token)
      if (res?.responseCode === 200) {
        setToken(res?.data?.token)
        navigate('/dashboard')
        toast.success('Login Successfull');
      }
    } else {
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
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
                      type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password"
                      name="password"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>


                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember Me </label>
                  </div>
                  {errorMessage.value && (
                    <p className="text-danger"> {errorMessage.value} </p>
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