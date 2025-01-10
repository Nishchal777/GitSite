import React from "react";
import { Link } from "react-router-dom";
import Photo from "../assest/homephoto4.png";
import "../style/Home.css";
import "@fontsource/playfair-display";

function Home() {
  return (
    <div className="home">
      <div className="contentContainer">
        <div className="headerContainer">
          <h1>Get healthy body with perfect Exercise</h1>
          <p>
            We are always here to help you to get your dream body with perfect
            exercise
          </p>
          <Link to="/membership">
            <button>Get Started</button>
          </Link>
        </div>

        <div className="imageContainer">
          <img src={Photo} alt="Exercise" />
        </div>
      </div>
    </div>
  );
}

export default Home;
