import React, { useState } from "react";
import "./RegisterPage.scss";
import logo from "./icon.png";
import google from "./google.png";
import "animate.css";

function RegisterForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="register-form-container">
      <div className="register-form animate__animated animate__fadeInDown">
        <div className="register-job-scout-header">
          <img className="register-job-scout-icon-header" src={logo} />
          <p className="register-job-scout-text-header">Job Scout</p>
        </div>
        <div className="register-text-heading">
          <span>Sign Up</span>
        </div>
        <div className="register-text">
          <span>Explore the ocean of opportunities for free</span>
        </div>
        <form className="register-detail">
          <div className="register-name-div">
            <label>Full Name</label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              type="text"
            ></input>
          </div>
          <div className="register-email-div">
            <label>Email Address</label>
            <input
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
            ></input>
          </div>
          <div className="register-pass-div">
            <label>Password</label>
            <input
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
            ></input>
          </div>
          <div className="register-btn-div">
            <button type="submit" className="register-btn">
              Create Account
            </button>
          </div>
        </form>

        <div className="separator"></div>
        <div className="register-google">
          <button className="register-google-btn btn btn-light">
            <img className="register-google-icon" src={google}></img>
            Sign up with Google
          </button>
        </div>
        <a href="#" className="register-form-signin">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default RegisterForm;
