import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import blog1 from "../assets/product.jpg";
import blog4 from "../assets/products.jpg";
import blog3 from "../assets/style.jpg";

const Blog = () => {
   useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
      <div className="container-fluid p-3 bg-dark p-3 text-light">
        <div className="container mt-5 text-light">
          <h4>Our Recent Blog Posts</h4>
          <hr />

          <div className="row g-3 mt-4">
            <div
              className="col-12 col-lg-4"
              data-aos="zoom-in"
              
            >
              <a
                className="text-decoration-none text-dark"
                href="https://www.byrdie.com/best-hair-products-2024-8646704"
              >
                <img className="img-fluid rounded" src={blog1} alt="" />
                <h5 className="mt-3 text-light">These Are the Best Hair Products of 2024</h5>
              </a>
            </div>
            <div
              className="col-12 col-lg-4"
              data-aos="zoom-in"
              
            >
              <a
                className="text-decoration-none text-dark"
                href="https://www.naturalhair-products.com/best-hair-products-for-black-men.html"
              >
                <img className="img-fluid rounded" src={blog4} alt="" />
                <h5 className="mt-3 text-light">
                Best Hair Products For Black men
                </h5>
              </a>
            </div>
            <div
              className="col-12 col-lg-4"
              data-aos="zoom-in"
              
            >
              <a
                className="text-decoration-none text-dark"
                href="https://www.menshairstylestoday.com/hairstyles-for-black-men/"
              >
                <img className="img-fluid rounded" src={blog3} alt="" />
                <h5 className="mt-3 text-light">50 Fresh Haircuts For Black Men</h5>
              </a>
            </div>
           
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Blog;
