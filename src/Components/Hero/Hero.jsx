import React from 'react';
import './Hero.css';
import newhero from '../../Assets/newhero.jpeg';
import resume from '../../Assets/resume.pdf'; // Adjust the path and name as needed
import { Link as AnchorLink } from 'react-scroll';

function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={newhero} alt='' />
      <h1><span> Hey... I'm Gojith Prasad</span> Frontend Developer</h1>
      <p>Front-End Developer. Specializes in responsive design and modern practices.</p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink
            to='contact'
            offset={-50}
            smooth={true}
            duration={500}
          >
            Connect With Me
          </AnchorLink>
        </div>
        
        <div className='hero-resume' onClick={() => window.open(resume, '_blank')}>
          My Resume
        </div>
      </div>
    </div>
  );
}

export default Hero;
