import React from 'react';
import './PortalSignUpSuccess.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PortalSignUpSuccess(){
  return (
    <>
    <Navbar />
    <div class="su--confirmation">
      <p class="su--title">THANK YOU!</p>
      <p class="su--message">You have been successfully Signed up</p>
      <button class="su--button">Let's Go to Login Page</button>
    </div>
    <Footer />
    </>
  )
}
