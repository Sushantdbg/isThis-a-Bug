
import React from 'react';
import './UserSignUp.css';
import Navbar from './Navbar';
import Footer from './Footer';


export default function UserSignUp(){
  return (
    <>
    <Navbar />
    <div className="user--signup--all">
      <form className="user--signup--form">
        <h3 className="user--form--title">USER SIGN UP</h3>
        <label className="user--signup--label" for="username">Name</label>
        <input className="user--signup--input" type="text" placeholder="Enter your Name" id="firstname"/>

        <label className="user--signup--label" for="username">Unique Username</label>
        <input className="user--signup--input" type="text" placeholder="Try entring a Unique Username" id="username"/>

        <label className="user--signup--label" for="email">Email</label>
        <input className="user--signup--input" type="email" placeholder="Enter your e-mail Here" id="email"/>

        <label className="user--signup--label" for="password">Password</label>
        <input className="user--signup--input" type="text" placeholder="Try entring a secure password" id="password0"/>
        <input className="user--signup--input" type="password" placeholder="Re-enter your password" id="password1"/>

        <button className="user--signup--button">Sign Up</button>
      </form>
    </div>

    <Footer />

    </>
  )
}
