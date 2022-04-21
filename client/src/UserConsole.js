import React from 'react';
import './UserConsole.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function UserConsole(){
  return (
    <>
    <Navbar />

    <div className="userconsoleall">
      <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h6>#1</h6>
            <h2>Google</h2>
            <a href="#">ⓘ Get Company Info</a>
          </div>
          <div className="course-info">
            <div className="progress-container">
              <div className="progress"></div>
              <span className="progress-text">
                Verification Stage
              </span>
            </div>
            <h6>Date of report : 08/04/2022</h6>
            <h2>Google Photos app Safe-vault encryption issue after latest update</h2>
            <button className="uc--card--btn">See Detailed View</button>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}
