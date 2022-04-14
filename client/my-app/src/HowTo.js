
import React from 'react';
import './HowTo.css';
import Navbar from './Navbar';
import Footer from './Footer';


export default function HowTo(){
  return (
    <>
    <Navbar />

    <div className="about--all">
      <div className="about">
        <p className="about--title">How to right a good bug report</p>
        <p className="about--point">What are some basic necessity before going forward to bug reporting</p>
        <p className="about--desc">Keep in care about the formatting of the report, fill each text box correctly</p>
        <button className="about-button-last" type="button" onclick="window.location.href='../BugReportPage/index.html'">Let's Go to Bug Reporting page</button>
      </div>
    </div>
    <Footer />

    </>
  )
}
