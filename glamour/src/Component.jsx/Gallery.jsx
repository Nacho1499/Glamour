import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Scroll from "./Scroll";
import { Link } from "react-router-dom";
import gal1 from "../assets/1.jpg";
import gal2 from "../assets/2.jpg";
import gal3 from "../assets/3.jpg";
import gal4 from "../assets/4.jpg";
import gal5 from "../assets/5.jpg";
import gal6 from "../assets/6.jpg";
import gal7 from "../assets/7.jpg";
import gal8 from "../assets/8.jpg";
import gal9 from "../assets/9.jpg";

const Gallery = () => {
   useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
    <Navbar/>
    <Scroll/>
      <div className="gallery container-fluid text-light">
        <div data-aos="zoom-in">
          <h3 className="text-center style">GALLERY</h3>
          <Link to="/" className="text-decoration-none text-light" >_____Home : Gallery____</Link>
        </div>
      </div>

      <div className="bg-dark p-3">
      <div className="container mt-4 mb-4">
        <h5 className='text-light style'>Take a Tour Into Our Exclusive Gallery</h5>
        <hr/>
        <div className="row g-3">
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal1} alt="" />
            </a>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal2} alt="" />
            </a>
          </div>

          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal3} alt="" />
            </a>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal4} alt="" />
            </a>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal5} alt="" />
            </a>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal6} alt="" />
            </a>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal7} alt="" />
            </a>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal8} alt="" />
            </a>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <a href={gal1}>
              <img className="img-fluid gal-img" src={gal9} alt="" />
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className="gal-book container-fluid">
        <div className="text-center" data-aos="zoom-in">
        <h3 className="text-light style">WE ARE HERE FOR YOU </h3>
        <Link to="/appointment" className="btn btn-outline-light p-2 mt-3 text-decoration-none">BOOK AN APPOINTMENT</Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Gallery;
