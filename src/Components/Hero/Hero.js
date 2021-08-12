import React from 'react';
import HeroFoto from './herofoto.png';
import './Hero.css';
import Logo from './logo.png';
import { Link, animateScroll as scroll } from "react-scroll";
 
const Hero = () => {
    return (
        <div>
            <div className='hero relative'>
            <nav className="navbar db dt-l w-100 border-box pa3 ph5-l noto-font">
                <a className="dtc v-mid mid-gray link dim w-10 " href='some' title="Home">
                    <img src={Logo} className="dib w2
                     pr5" alt="Site Name"/>
                </a>
                    <div className='dtc v-mid w-10'>
                        {/* <div className="db dtc-l v-mid w-100 w-20-l tc tr-l"> */}
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <a className="link dim white f6 f5-l dib mr4 mr4-l" href="#about" >About</a>
                        </Link>
                           <Link
                                activeClass="active"
                                to="portf"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#portf" >Project</a>
                            </Link>
                            {/* <a className="link dim white f6 f5-l dib pr4" href="//some/valid/uri">Contact</a> */}
                        </div>
                    {/* </div> */}
                </nav>

                
                    <div className="flex flex-wrap-reverse item-center" id='hero'>
                        <div className="  w-65 w-55-ns pa2 mt5" data-aos='fade-up'>
                            <h1 className='tl white hero-font'>Hello My name Aryobimo <br />
                                I’am web  developer</h1>
                        </div>
                        <div className=" w-50 w-25-ns pa2" data-aos='fade-left'>
                            <div ><img className='hero-foto w-85' alt="hero" src={HeroFoto} /></div>
                        </div>
                    </div>
                </div>
            </div>
        
    )   
}

export default Hero;