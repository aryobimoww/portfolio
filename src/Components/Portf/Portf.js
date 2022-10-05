import React from "react";
import Card from "./Card";
import "./Portf.css";
import project1 from "./project1.png";
import project2 from "./project2.png";
const Portf = () => {
  const portofolio = [
    {
      title: "Facerecognition",
      link1: "https://my-face-recognitionv1.herokuapp.com/",
      imageUrl: project1,
    },
    {
      title: "E-commerce",
      link: "https://polite-travesseiro-0b0b1e.netlify.app/",
      imageUrl: project2,
    },
  ];
  return (
    <div>
      <div id="portf" className="portf pt3 relative ">
        <div>
          <h1 className="tc pt3 noto-font" data-aos="fade-up">
            Project
          </h1>
        </div>
        {portofolio.map((p) => (
          <Card title={p.title} link={p.link} imageUrl={p.imageUrl} />
        ))}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E94560"
            fill-opacity="1"
            d="M0,64L48,101.3C96,139,192,213,288,208C384,203,480,117,576,117.3C672,117,768,203,864,224C960,245,1056,203,1152,160C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Portf;
