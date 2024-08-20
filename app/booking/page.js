import React from 'react';
import './booking.css'

function Booking() {
    return (
    <>
    <h1>Design Booking</h1>
    <form class="contactForm">
    <h3>Personal Information:</h3>
        <fieldset class="formFieldset">
            
            <label>Full Name
                <input type="text"></input>
            </label>
            <label>Postcode
                <input type="text"></input>
            </label>
            <label>House/Flat Number and Street Name
                <input type="text"></input>
            </label>
            <label>City
                <input type="text"></input>
            </label>
        </fieldset>
        <h3>Contact Information:</h3>
        <fieldset class="formFieldset">
            
            <label>Phone Number
                <input type="text"></input>
            </label>
            <label>Email Address
                <input type="text"></input>
            </label>
        </fieldset>
    </form>
    </> 
    )
}

export default Booking;