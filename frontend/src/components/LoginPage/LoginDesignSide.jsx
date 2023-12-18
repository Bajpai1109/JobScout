import React from "react";
import arrow from "./right-arrow.png";

function LoginDesignSide() {
  return (
    <div className="design-container ">
      <div className="design-side-holder animate__animated animate__fadeInDown">
        <div className="design-side-heading">
          <span>Welcome to Job Scout!</span>
        </div>
        <div className="design-side-description">
          <p>
            Unlock the doors to a boundless realm of career opportunities and
            personal growth. Embrace your future on our comprehensive job search
            platform.
          </p>
        </div>
        <div className="design-side-homepage-link">
          <a href="#">Search new Jobs</a>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
}

export default LoginDesignSide;
