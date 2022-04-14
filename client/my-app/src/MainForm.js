import React from 'react';
import './MainForm.css';
import Navbar from './Navbar';
import Footer from './Footer';


export default function MainForm(){
  return(
    <>
    <Navbar />
    <div className="main--form--page">

      <form className="mainpage--form" action="index.html" method="post">
        <h2 className="mainpage--title">RAISE YOUR BUG REPORT</h2>
        <div className="mainpage--date--div">
          <div className="mainpage--date--form">
            <label className="mp--all--labels" for="dateOfEvent"><span className="">Defect Reporting Date</span></label>
            <input type="date" name="" value="" className="mp--input--field form-control date-input"/>
          </div>
        </div>

        <div className="div-time">
          <div className="time-form">
            <label className="mp--all--labels" for="" className="time-label"><span className="">Time of Event</span></label>
            <input type="time" name="" value="" className="mp--input--field time-input form-control"/>
          </div>
        </div>

        <div>
          <label className="mp--all--labels" for="fname" className="accu-name">Title/Summary</label>
          <input type="text" id="fname" name="firstname" placeholder="Keep under 20 words..." className="mp--input--field guilty-name form-control"/>
        </div>

        <div>
          <label className="mp--all--labels" for="fname" className="accu-name">Your Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter your name here" className="mp--input--field  guilty-name form-control"/>
        </div>

        <div className="drug-rel">
          <label className="mp--all--labels" for="" className="custom-select">Project Name</label>
          <select className="form-control" className="rep-select">
            <option className="mp-option-all" value="0">--Please choose an option--</option>
            <option className="mp-option-all" value="1">Fedora 35</option>
            <option className="mp-option-all" value="2">Zomato</option>
          </select>
        </div>

        <div className="drug-rel">
          <label className="mp--all--labels" for="" className="sever"> Release/Build version</label>
          <select className="form-control">
            <option className="mp-option-all" value="">--Please choose an option--</option>
            <option className="mp-option-all">Current Live Production Build</option>
            <option className="mp-option-all">Beta Build</option>
            <option className="mp-option-all">Alpha Build</option>
          </select>
        </div>

        <div>
          <label className="mp--all--labels" for="fname" className="accu-name">Website URL</label>
          <input type="text" id="fname" name="firstname" placeholder="URL of the illegal trade website" className="mp--input--field  guilty-name form-control"/>
        </div>

        <div className="drug-rel">
          <label className="mp--all--labels" for="" className="custom-select">How Detected</label>
          <select className="form-control" className="rep-select">
            <option className="mp-option-all" value="0">--Please choose an option--</option>
            <option className="mp-option-all" value="1">Testing</option>
            <option className="mp-option-all" value="2">Review</option>
            <option className="mp-option-all" value="3">Walkthrough</option>
          </select>
        </div>

        <div className="drug-rel">
          <label className="mp--all--labels" for="" className="sever">Defect/Enhancement</label>
          <select className="form-control">
            <option className="mp-option-all" value="">--Please choose an option--</option>
            <option className="mp-option-all">Defect</option>
            <option className="mp-option-all">Enhancement</option>
          </select>
        </div>

        <div className="drug-rel">
          <label className="mp--all--labels" for="" className="custom-select">Environment</label>
          <select className="form-control" className="rep-select">
            <option className="mp-option-all" value="0">--Please choose an option--</option>
            <option className="mp-option-all" value="1">Windows</option>
            <option className="mp-option-all" value="2">Linux</option>
            <option className="mp-option-all" value="3">MacOS</option>
            <option className="mp-option-all" value="4">Android</option>
            <option className="mp-option-all" value="4">iOs</option>
            <option className="mp-option-all" value="5">Multiple</option>
          </select>
        </div>

        <div className="drug-rel">
          <label className="mp--all--labels" for="" className="sever">Priority</label>
          <select className="form-control">
            <option className="mp-option-all" value="">--Please choose an option--</option>
            <option className="mp-option-all">Mild</option>
            <option className="mp-option-all">Priority</option>
            <option className="mp-option-all">High Priority</option>
            <option className="mp-option-all">Extreme</option>
          </select>
        </div>

        <div className="drug-rel">
          <label className="mp--all--labels" for="" className="custom-select">Severity</label>
          <select className="form-control" className="rep-select">
            <option className="mp-option-all" value="0">--Please choose an option--</option>
            <option className="mp-option-all">Okk</option>
            <option className="mp-option-all">Bad</option>
            <option className="mp-option-all">Breaking</option>
            <option className="mp-option-all">Extreme</option>
          </select>
        </div>

        <div className="drug-rel">
          <label className="mp--all--labels" for="" className="sever">Status</label>
          <select className="form-control">
            <option className="mp-option-all" value="">--Please choose an option--</option>
            <option className="mp-option-all">Present</option>
            <option className="mp-option-all">Patched</option>
          </select>
        </div>

        <div className="addr-div">
          <label className="mp--all--labels" for="" className="form-label" className="addr-label">Enter detailed description</label>
          <textarea className="addr-text" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter Drug Activity related address"></textarea>
        </div>

        <div className="addr-div">
          <label className="mp--all--labels" for="" className="form-label" className="addr-label">Steps to Reproduce</label>
          <textarea className="addr-text" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter Drug Activity related address"></textarea>
        </div>

        <div className="input-group">
          <label className="mp--all--labels" className="input-group-text" for="inputGroupFile01"> Upload relevant Screenshots </label>
          <input type="file" className="mp--input--field form-control add-file" id="inputGroupFile01" placeholder=""/>
        </div>

        <div className="col-4">
          <div className="form-check">
            <input className="mp--input--field  form-check-input" type="checkbox" id="gridCheck"/>
            <label className="mp--all--labels" className="form-check-label" for="gridCheck">
              I agree with Privacy Policy
            </label>
          </div>
        </div>

        <div className="col-4">
          <div className="form-check">
            <input className="mp--input--field  form-check-input" type="checkbox" id="gridCheck"/>
            <label className="mp--all--labels" className="form-check-label" for="gridCheck">
              I have checked data for any errors
            </label>
          </div>
        </div>

        <div className="main-button">
          <button type="button" onclick="window.location.href='../thankYouPage/index.html'" className="btn btn-primary mp-button-last">SUBMIT</button>
        </div>

      </form>

    </div>
    <Footer />

    </>
  )
}
