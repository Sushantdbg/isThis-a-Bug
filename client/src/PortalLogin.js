import React from 'react';
import './PortalLogin.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PortalLogin(){
  return(
    <>
    <Navbar />
    <>
    <div className="login--body">
      <form className="login--formall">
        <h3 className="login--form--h3">Portal Login</h3>

        <label className="login--form--label" for="username">Username</label>
        <input className="login--form--input" type="text" placeholder="Enter your Email/Phone/User ID" id="username"/>

        <label className="login--form--label" for="password">Password</label>
        <input className="login--form--input" type="password" placeholder="Enter your Password here" id="password"/>

        <button className="login--form--button">Log In</button>
      </form>
    </div>
    </>
    <Footer />
    </>
    )
}
