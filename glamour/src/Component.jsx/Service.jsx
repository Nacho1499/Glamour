import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
    
  return (
    <div className="p-3 bg-dark text-light">
    <div className="container mt-4">
        <h4>OUR EXCLUSIVE SERVICES</h4>
        <hr className="mb-5" />
      <div className="row g-3">
        <div className="col-12 col-lg-4 service1 text-center text-light mx-auto shadow ">
            <h5>Hair Braiding </h5>
        </div>
        <div className="col-12 col-lg-4 service2 text-center text-light mx-auto ">
            <h5>Barbing</h5>
        </div>
        <div className="col-12 col-lg-4 service3 text-center text-light mx-auto">
            <h5>Pedicure and medicure</h5>
        </div>
      
        <Link to="/allservices" className="text-decoration-none text-light"  >view all services <i class="fa-solid fa-arrow-right"></i></Link>
        
      </div>
    </div>
    </div>
  );
};

export default Service;
