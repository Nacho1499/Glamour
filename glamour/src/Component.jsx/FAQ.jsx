import React from "react";

const FAQ = () => {
  return (
    <>
    <div className="container-fluid p-3 bg-dark text-light">

    
      <div
        className="accordion container mt-5 mb-5"
        id="accordionExample"
      >
        <h4 className="mb-5">Frequently Asked Questions</h4>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What is G-NOB Vocational Global Concept Limited?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                G-NOB Vocational Global Concept Limited is a leading provider of
                vocational training and development programs designed to equip
                individuals and organizations with essential skills for success
                in global markets. The company focuses on offering innovative,
                high-quality educational programs that address industry needs
                while promoting inclusivity and sustainability.
              </p>
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
              What kind of vocational training does G-NOB offer?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                G-NOB offers a wide range of vocational training programs
                tailored to various industries such as technology, business
                management, healthcare, and engineering. Their courses are
                designed to improve practical skills, enhance employability, and
                prepare individuals for diverse global job markets.
              </p>
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
              What makes G-NOB’s training programs unique?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                G-NOB stands out for its global approach to vocational training.
                They integrate technology, sustainability, and international
                best practices into their programs. The company also places a
                strong emphasis on local relevance, ensuring that trainees are
                equipped with the skills needed for specific regional markets
                while maintaining a global perspective.
              </p>
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
              Can G-NOB provide customized training for organizations?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Absolutely. G-NOB offers customized vocational training
                solutions tailored to the specific needs of organizations.
                Whether it's a large corporation or a small business, G-NOB
                works closely with clients to develop training programs that
                address specific skills gaps and enhance overall workforce
                capabilities.
              </p>
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
              Who can benefit from G-NOB’s vocational programs?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                G-NOB’s vocational programs are beneficial for individuals
                seeking to enhance their skills, companies aiming to upskill
                their workforce, and organizations looking for customized
                training solutions. The programs cater to professionals, recent
                graduates, and individuals aiming to transition into new career
                paths.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default FAQ;
