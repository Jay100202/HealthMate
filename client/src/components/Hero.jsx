import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        Your Wellness, <br />
        Our Purpose
        </h1>
        <p>
        Welcome to our platform where your wellness is not just a goal, but our purpose. We're here to accompany you on your health journey, offering personalized care and support every step of the way.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
