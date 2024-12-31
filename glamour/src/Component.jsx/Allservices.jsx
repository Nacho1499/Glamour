import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Scroll from "./Scroll";
import { Link } from "react-router-dom";
import barb1 from "../assets/pedi.jpg";
import barb2 from "../assets/hair.jpg";
import barb3 from "../assets/eye.jpg";
import barb4 from "../assets/massage.jpg";

const Allservices = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <Scroll />
      <div className="service container-fluid text-light">
        <div data-aos="zoom-in">
          <h3 className="text-center style">OUR SERVICES</h3>
          <Link to="/" className="text-decoration-none text-light">
            _____Home : Services____
          </Link>
        </div>
      </div>
      <div className="container-fluid bg-dark p-3">
        <div className="container mb-4 text-light">
          <div className="row g-3 mt-4">
            <div className="col-12 col-lg-4" data-aos="zoom-in">
              <img className="img-fluid rounded" src={barb1} alt="" />
              <p className="mt-3">
                <h5>Medicure And Pedicure</h5>
                <hr />
                visit Glamour Luxury Salon for a manicure and pedicure is the
                perfect way to treat your hands and feet to a luxurious
                experience.
              </p>
            </div>
            <div className="col-12 col-lg-4" data-aos="zoom-in">
              <img className="img-fluid rounded" src={barb2} alt="" />
              <p className="mt-3">
                <h5>Women Hair</h5>
                <hr />
                Glamour Luxury Salon is the ultimate way to treat your hair to
                high-end care and styling. These salons specialize in providing
                women with top-quality hair services that leave you looking and
                feeling amazing.
              </p>
            </div>
            <div className="col-12 col-lg-4" data-aos="zoom-in">
              <img className="img-fluid rounded" src={barb3} alt="" />
              <p className="mt-3">
                <h5>EyeLash Fixing</h5>
                <hr />
                Glamour Luxury Salon, eyelash services are designed to enhance
                your natural beauty and give your eyes a captivating, dramatic
                look. Whether you're looking for longer, fuller lashes or a
                more.
              </p>
            </div>
            <div className="col-12 col-lg-4" data-aos="zoom-in">
              <img className="img-fluid rounded" src={barb4} alt="" />
              <p className="mt-3">
                <h5>Body Massage</h5>
                <hr />
                Glamour Luxury Salon is more than just about beauty treatments;
                it's a chance to relax and unwind with luxurious services like
                massage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Allservices;
