import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/emma.jpg";
import { useState } from "react";

const Navbar = () => {
  const [upDate, setupDate] = useState('');
  function upDates() {
    setupDate( alert("No up dates available now"));
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container">
          <Link to="/about" className="navbar-brand style">
            <img className="logo" src={logo} alt="" /> Glamour
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/appointment" className="nav-link">
                  Appointment
                </Link>
              </li>
            </ul>
            <button onClick={upDates} className="btn btn-outline-light">Updates</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
