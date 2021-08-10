import React from 'react';
import HeroFoto from './herofoto.png';
import './Hero.css';
import Logo from './logo.png';


const Hero = () => {
    return (
        <div>
            <div className='hero'>
            <nav className="navbar db dt-l w-100 border-box pa3 ph5-l">
                <a className="dtc v-mid mid-gray link dim w-30 pr4" href='some' title="Home">
                    <img src={Logo} className="dib w-30
                     pr5" alt="Site Name"/>
                </a>
                    <div className='dtc v-mid w-100'>
                        {/* <div className="db dtc-l v-mid w-100 w-20-l tc tr-l"> */}
                            <a className="link dim white f6 f5-l dib mr4 mr4-l ml6" href="#about" >About</a>
                            <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#protf" >Project</a>
                            {/* <a className="link dim white f6 f5-l dib pr4" href="/some/valid/uri">Contact</a> */}
                        </div>
                    {/* </div> */}
                </nav>

                <div className="mw9 center ph3-ns">
                    <div className="cf ph2-s">
                        <div className="fl w-70 w-60-ns pa2 mt5" data-aos='fade-up'>
                            <h1 className='tl white'>Hello My name Aryobimo <br />
                                I’am web  developer</h1>
                        </div>
                        <div className="fl w-30 w-20-ns pa2" data-aos='fade-left'>
                            <div ><img className='hero-foto w-85' alt="hero" src={HeroFoto} /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <script>let scroll = new SmoothScroll('a[href*="#"]);</script> */}
        </div>
    )
}

export default Hero;