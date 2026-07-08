import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-overlay">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-tagline">
          Where Green Meets Serenity — bring the calm of nature into every
          corner of your home.
        </p>
        <button className="get-started-btn" onClick={() => navigate("/products")}>
          Get Started
        </button>
      </div>
      <AboutUs />
    </div>
  );
};

export default Landing;
