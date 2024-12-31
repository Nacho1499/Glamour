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
              <h4 className="text-light style">GLAMOUR LUXURY UNISEX SALON</h4>
              <p>
              
                Address/Location: Suaka Road Pajimo Street, <br /> Kuje FCT
                Abuja.
              </p>
              Tel: +234-7056863572, +234-7049466103
            </div>

            <div className="col-12 col-lg-6 ">
              <a href="https://wa.link/1osan5">
                <i className="footer text-light fa-brands fa-square-whatsapp fa-2x"></i>
              </a>

              <a href="https://www.instagram.com/reel/DB2zu_ToPEX/?igsh=NXFsaXhub2VkdGE1">
                <i className=" footer text-light fa-brands fa-square-instagram fa-2x"></i>
              </a>
            </div>

            <hr />
          </div>
          <p className="text-light text-center mt-4">
            ©<span>{dateRunning}</span>. GLAMOUR LUXURY UNISEX SALON, All Right
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
