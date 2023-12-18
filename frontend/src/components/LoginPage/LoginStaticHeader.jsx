import React from "react";
import logo from "./icon.jpg";

function LoginStaticHeader() {
  return (
    <>
      <div className="login-jobscout animate__animated animate__fadeInDown ">
        <div className="login-icon animate__animated animate__fadeInDown">
          <img className="login-logo" src={logo}></img>
        </div>
        <div className="login-website-name animate__animated animate__fadeInDown">
          Job Scout
        </div>
      </div>
      <div className="login-login-text animate__animated animate__fadeInDown  ">
        <span>Log in to your account</span>
      </div>
      <div className="login-noaccount-text animate__animated animate__fadeIn">
        <span>
          Don't have an account? <a href="#">Sign Up</a>
        </span>
      </div>
    </>
  );
}
export default LoginStaticHeader;
