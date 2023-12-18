import React, { useState } from "react";
import google from "./google.png";

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div className="login-google animate__animated animate__fadeInDown">
        <button className="login-google-btn btn btn-light ">
          <img className="login-google-icon" src={google} />
          Google
        </button>
      </div>
      <div className="separator animate__animated animate__fadeIn"></div>
      <form className="login-detail animate__animated animate__fadeInDown">
        <div className="login-email-div">
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="form-control"
            type="email"
          ></input>
        </div>
        <div className="login-pass-div">
          <label>Password</label>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            type="password"
          ></input>
        </div>
        <div className="login-forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button
          type="Submit"
          className="login-btn animate__animated animate__fadeInDown"
        >
          Login
        </button>
      </form>
    </>
  );
}
export default LoginForm;
