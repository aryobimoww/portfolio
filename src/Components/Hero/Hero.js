import React from "react";
import Cv from "../..//asset/CV-Juli.pdf";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero relative ">
        <div className="flex flex-wrap-reverse item-center" id="hero">
          <div className="  " data-aos="fade-up">
            <h1 className="tl  hero-font ">
              Hello My name Aryobimo <br />
              I`am fullstack developer
            </h1>
            <div className="download-container">
              <a href={Cv} download>
                <button className="download-button">Download CV</button>
              </a>
            </div>
          </div>
          <div className=" w-50 w-25-ns pa2 ml7" data-aos="fade-left">
            <div className="image-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
