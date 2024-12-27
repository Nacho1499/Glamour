import React from "react";

const Footer = () => {
  const date = new Date();
  const dateRunning = date.getFullYear();
  return (
    <>
      <div className="container-fluid bg-black p-3 text-light">
        <div className="container mt-5">
        <div className="row  g-4">
          <div className="col-12 col-lg-6 text-light">
          <h4 className="text-light">
            GLAMOUR LUXURY UNISEX SALON
            </h4>

           <p> Address/Location: Block 13,Shop 22 Kuje Market, <br /> Kuje FCT
            Abuja.
            </p>
            Tel: +234-7035822212
          </div>

          <div className="col-12 col-lg-6 ">
            <a href="">
              <i className="footer text-warning fa-brands fa-square-whatsapp fa-2x"></i>
            </a>
            <a href="">
            <a href=""><i className=" footer text-warning fa-brands fa-telegram fa-2x"></i></a>
            </a>
            <a href="">
              <i className="footer text-warning fa-brands fa-square-x-twitter fa-2x"></i>
            </a>
            <a href="">
              <i className=" footer text-warning fa-brands fa-square-instagram fa-2x"></i>
            </a>
          </div>

          <hr />
        </div>
        <p className="text-light text-center mt-4">
          ©<span>{dateRunning}</span>.
          GLAMOUR LUXURY UNISEX SALON, All Right Reserved.
        </p>
        </div>
        </div>
      
    </>
  );
};
export default Footer;
