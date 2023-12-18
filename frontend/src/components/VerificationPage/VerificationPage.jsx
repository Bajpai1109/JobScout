import React from "react";
import "./VerificationPage.scss";
import logo from "./icon.png";
function VerificationPage() {
  return (
    <div className="verify-outermost-container">
      <div className="verify-job-scout ">
        <img className="verify-job-scout-icon" src={logo} />
        <p className="verify-job-scout-text">Job Scout</p>
      </div>
      <div className="verification-main-container">
        <div className="verification-inner-container row">
          <div className="col-xl-6">dsfjvjs</div>
          <div className="col-xl-6">fadsgdg</div>
        </div>
      </div>
      <div className="verification-copyrights-div">Copyrights Reserved</div>
    </div>
  );
}

export default VerificationPage;
