import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";

const Appointment = () => {
   useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <>
      <Navbar />
      <Scroll/>
      <div className="appointment container-fluid text-light text-center">
        <div  data-aos="zoom-in">
          <h3 className="text-center style">APPOINTMENT</h3>
           <Link to="/" className="text-decoration-none text-light" >_____Home : Appointment  ____</Link>
        </div>
      </div>
      <div className="container-fluiid p-3 bg-dark">
        <div className="container mt-5 mb-5 text-light">
          <h3 className='style'>Make An Appointment</h3>
          <hr />
          <form
            action=""
            method=""
            className="bg-dark p-4 rounded mt-5 mb-4 text-light w-100  mx-auto shadow"
          >
            <div className="mb-3 mt-3 outline-warning">
              <label for="email" className="form-label">
                Fullname:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter fullname"
                name="fullname"
              />
            </div>
            <div className="mb-3">
              <label for="pwd" className="form-label">
                Phone number/Email:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email/phone"
                name="phone number"
              />
            </div>
            <div className="mb-3">
              <label for="pwd" className="form-label">
                Appointment Date:
              </label>
              <input
                type="text"
                className="form-control"
                id="pwd"
                placeholder="Appointment Date"
                name="pswd"
              />
              <textarea
                name="message"
                id=""
                placeholder="message here"
                className="form-control mt-3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-outline-light">
              Make An Appointment
            </button>
          </form>
        </div>
      </div>
      <div className="time container-fluid bg-dark">
        <div className="container text-center mt-4 text-light">
          <h3 className="text-center style">Working Hours</h3>
          <hr className="text-light" />
          <h6>Call Us : +234-7056863572</h6>
          <div className="row g-3 mt-4 ">
            <div className=" date col-4 col-lg-2"  data-aos="zoom-in">
              <h5>MON</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2"  data-aos="zoom-in">
              <h5>TUES</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2"  data-aos="zoom-in">
              <h5>WED</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2"  data-aos="zoom-in">
              <h5>THUR</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2"  data-aos="zoom-in">
              <h5>FRI</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2"  data-aos="zoom-in">
              <h5>SAT</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <h5 className="text-center mt-4">SUNDAY : 12.00pm - 8.00pm</h5>
          </div>
        </div>
        
      </div>
      <section class="map text-center  bg-dark">
          <iframe
            className="w-100 shadow mt-4"
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.8572360108408!2d7.230085967149778!3d8.8777467205911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e65b378f5cce9%3A0xff5f9f28ee0e3a8c!2sSauka%20extension%2C%20Kuje!5e0!3m2!1sen!2sng!4v1735404049461!5m2!1sen!2sng"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

      

      <Footer />
    </>
  );
};

export default Appointment;
