import React from 'react';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Portf from './Components/Portf/Portf';
import Footer from './Components/Footer/Footer';
import 'tachyons';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
 // You can also use <link> for styles
// ..
import './App.css';
AOS.init({
  duration: 600,
  delay:200

});
const option = {
  speed:300
}



function App() {
  return (

    <div className="App flex justify-center">
      <div>
        <Hero />
        <About />
        <Portf/>
        <Footer/>
      </div>
      <script>let scroll = new SmoothScroll('a[href*="#"]');</script>
    </div>
  );
}

export default App;
