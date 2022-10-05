import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./ToTop.css";

const ToTop = () => {
  return (
    <div className="top br-100 tc shadow-2  no-underline ">
      <span classname=" link dim no-underline" href="#hero">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className="no-underline tc pointer arrow"
        >
          &#8963;
        </Link>
      </span>
    </div>
  );
};
export default ToTop;
