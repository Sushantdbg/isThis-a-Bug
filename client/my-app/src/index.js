import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"
import SignUpConfirmation from "./SignUpConfirmation"
import Login from "./Login"


function WholePage(){
  return(

    <Login />

  )
};

ReactDOM.render(<WholePage />, document.getElementById("root"));

// <Navbar />
// <div className="body--except--navbar">
// <MainContent />
// <Footer />
// </div>
// <SignUpConfirmation />
