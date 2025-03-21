import React from 'react'
import './About.css'
import heronew from '../../Assets/heronew.png'

function about() {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>



      </div>
      <div className='about-section'>
        <div className='about-left'>
          <img src={heronew} alt='' ></img>
        </div>
        <div className='about-right'>
          <div className='about-para' >
            <p>
              Front-End Developer with expertise in React.js, JavaScript, and Node.js. Specializes in responsive design and
              modern practices.
            </p>
            <p>
              Front-End Developer with expertise in React.js, JavaScript, and Node.js. Specializes in responsive design and
              modern practices.
            </p>
          </div>
          <div className='about-skills'>

            <div className='about-skill'><p>HTML</p><hr style={{ width: '90%' }} /></div>
            <div className='about-skill'><p>CSS</p><hr style={{ width: '70%' }} /></div>
            <div className='about-skill'><p>React</p><hr style={{ width: '60%' }} /></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{ width: '50%' }} /></div>


          </div>
        </div>
        
      </div>
   
    </div>
  )
}

export default about
