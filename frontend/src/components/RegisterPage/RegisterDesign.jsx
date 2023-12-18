import React from "react";
import "./RegisterPage.scss";
import logo from "./icon.png";
import "animate.css";

function RegisterDesign() {
  return (
    <div className="register-design-container">
      <div className="register-job-scout animate__animated animate__fadeInDown">
        <img className="register-job-scout-icon" src={logo} />
        <p className="register-job-scout-text">Job Scout</p>
      </div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide animate__animated animate__fadeInDown"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <span className="carousel-slide-heading">Welcome to Job Scout</span>
            <p className="carousel-slide-text">
              Step into a world of career possibilities at Job Scout . Your
              journey to finding the perfect job begins here. Join us today and
              let's explore your professional future together.
            </p>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <span className="carousel-slide-heading">
              Personalized Job Alerts
            </span>
            <p className="carousel-slide-text">
              Personalized job alerts just for you! Sign up and stay in the loop
              with real-time job openings that match your preferences.
            </p>
          </div>
          <div className="carousel-item">
            <span className="carousel-slide-heading">
              Simplified Job Search
            </span>
            <p className="carousel-slide-text">
              Effortless job searching awaits! Use our smart filters to find
              your dream job quickly and easily. Join us and experience a new
              way to job hunt!
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="register-already-registered-div animate__animated animate__fadeIn">
        <span className="register-already-registered">
          Already Registered? <a href="#">Sign in</a>
        </span>
      </div>
    </div>
  );
}
export default RegisterDesign;
