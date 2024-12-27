import React from "react";
import style from "../assets/logo4.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-dark p-4 text-light">
    <div className="container mt-4">
      <h4 className="">SERVICE BEYOND <br /> EXPECTATION</h4>
      <hr className="mb-5" />
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <img className="img-fluid rounded" src={style} alt="about-image" />
        </div>
        <div className="col-12 col-md-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta
            mollitia numquam, nihil fugit veniam facere laudantium totam minus
            exercitationem quidem accusantium, doloribus assumenda non earum
            quis porro voluptas sit sint possimus obcaecati ducimus.
            Voluptatibus nesciunt totam aut at quasi, rem eaque adipisci dolore
            exercitationem, facere necessitatibus repudiandae odio odit.
          </p>
          <Link  to="/about" className="btn btn-outline-light mt-2 shadow p-2">READ MORE ABOUT US <i class="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
