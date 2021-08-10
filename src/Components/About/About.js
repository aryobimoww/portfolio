import React from 'react';
import Html5 from './icon/html5.png';
import Css3 from './icon/css3.png';
import Javascript from './icon/javascript.png';
import Express from './icon/express.png';
import Nodejs from './icon/nodejs.png';
import Postgresql from './icon/postgresql.png';
import Re from './icon/react.png';
import './About.css'

const About = () => {
    return (
        <div>
            <div id='about' className='about pb1 pt1 bg-near-white'>
                <div>
                    <h1 className='tc pt3'style={{color:'#87ceeb'}}>About</h1>
                </div>
                    <div className="flex flex-wrap justify-around ">
                        <div className=" w-40-ns pa3 mr2 ">
                            <p className='tl' data-aos='zoom-in'>
                                Personal Data <br/><br/>
                                Birthdate : 19-10-1995 <br/>
                                Phone:081226261019 <br/>
                                Email: aryobimoww19@gmail.com
                            </p>
                        </div>
                            <div className=" w-40-s pa3 mr2 tc">
                                <p  data-aos='fade-down'>My Tools</p>
                            <div className='flex item-start pr4 '>
                                 <div className=' w-40-ns pa3 tc'>
                                <img src={Html5} data-aos='fade-left' data-aos-delay='500'/><br/>
                                <img src={Css3} data-aos='fade-left' data-aos-delay='800'/><br/>
                                <img src={Javascript} data-aos='fade-left' data-aos-delay='1000'/>
                            </div>
                            <div className=' w-40-ns pa3'>
                                <img src={Nodejs} data-aos='fade-left' data-aos-delay='600'/><br/>
                                <img src={Postgresql} data-aos='fade-left' data-aos-delay='900'/><br/>
                                <img src={Express} data-aos='fade-left' data-aos-delay='1100'/>
                            </div>
                            <div className=' w-30-ns pa3'>
                            <img src={Re} data-aos='fade-left' data-aos-delay='700'/>
                            </div>
                            </div>
                        </div>  
                    </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87ceeb" fill-opacity="1" d="M0,288L48,245.3C96,203,192,117,288,80C384,43,480,53,576,85.3C672,117,768,171,864,176C960,181,1056,139,1152,106.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
                </div>
            </div>
        // </div>
    )
}

export default About

