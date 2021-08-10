import React from 'react';
import './Portf.css';
import Project1 from './project1.png'


const Portf = () => {
    const user = {
        link1:'https://my-face-recognitionv1.herokuapp.com/'
    }
    return (
        <div>
            <div id='protf' className='portf pt2 bg-near-white tc'>
                <div>
                    <h1 className='tc pt3'style={{color:'#87ceeb'}} data-aos='fade-up'>Project</h1>
                </div>
                <div>
                    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-s mw5 center" data-aos='flip-up'>
                        <a href={user.link1}>
                        <img src={Project1} className="db w-100 br2 br--top" alt="Photo of a kitten looking menac"/>
                        </a>
                        <div className="pa2 ph3-ns pb3-ns">
                            <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f5 f4-ns mv0">Facerecognition</h1>
                            </div>
                    
                            </div>
                            
                        </div>
                    </article>
                </div>
        
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#87ceeb" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,208C384,203,480,117,576,117.3C672,117,768,203,864,224C960,245,1056,203,1152,160C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>

    )
}

export default Portf

