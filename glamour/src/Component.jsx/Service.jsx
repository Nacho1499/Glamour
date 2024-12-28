import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

const Service = () => {
     useEffect(() => {
            AOS.init({ duration: 2000 });
          }, []);
  return (
    <div className="p-3 bg-dark text-light">
    <div className="container mt-4">
        <h4>OUR EXCLUSIVE SERVICES</h4>
        <hr className="mb-5" />
      <div className="row g-3">
        <div className="col-12 col-lg-4 service1 text-center text-light mx-auto shadow " data-aos="zoom-in">
            <h5>Hair Braiding </h5>
        </div>
        <div className="col-12 col-lg-4 service2 text-center text-light mx-auto " data-aos="zoom-in">
            <h5>Barbing</h5>
        </div>
        <div className="col-12 col-lg-4 service3 text-center text-light mx-auto" data-aos="zoom-in">
            <h5>Pedicure and medicure</h5>
        </div>
      
        <Link to="/allservices" className="text-decoration-none text-light"  >view all services <i class="fa-solid fa-arrow-right"></i></Link>
        
      </div>
    </div>
    </div>
  );
};

export default Service;
