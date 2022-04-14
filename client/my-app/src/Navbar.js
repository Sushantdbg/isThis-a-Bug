import React from 'react';
import './Navbar.css'

export default function Navbar(){
  return(
    <div className="navbar--all">
      <nav className="navbar background1 h-nav-resp">
        <img className="Official-logo" src='ncblogo1.svg.png' alt="" className="d-inline-block align-text-top" />
        <h3 className="nav--logo--text">isThis-a-Bug</h3>
        <ul className="nav-list v-className-resp">
          <li><a className="nav-list-anc" href="../BugReportPage/index.html">Home </a></li>
          <li><a className="nav-list-anc" href="../AboutUs/index.html">About</a></li>
          <li><a className="nav-list-anc" href="../FAQ/index.html">FAQ</a></li>
          <li><a className="nav-list-anc navlist--login" href="../PortalLogin/index.html">Login</a></li>
        </ul>
        <img src='./key-lock.png' className="nav--icon--login" />
      </nav>
    </div>

  )
}
