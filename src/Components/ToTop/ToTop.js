import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './ToTop.css';

const ToTop = () => {
    return(
           
                <div className='top br-100  shadow-2 '>
                <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className='no-underline'
                >
                    <a classname='link dim no-underline' href="#hero"><img src="https://img.icons8.com/ios/20/ffffff/collapse-arrow--v1.png"/></a>
                </Link>    
                </div>
        
    )}
export default ToTop;