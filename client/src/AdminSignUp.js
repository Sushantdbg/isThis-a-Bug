
import React from 'react';
import './AdminSignUp.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AdminSignUp(){
  return(
    <>
    <Navbar />
    <div className="admin--signup--all">
      <form className="admin--signup--form">
        <h3 className="admin--form--title">ADMIN SIGN UP</h3>
        <label className="admin--signup--label" for="username">Name</label>
        <input className="admin--signup--input" type="text" placeholder="Enter your Name" id="firstname"/>

        <label className="admin--signup--label" for="username">Unique Username</label>
        <input className="admin--signup--input" type="text" placeholder="Try entring a Unique Username" id="username"/>

        <label className="admin--signup--label" for="email">Email</label>
        <input className="admin--signup--input" type="email" placeholder="Enter your e-mail Here" id="email"/>

        <label className="admin--signup--label" for="password">Password</label>
        <input className="admin--signup--input" type="text" placeholder="Try entring a secure password" id="password0"/>
        <input className="admin--signup--input" type="password" placeholder="Re-enter your password" id="password1"/>

        <label className="admin--signup--label" for="uniquecode">Unique Admin Code</label>
        <input className="admin--signup--input" type="password" placeholder="Enter the secret code provided by IT" id="admincode"/>

        <button className="admin--signup--button">Sign Up</button>
      </form>
    </div>
    <Footer />
    </>
    )
}
