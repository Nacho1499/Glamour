import React from "react";
import product from "../assets/product.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="p-3 bg-dark container-fluid text-light">
        <div className="container mt-5">
          <h3>
            GLAMOUR HAIR <br /> PRODUCTS
          </h3>
          <hr className="mb-3" />
          <div className="row g-3 mb-5">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                src={product}
                alt="product-image"
              />
            </div>
            <div className="col-12 col-lg-6">
              <p>
                At Glamour Luxury Unisex Salon, we believe that beautiful hair
                begins with the best products. That’s why we offer a curated
                selection of premium hair care brands, designed to nourish,
                protect, and enhance every strand. From luxurious shampoos and
                conditioners to styling products that define and hold, our salon
                uses only the finest, salon-grade formulations.
              </p>
              <button className="btn btn-outline-light p-2 mt-2">
                Make More Enquiry <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="gal-book container-fluid bg-dark">
        <div className="container text-center mt-4">
          <h3 className="text-light">WE ARE HERE FOR YOU </h3>
          <hr className="text-light" />
          <Link
            to="/appointment"
            className="btn btn-outline-light p-2 text-decoration-none"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
