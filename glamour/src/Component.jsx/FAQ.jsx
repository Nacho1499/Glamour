import React from "react";

const FAQ = () => {
  return (
    <div className="container-fluid bg-dark p-3">
      <div className="accordion container mb-4 mt-4 " id="accordionExample">
        <h4 className="mb-4 text-light mt-4">Frequently Asked Questions</h4>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What makes your salon different from others?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our salon combines luxury with convenience, offering top-notch
              services in a relaxing, elegant environment. We use only premium,
              high-quality products for all treatments. Our skilled and
              experienced team is dedicated to providing a personalized,
              professional experience for each client.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Is your salon suitable for both men and women?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes! We are a unisex salon, offering services tailored to both men
              and women. Whether you're looking for a haircut, skin treatment,
              or a complete makeover, we provide services for all genders.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Is your salon suitable for both men and women?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes! We are a unisex salon, offering services tailored to both men
              and women. Whether you're looking for a haircut, skin treatment,
              or a complete makeover, we provide services for all genders.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What makes your salon different from others?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our salon combines luxury with convenience, offering top-notch
              services in a relaxing, elegant environment. We use only premium,
              high-quality products for all treatments. Our skilled and
              experienced team is dedicated to providing a personalized,
              professional experience for each client
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What are your operating hours?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our salon is open from [insert working hours here], including
              weekends. Please check our website for any holiday closures or
              special operating hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
