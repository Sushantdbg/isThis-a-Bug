import React from 'react';
import './PortalLogin.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PortalLogin(){
  return(
    <>
    <Navbar />
    <>
    <div class="login--body">
      <form class="login--formall">
        <h3 class="login--form--h3">Portal Login</h3>

        <label class="login--form--label" for="username">Username</label>
        <input class="login--form--input" type="text" placeholder="Enter your Email/Phone/User ID" id="username"/>

        <label class="login--form--label" for="password">Password</label>
        <input class="login--form--input" type="password" placeholder="Enter your Password here" id="password"/>

        <button class="login--form--button">Log In</button>
      </form>
    </div>
    </>
    <Footer />
    </>
    )
}
