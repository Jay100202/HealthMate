import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Welcome to HealthMate, where 'Your Wellness, Our Purpose' drives everything we do. Our team is dedicated to ensuring your health and well-being, providing expert care tailored to your needs. With a commitment to quality, compassion, and convenience, we strive to be your trusted partner in achieving a healthier life. At HealthMate, our purpose is to empower you with the tools and resources you need for a journey towards optimal wellness. Join us as we work together to make your well-being a priority and a success story we create together
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
