
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

    const notify = () => toast('Coming Soon!!');
  return (
    <div className="hero container-fluid">
      <div className="container " data-aos="zoom-in">
        
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
