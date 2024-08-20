import React from 'react';

function Booking() {
    return (
    <>
    <h1>Design Booking</h1>
    <form>
        <fieldset>
            <legend>Personal Information:</legend>
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
        <fieldset>
            <legend>Contact Information:</legend>
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