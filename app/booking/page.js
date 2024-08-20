'use client';
import React, { useState } from 'react';
import './booking.css'

function Booking() {

    const [ fullName, setFullName ] = useState("")
    
    function handleChange (event) {
        if (event.target.name === "fullName"){
            setFullName(event.target.value)
        }

        if (event.target.name === "postcode"){
            setPostcode(event.target.value)
        }
        if (event.target.name === "firstLineAddress"){
            setFirstLineAddress(event.target.value)
        }
        if (event.target.name === "city"){
            setCity(event.target.value)
        }
        if (event.target.name === "phoneNumber"){
            setPhoneNumber(event.target.value)
        }
        if (event.target.name === "email"){
            setEmail(event.target.value)
        }
        
    }

    console.log(fullName)


    return (
    <>
    <h1>Design Booking</h1>
    <form class="contactForm">
    <h3>Personal Information:</h3>
        <fieldset class="formFieldset">
            
            <label>Full Name
                <input type="text" name="fullName" onChange={(event) => handleChange(event)}></input>
            </label>
            <label>Postcode
                <input type="text" name="postcode" onChange={(event) => handleChange(event)}></input>
            </label>
            <label>House/Flat Number and Street Name
                <input type="text" name="firstLineAddress" onChange={(event) => handleChange(event)}></input>
            </label>
            <label>City
                <input type="text" name="city" onChange={(event) => handleChange(event)}></input>
            </label>
        </fieldset>
        <h3>Contact Information:</h3>
        <fieldset class="formFieldset">
            
            <label>Phone Number
                <input type="text" name="phoneNumber" onChange={(event) => handleChange(event)}></input>
            </label>
            <label>Email Address
                <input type="text" name="email" onChange={(event) => handleChange(event)}></input>
            </label>
        </fieldset>
    </form>
    </> 
    )
}

export default Booking;