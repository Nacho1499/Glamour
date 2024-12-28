import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emma from "../assets/emma.jpg";
import staff from "../assets/staff2.jpg";
import Scroll from "./Scroll";

const Aboutus = () => {
   useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <>
      <Navbar />
      <Scroll />
      <div className="aboutus container-fluid text-light">
        <div>
          <h1 className="text-center">ABOUT</h1>
          <Link to="/" className="text-decoration-none text-light">
            _____Home : About____
          </Link>
        </div>
      </div>
      <div className="container-fluid p-3 bg-dark text-light">
        <div className="container mt-4 mb-5">
          <h4 className="text-center">
            Welcome To Glamour Luxury Unisex Salon
          </h4>
          <hr />
          <div className="row g-3 mt-4">
            <div className="col-12 col-lg-6"  data-aos="zoom-in">
            <img className="img-fluid about-us rounded" src={emma} alt="" />
            </div>
            <div className="col-12 col-lg-6"  data-aos="zoom-in">
            <p className="mt-3">
              Glamour Luxury Unisex Salon redefines the beauty experience with a
              perfect blend of opulence, creativity, and personalized service.
              This premium salon caters to both men and women, offering a full
              spectrum of high-end beauty treatments in a luxurious setting.
              From precision haircuts and vibrant color transformations to
              rejuvenating facials and indulgent spa treatments, Glamour Luxury
              Unisex Salon offers a wide array of services designed to enhance
              every individual’s unique beauty. The expert stylists and beauty
              professionals use top-of-the-line products and cutting-edge
              techniques to ensure exceptional results.
            </p>
            </div>
          </div>

          <div className="mt-5">
            <h4>MEET OUR STAFF</h4>
            <hr />
            <div className="row g-3 mt-3 text-center">
              <div className="col-12 col-lg-4  "  data-aos="zoom-in">
                <img className=" staff img-fluid" src={staff} alt="" />
                <h6>Manager : mercy john</h6>
              </div>
              <div className="col-12 col-lg-4"  data-aos="zoom-in">
                <img className="staff img-fluid " src={staff} alt="" />
                <h6>Barber : emmanuel iheanacho</h6>
              </div>
              <div className="col-12 col-lg-4"  data-aos="zoom-in">
                <img className="staff img-fluid " src={staff} alt="" />
                <h6> Stylist : Gift peter</h6>
              </div>
            </div>
          </div>
        </div>
        <section class="map text-center mb-5">
          <iframe
            className="w-100 shadow mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.302984141201!2d7.486438989845312!3d9.127082590938237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104de1e42cfd50bb%3A0x7a062fb69f931c1e!2sMpape%20police%20station!5e0!3m2!1sen!2sng!4v1723849240800!5m2!1sen!2sng"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
