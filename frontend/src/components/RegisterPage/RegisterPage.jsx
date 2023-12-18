import React from "react";
import "./RegisterPage.scss";
import RegisterDesign from "./RegisterDesign";
import RegisterForm from "./RegisterForm";
function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-main-container">
        <RegisterDesign />
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
