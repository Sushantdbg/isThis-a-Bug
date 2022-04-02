import React from 'react';
import './Login.css'


export default function Login(){
  return (
    <form>
    <h3>Portal Login</h3>

    <label for="username">Username</label>
    <input type="text" placeholder="Enter your Email/Phone/User ID" id="username"/>

    <label for="password">Password</label>
    <input type="password" placeholder="Enter your Password here" id="password"/>

    <button >Log In</button>
    </form>
  )
}
