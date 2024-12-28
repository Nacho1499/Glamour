import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";

const Appointment = () => {
  return (
    <>
      <Navbar />
      <Scroll/>
      <div className="appointment container-fluid text-light text-center">
        <div>
          <h3 className="text-center">APPOINTMENT</h3>
           <Link to="/" className="text-decoration-none text-light" >_____Home : Appointment  ____</Link>
        </div>
      </div>
      <div className="container-fluiid p-3 bg-dark">
        <div className="container mt-5 mb-5 text-light">
          <h3>Make An Appointment</h3>
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

            <button type="submit" className="btn btn-warning">
              Make An Appointment
            </button>
          </form>
        </div>
      </div>
      <div className="time container-fluid bg-dark">
        <div className="container text-center mt-4 text-light">
          <h3 className="text-center">Working Hours</h3>
          <hr className="text-light" />
          <h6>Call Us : +234-8107088346</h6>
          <div className="row g-3 mt-4 ">
            <div className=" date col-4 col-lg-2">
              <h5>MON</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2">
              <h5>TUES</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2">
              <h5>WED</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2">
              <h5>THUR</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2">
              <h5>FRI</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <div className=" date col-4 col-lg-2">
              <h5>SAT</h5>
              <p>8.00AM - 9.00PM </p>
            </div>
            <h5 className="text-center mt-4">SUNDAY : CLOSED</h5>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Appointment;
