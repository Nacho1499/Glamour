import React from "react";
import { ToastContainer, toast } from 'react-toastify';

const Hero = () => {

    const notify = () => toast('Coming Soon!!');
  return (
    <div className="hero container-fluid">
      <div className="container">
        
        <h1 className="text-light">Glamour Luxury Unisex Salon</h1>
        <p className="text-light">Where Timeless Elegance Meets Personalized Beauty....</p>
        <button className="hero-btn btn btn-light"  >CONTACT US</button>
        <button className="hero-btn btn btn-outline-light"onClick={notify}>HAIR PRODUCTS</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Hero;
