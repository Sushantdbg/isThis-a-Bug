import React from 'react';
import './ThankYouAfterReport.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ThankYouAfterReport(){
  return(
    <>
    <Navbar />

    <div className="form--submitted--all">

      <div className="form--submitted">
        <p className="fs--body--title">THANK YOU!</p>
        <img src="assets\formFilled.gif" className="fs--body--gif" alt="form filled animation" width="50%" />
        <p className="fs--bottom--text">Thanks a bunch for filling that out. It means a lot to us,
          just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p>

        <button className="fs--button">See your Active and Past reports(add a redirect after 3-5 sec maybe)</button>
      </div>
    </div>

    <Footer />
    </>
  )
}
