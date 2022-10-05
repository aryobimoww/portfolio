import React from "react";
import Logo from "./logo.png";
import "./Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => (
  <div className="absolute w-100 nav-container">
    <div className="navbar flex-row w-100 border-box mt3 ph5-l noto-font">
      <div className="options">
        <div className="img-container">
          <img src={Logo} className="w2" alt="Site Name" />
        </div>
        {/* <div className="db dtc-l v-mid w-100 w-20-l tc tr-l"> */}
        <div className="option">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a className="link dim f6 f5-l dib mr4 mr4-l" href="#about">
              About
            </a>
          </Link>
          <Link
            activeClass="active"
            to="portf"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a className="link dim f6 f5-l dib mr3 mr4-l" href="#portf">
              Project
            </a>
          </Link>
          {/* <a className="link dim white f6 f5-l dib pr4" href="//some/valid/uri">Contact</a> */}
        </div>
      </div>

      {/* </div> */}
    </div>
  </div>
);
export default Nav;
