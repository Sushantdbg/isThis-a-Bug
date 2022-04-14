
import React from 'react';
import './AdminSignUp.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AdminSignUp(){
  return(
    <>
    <Navbar />
    <div class="admin--signup--all">
      <form class="admin--signup--form">
        <h3 class="admin--form--title">ADMIN SIGN UP</h3>
        <label class="admin--signup--label" for="username">Name</label>
        <input class="admin--signup--input" type="text" placeholder="Enter your Name" id="firstname"/>

        <label class="admin--signup--label" for="username">Unique Username</label>
        <input class="admin--signup--input" type="text" placeholder="Try entring a Unique Username" id="username"/>

        <label class="admin--signup--label" for="email">Email</label>
        <input class="admin--signup--input" type="email" placeholder="Enter your e-mail Here" id="email"/>

        <label class="admin--signup--label" for="password">Password</label>
        <input class="admin--signup--input" type="text" placeholder="Try entring a secure password" id="password0"/>
        <input class="admin--signup--input" type="password" placeholder="Re-enter your password" id="password1"/>

        <label class="admin--signup--label" for="uniquecode">Unique Admin Code</label>
        <input class="admin--signup--input" type="password" placeholder="Enter the secret code provided by IT" id="admincode"/>

        <button class="admin--signup--button">Sign Up</button>
      </form>
    </div>
    <Footer />
    </>
    )
}
