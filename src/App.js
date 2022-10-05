import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Portf from "./Components/Portf/Portf";
import Footer from "./Components/Footer/Footer";
import ToTop from "./Components/ToTop/ToTop";
import Nav from "./Components/Nav/Nav";
// import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "tachyons";
import AOS from "aos";
import "aos/dist/aos.css";
// const scroll = Scroll.animateScroll;
// const scrollTo = () => scroll.scrollTo(100);
// You can also use <link> for styles
// ..
import "./App.css";
AOS.init({
  duration: 600,
  delay: 200,
});

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Portf />
      <Footer />
      <ToTop />
    </div>
  );
}

export default App;
