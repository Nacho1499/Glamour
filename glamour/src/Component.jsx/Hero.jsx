import React, { useEffect } from "react";
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
         <marquee behavior="" direction="left">Where Timeless Elegance Meets Personalized Beauty....</marquee>
        <p className="hero-text"> Where Timeless Elegance Meets Personalized Beauty....</p>
        </div>
        <a href="tel:08107088346" className="hero-btn btn btn-light"  >CONTACT US</a>
        <button className="hero-btn btn btn-outline-light">
          HAIR PRODUCTS
        </button>
        <br />
      </div>
    </div>
  );
};

export default Hero;
