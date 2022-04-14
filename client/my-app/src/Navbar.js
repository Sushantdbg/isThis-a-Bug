import React from 'react';
import './Navbar.css'

export default function Navbar(){
  return(
    <div class="navbar--all">
      <nav class="navbar background1 h-nav-resp">
        <img class="Official-logo" src='ncblogo1.svg.png' alt="" class="d-inline-block align-text-top" />
        <h3 class="nav--logo--text">isThis-a-Bug</h3>
        <ul class="nav-list v-class-resp">
          <li><a class="nav-list-anc" href="../BugReportPage/index.html">Home </a></li>
          <li><a class="nav-list-anc" href="../AboutUs/index.html">About</a></li>
          <li><a class="nav-list-anc" href="../FAQ/index.html">FAQ</a></li>
          <li><a class="nav-list-anc navlist--login" href="../PortalLogin/index.html">Login</a></li>
        </ul>
        <img src='./key-lock.png' class="nav--icon--login" />
      </nav>
    </div>

  )
}
