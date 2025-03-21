import React from 'react'
import './Contact.css'
import mail_icon from '../../Assets/mail_icon.svg'
import location_icon from '../../Assets/location_icon.svg'
import call_icon from '../../Assets/call_icon.svg'



function Contact() {
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "816098e5-c21a-489e-a77a-bb884214e57b");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        alert('Sent sucessfully')
      }
    }; 
    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>
                    Get In touch
                </h1>

            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>Builds dynamic, responsive user interfaces using React, optimizing performance and enhancing user interactions with reusable components.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt=''></img>
                            <p>gojithprasad005@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt=''></img>
                            <p>
                                +91 9567714240
                            </p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt=''></img>
                            <p>
                                Alappuzha,Kerala
                            </p>
                        </div>
                        
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter youy name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter you email' name='email' />
                    <label htmlFor=''>Write your message </label>
                    <textarea name='message'  rows="8" placeholder='Enter your message'></textarea>
                    <button type='sumbmit' className='contact-submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
