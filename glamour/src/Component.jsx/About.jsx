import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from "../assets/17.jpg";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <div className="bg-dark p-4 text-light">
      <div className="container mt-4">
        <h4 className="">
          SERVICE BEYOND <br /> EXPECTATION
        </h4>
        <hr className="mb-5" />
        <div className="row g-4">
          <div className="col-12 col-md-6" data-aos="zoom-in">
            <img
              className="img-fluid rounded about-image"
              src={style}
              alt="about-image"
            />
          </div>
          <div className="col-12 col-md-6" data-aos="zoom-in">
            <p>
              Glamour Luxury Unisex Salon redefines the beauty experience with a
              perfect blend of opulence, creativity, and personalized service.
              This premium salon caters to both men and women, offering a full
              spectrum of high-end beauty treatments in a luxurious setting.
              From precision haircuts and vibrant color transformations to
              rejuvenating facials and indulgent spa treatments, Glamour Luxury
              Unisex Salon offers a wide array of services designed to enhance
              every individual’s unique beauty. 
            </p>
            <Link to="/about" className="btn btn-outline-light mt-2 shadow p-2">
              READ MORE ABOUT US <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
