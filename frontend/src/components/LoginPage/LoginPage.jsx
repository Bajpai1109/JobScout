import React from "react";
import "./LoginPage.scss";
import LoginDesignSide from "./LoginDesignSide";
import LoginForm from "./LoginForm";
import LoginStaticHeader from "./LoginStaticHeader";
import "animate.css";
function LoginPage() {
  return (
    <div className="login-page-container  ">
      <div className="login-container">
        <div className="login-form">
          <LoginStaticHeader />
          <LoginForm />
        </div>
      </div>
      <LoginDesignSide />
    </div>
  );
}
export default LoginPage;
