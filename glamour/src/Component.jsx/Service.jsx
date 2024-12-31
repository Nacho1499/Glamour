import React, { useEffect } from "react";
import barb1 from "../assets/barb.jpg";
import barb2 from "../assets/hero2.jpg";
import barb3 from "../assets/facial.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="p-3 bg-dark text-light">
      <div className="container mt-4">
        <h4 className='style'>OUR EXCLUSIVE SERVICES</h4>
        <hr className="mb-5" />
        <div className="row">
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <img className="img-fluid rounded" src={barb1} alt="" />
            <p className="mt-3">
              <h5>Hair Cut</h5>
              <hr />A visit to a Glamour Luxury Salon promises not just a
              haircut, but an indulgent, high-end experience that leaves you
              feeling pampered and looking your best
            </p>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <img className="img-fluid rounded" src={barb2} alt="" />
            <p className="mt-3">
              <h5>Hair Braiding</h5>
              <hr />
              At a Glamour Luxury Salon, hair braiding is elevated to an art
              form, providing clients with elegant, stylish, and unique braided
              looks.
            </p>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in">
            <img className="img-fluid rounded" src={barb3} alt="" />
            <p className="mt-3">
              <h5>Facials</h5>
              <hr />A facial at a glamour luxury salon is a luxurious treat for
              your skin, combining high-end products, expert techniques, and a
              relaxing atmosphere to leave you feeling refreshed and glowing.
            </p>
          </div>
        </div>
        <Link to="/allservices" className="  btn btn-outline-light mt-3">
          View more Services <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Service;
