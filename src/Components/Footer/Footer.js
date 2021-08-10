import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer' style={{background:'#87ceeb'}} data-aos='fade-right'>
            <div className="pa4-l">
                <form className=" mw7 center pa4 br2-ns  b--black-10">
                    <fieldset className="cf bn ma0 pa0">
                    <legend className="pa0 f5 f4-ns mb3 white-80">Sign up for our newsletter</legend>
                    <div className="cf">
                        <label className="clip" for="email-address">Email Address</label>
                        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address"/>
                        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-near-white-70 hover-bg-near-white black pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe"/>
                    </div>
                    </fieldset>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;