import React, {useRef} from 'react';
import './contact.css';
import walmart from '../../assets/Walmart.png';
import facebook from '../../assets/Facebook.png';
import salesforce from '../../assets/Salesforce.png';
import microsoft from '../../assets/Microsoft.png';
import facebookLogo from '../../assets/facebookLogo.png';
import linkdinLogo from '../../assets/linkedinLogo.png';
import youtubeLogo from '../../assets/youtubeLogo.png';
import instagramLogo from '../../assets/instagramLogo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jhqy17l', 'template_oe3wa5s', form.current, {
            publicKey: 'FcX-MqHZpz27gn1va',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
      };
  return (
    <section id='contactPage'>
        <div id='client'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>I have worked with a range of clients, from startups to large corporations. </p>
            <div className='clientImgs'>
                <img src= {walmart} alt='client' className='clientImg'/>
                <img src= {facebook} alt='client' className='clientImg'/>
                <img src= {salesforce} alt='client' className='clientImg'/>
                <img src= {microsoft} alt='client' className='clientImg'/>
                
            </div>

        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>please fillout the form below to discuss any work opportunity</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Your Name' className='name' name='from_name'/>
                <input type='email' placeholder='Your Email' className='email' name='your_email'/>
                <textarea placeholder='Your Message' className='msg' rows="5" name='message' ></textarea>
                <button type='submit' className='submitBtn' value='send' >Submit</button>
            </form>
            <div className='links'>
                <a href='https://www.facebook.com/profile.php?id=100007599663008' target='_blank' rel="noopener noreferrer">
                      <img src={facebookLogo} alt='facebook' className='link'/>
                </a>
                
                <a href='https://www.linkedin.com/in/anshu-gupta-19229a232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noopener noreferrer">
                    <img src={linkdinLogo} alt='twitter' className='link'/>
                </a>
                
                <a href='https://www.youtube.com/@anshu_gupta_official' target='_blank' rel="noopener noreferrer">
                      <img src={youtubeLogo} alt='youtube' className='link'/>
                </a>
                <a href='https://www.instagram.com/anshu_gupta_official?igsh=MWNmcXQ4dnp5Y21wcA==' target='_blank' rel="noopener noreferrer">
                      <img src={instagramLogo} alt='instagram' className='link'/>
                </a>
                
            </div>
        </div>
    </section>
  )
}

export default Contact;