import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Footer } from '../Component/Footer'
import { Header } from '../Component/Header'
import { toast } from 'react-toastify';

export const Login = () => {
  const navigate = useNavigate();
  const onToast = (s) => {
    if ('Login Successfull!!' === s) {
      toast.success(s, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.error(s, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }


  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:9090/auth/singin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
      }),
    });
    
    const data = await res.json();
    sessionStorage.setItem("token", data.jwt);
    if(res.status===200){
      onToast('Login Successfull!!');
      window.location.href = "/";
    }else{
      onToast("Invalid Credentials");
    }

  };

  return (
    <>
    

    <Header />
    <div className="d-flex flex-column justify-content-center" id="login-box">
  <div className="login-box-header">
    <h4
      style={{
        color: "rgb(139,139,139)",
        marginBottom: 0,
        fontWeight: 400,
        fontSize: 27
      }}
    >
      Login
    </h4>
  </div>
  <div className="login-box-content">
    <div className="fb-login box-shadow">
      <a
        className="d-flex flex-row align-items-center social-login-link"
        href="#"
      >
        <i
          className="fa fa-facebook"
          style={{
            marginLeft: 0,
            paddingRight: 20,
            paddingLeft: 22,
            width: 56
          }}
        />
        Login with Facebook
      </a>
    </div>
    <div className="gp-login box-shadow">
      <a
        className="d-flex flex-row align-items-center social-login-link"
        style={{ marginBottom: 10 }}
        href="#"
      >
        <i
          className="fa fa-google"
          style={{ color: "rgb(255,255,255)", width: 56 }}
        />
        Login with Google+
      </a>
    </div>
  </div>
  <div className="d-flex flex-row align-items-center login-box-seperator-container">
    <div className="login-box-seperator" />
    <div className="login-box-seperator-text">
      <p
        style={{
          marginBottom: 0,
          paddingLeft: 10,
          paddingRight: 10,
          fontWeight: 400,
          color: "rgb(201,201,201)"
        }}
      >
        or
      </p>
    </div>
    <div className="login-box-seperator" />
  </div>
  <div className="email-login" style={{ backgroundColor: "#ffffff" }}>
    <input
      type="email"
      className="email-imput form-control"
      style={{ marginTop: 10 }}
      required=""
      placeholder="Email"
      name="email"
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      value={user.email}
      minLength={6}
    />
    <input
      type="password"
      className="password-input form-control"
      style={{ marginTop: 10 }}
      required=""
      placeholder="Password"
      name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
      minLength={6}
    />
  </div>
  <div className="submit-row" style={{ marginBottom: 8, paddingTop: 0 }}>
    <button
      className="btn btn-primary d-block box-shadow w-100"
      id="submit-id-submit"
      type="submit"
      onClick={(e)=>handleLogin(e)}
    >
      Login
    </button>
    <div className="d-flex justify-content-between">
      <div className="form-check form-check-inline" id="form-check-rememberMe">
       
       
      </div>
      <a id="forgot-password-link" href="#">
        Forgot Password?
      </a>
    </div>
  </div>
  <div
    id="login-box-footer"
    style={{ padding: "10px 20px", paddingBottom: 23, paddingTop: 18 }}
  >
    <p style={{ marginBottom: 0 }}>
      Don't you have an account?
      <a id="register-link" href="singup">
        Sign Up!
      </a>
    </p>
  </div>
</div>
{/* <Footer/> */}
 
    </>
  )
}
