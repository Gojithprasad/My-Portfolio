import React from 'react'
import './Footer.css'

function Footer() {
    
    return (
        <div className='footer' >
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <h1>gP_ji.</h1>
                    <p>Front-end developer</p>
                </div>
               
            </div>
            <hr/>
            <div className='footer-bottom'>
                <p className='footer-bottom-left'>2024 Gojith Prasad.All rights</p>
                <div className='footer-bottom-right'>
                    <p>Term of Services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
