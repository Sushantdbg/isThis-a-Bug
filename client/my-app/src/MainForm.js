import React from 'react';
import './MainForm.css';
import Navbar from './Navbar';
import Footer from './Footer';


export default function MainForm(){
  return(
    <>
    <Navbar />
    <div class="main--form--page">

      <form class="mainpage--form" action="index.html" method="post">
        <h2 class="mainpage--title">RAISE YOUR BUG REPORT</h2>
        <div class="mainpage--date--div">
          <div class="mainpage--date--form">
            <label class="mp--all--labels" for="dateOfEvent"><span class="">Defect Reporting Date</span></label>
            <input type="date" name="" value="" class="mp--input--field form-control date-input"/>
          </div>
        </div>

        <div class="div-time">
          <div class="time-form">
            <label class="mp--all--labels" for="" class="time-label"><span class="">Time of Event</span></label>
            <input type="time" name="" value="" class="mp--input--field time-input form-control"/>
          </div>
        </div>

        <div>
          <label class="mp--all--labels" for="fname" class="accu-name">Title/Summary</label>
          <input type="text" id="fname" name="firstname" placeholder="Keep under 20 words..." class="mp--input--field guilty-name form-control"/>
        </div>

        <div>
          <label class="mp--all--labels" for="fname" class="accu-name">Your Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter your name here" class="mp--input--field  guilty-name form-control"/>
        </div>

        <div class="drug-rel">
          <label class="mp--all--labels" for="" class="custom-select">Project Name</label>
          <select class="form-control" class="rep-select">
            <option class="mp-option-all" value="0">--Please choose an option--</option>
            <option class="mp-option-all" value="1">Fedora 35</option>
            <option class="mp-option-all" value="2">Zomato</option>
          </select>
        </div>

        <div class="drug-rel">
          <label class="mp--all--labels" for="" class="sever"> Release/Build version</label>
          <select class="form-control">
            <option class="mp-option-all" value="">--Please choose an option--</option>
            <option class="mp-option-all">Current Live Production Build</option>
            <option class="mp-option-all">Beta Build</option>
            <option class="mp-option-all">Alpha Build</option>
          </select>
        </div>

        <div>
          <label class="mp--all--labels" for="fname" class="accu-name">Website URL</label>
          <input type="text" id="fname" name="firstname" placeholder="URL of the illegal trade website" class="mp--input--field  guilty-name form-control"/>
        </div>

        <div class="drug-rel">
          <label class="mp--all--labels" for="" class="custom-select">How Detected</label>
          <select class="form-control" class="rep-select">
            <option class="mp-option-all" value="0">--Please choose an option--</option>
            <option class="mp-option-all" value="1">Testing</option>
            <option class="mp-option-all" value="2">Review</option>
            <option class="mp-option-all" value="3">Walkthrough</option>
          </select>
        </div>

        <div class="drug-rel">
          <label class="mp--all--labels" for="" class="sever">Defect/Enhancement</label>
          <select class="form-control">
            <option class="mp-option-all" value="">--Please choose an option--</option>
            <option class="mp-option-all">Defect</option>
            <option class="mp-option-all">Enhancement</option>
          </select>
        </div>

        <div class="drug-rel">
          <label class="mp--all--labels" for="" class="custom-select">Environment</label>
          <select class="form-control" class="rep-select">
            <option class="mp-option-all" value="0">--Please choose an option--</option>
            <option class="mp-option-all" value="1">Windows</option>
            <option class="mp-option-all" value="2">Linux</option>
            <option class="mp-option-all" value="3">MacOS</option>
            <option class="mp-option-all" value="4">Android</option>
            <option class="mp-option-all" value="4">iOs</option>
            <option class="mp-option-all" value="5">Multiple</option>
          </select>
        </div>

        <div class="drug-rel">
          <label class="mp--all--labels" for="" class="sever">Priority</label>
          <select class="form-control">
            <option class="mp-option-all" value="">--Please choose an option--</option>
            <option class="mp-option-all">Mild</option>
            <option class="mp-option-all">Priority</option>
            <option class="mp-option-all">High Priority</option>
            <option class="mp-option-all">Extreme</option>
          </select>
        </div>

        <div class="drug-rel">
          <label class="mp--all--labels" for="" class="custom-select">Severity</label>
          <select class="form-control" class="rep-select">
            <option class="mp-option-all" value="0">--Please choose an option--</option>
            <option class="mp-option-all">Okk</option>
            <option class="mp-option-all">Bad</option>
            <option class="mp-option-all">Breaking</option>
            <option class="mp-option-all">Extreme</option>
          </select>
        </div>

        <div class="drug-rel">
          <label class="mp--all--labels" for="" class="sever">Status</label>
          <select class="form-control">
            <option class="mp-option-all" value="">--Please choose an option--</option>
            <option class="mp-option-all">Present</option>
            <option class="mp-option-all">Patched</option>
          </select>
        </div>

        <div class="addr-div">
          <label class="mp--all--labels" for="" class="form-label" class="addr-label">Enter detailed description</label>
          <textarea class="addr-text" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter Drug Activity related address"></textarea>
        </div>

        <div class="addr-div">
          <label class="mp--all--labels" for="" class="form-label" class="addr-label">Steps to Reproduce</label>
          <textarea class="addr-text" name="textarea" rows="8" cols="80" id="inputAddress" placeholder="Enter Drug Activity related address"></textarea>
        </div>

        <div class="input-group">
          <label class="mp--all--labels" class="input-group-text" for="inputGroupFile01"> Upload relevant Screenshots </label>
          <input type="file" class="mp--input--field form-control add-file" id="inputGroupFile01" placeholder=""/>
        </div>

        <div class="col-4">
          <div class="form-check">
            <input class="mp--input--field  form-check-input" type="checkbox" id="gridCheck"/>
            <label class="mp--all--labels" class="form-check-label" for="gridCheck">
              I agree with Privacy Policy
            </label>
          </div>
        </div>

        <div class="col-4">
          <div class="form-check">
            <input class="mp--input--field  form-check-input" type="checkbox" id="gridCheck"/>
            <label class="mp--all--labels" class="form-check-label" for="gridCheck">
              I have checked data for any errors
            </label>
          </div>
        </div>

        <div class="main-button">
          <button type="button" onclick="window.location.href='../thankYouPage/index.html'" class="btn btn-primary mp-button-last">SUBMIT</button>
        </div>

      </form>
      <Footer />

    </div>

    </>
  )
}
