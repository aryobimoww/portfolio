import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwA8cWZ-U0csgqWlDGhDwM3PyPvFOLjox8qSip3KnFjNoR-QcwYjnNYWhqAzDPuXdBu9w/exec";
  const form = document.forms["submit-to-google-sheet"];
  const [isActive, setActive] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: "post",
      body: new FormData(form),
    })
      .then((response) => {
        setActive(!isActive);
        console.log("succsess", response);
      })
      .catch(console.log);
  };
  return (
    <div>
      <div className="footer relative" data-aos="fade-right">
        <div
          className={isActive ? "" : " bg-light-blue w-100 white dn "}
          id="scroll-container"
        >
          <div id="scroll-text" className="white">
            Thankyou for Subscribe
          </div>{" "}
        </div>
        <div className="pa4-l">
          <form
            className=" mw7 center pa4 br2-ns  b--black-10"
            name="submit-to-google-sheet"
          >
            <fieldset className="cf bn ma0 pa0">
              <legend className="pa0 f5 f4-ns mb3  noto-font">
                Sign up for our newsletter
              </legend>
              <div className="cf">
                <label className="clip" for="email-address">
                  Email Address
                </label>
                <input
                  className="f6 f5-l input bn fl black-80 bg-white pa3 lh-solid w-70 w-75-m w-60-l br2-ns br--left-ns noto-font"
                  placeholder="Your Email Address"
                  type="email"
                  name="email"
                  id="email-address"
                />
                <input
                  className="f6 f5-l button fl pv3 tc bn bg-animate pointer w-100 w-25-m w-20-l br2-ns br--right-ns submit noto-font"
                  type="submit"
                  value="subscribe"
                  onClick={onSubmit}
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
