import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + '/bug-report.png'} className="nav--icon" />
            <h3 className="nav--logo_text">isThis-a-Bug?</h3>
            <h4 className="nav--title">Authorised login</h4>
            <img src={process.env.PUBLIC_URL + '/key-lock.png'} className="nav--icon--login" />
        </nav>
    )
}
