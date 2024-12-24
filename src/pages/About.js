import React from "react";
import "../style/About.css";
import Photo from "../assest/about.jpg";

function About() {
  return (
    <div className="aboutus">
      <div className="partners-section">
        <h3>970K+ More</h3>
        <p>Trusted Companies Partner</p>
        <div className="Names">
          <p1>
            VideoAsk
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </p1>
          <p2>
            Hubspot &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p2>
          <p3>Mapbox</p3>
        </div>
      </div>

      <div className="content-section">
        <div className="image-wrapper">
          <img src={Photo} alt="Trainer" className="trainer-image" />
        </div>

        <div className="text-content">
          <h1>Get Ready To Reach Your Fitness Goals</h1>
          <p>
            We are a gym that is committed to helping people reach their fitness
            goals. We offer a variety of programs and services to fit your
            needs, whether you are an experienced athlete.
          </p>
          <p>
            We believe that everyone should have access to the benefits of
            exercise to make it happen.
          </p>
          <button className="cta-button">Free Trial Today</button>
        </div>
      </div>
    </div>
  );
}

export default About;
