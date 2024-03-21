import React from 'react';
import gmailIcon from '../images/gmailIcon.png';
import instagramIcon from '../images/instagramIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import facebookIcon from '../images/facebookIcon.png';
import '../style.css'

function Footer() {
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
        <p className='h6 text-light w-75 my-5' style={{ textAlign: 'center' }}>  your trusted platform for seamless online consultations with expert doctors. 
        Experience personalized healthcare from the comfort of your home. 
        Connect with qualified professionals, receive timely medical advice, and take control of your well-being effortlessly. 
        Your health is our priority, and at WellMed, we're dedicated to providing convenient, reliable healthcare solutions tailored to your needs.</p>
      </div>
      <div className='text-center'>
        <p className='text-light text-sm'>
          Get connected with us on social networks:
        </p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <img src={gmailIcon} alt="Gmail" className='icons' />
        <img src={instagramIcon} alt="Instagram" className='icons'/>
        <img src={facebookIcon} alt="Facebook" className='icons'/>
        <img src={twitterIcon} alt="Twitter" className='icons'/>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <p className='text-sm text-light m-3'>&#169; 2024 Copyright : WellMed</p>
      </div>
    </div>

  );
}

export default Footer;
