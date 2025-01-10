import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="hero container-fluid">
      <div className="container " data-aos="zoom-in">
        <h1 className="text-light style">Glamour Luxury Unisex Salon</h1>
        <div className="text-light">
         <marquee  behavior="" direction="left" className="maq">Where Timeless Elegance Meets Personalized Beauty....</marquee>
        <p className="hero-text"> Where Timeless Elegance Meets Personalized Beauty....</p>
        </div>
        <div className="mt-3">
        <a href="tel:07049466103" className="hero-btn btn btn-light"  >Contact Us</a>
        <Link to="/appointment" className="hero-btn btn btn-outline-light">
          Appointment
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
