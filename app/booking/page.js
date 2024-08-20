'use client';
import React, { useState } from 'react';
import './booking.css'

function Booking() {


    const [ fullName, setFullName ] = useState("")
    const [ postcode, setPostcode ] = useState("")
    const [ firstLineAddress, setFirstLineAddress ] = useState("")
    const [ city, setCity ] = useState("")
    const [ phoneNumber, setPhoneNumber ] = useState("")
    const [ email, setEmail ] = useState("")
    
    
    const handleChange = (event) => {
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


    const handleSubmit = (event) => {
        console.log("Hello");
        event.preventDefault();
        console.log({fullName, postcode, firstLineAddress, city, phoneNumber, email});

        setFullName("");
        setPostcode("");
        setFirstLineAddress("");
        setCity("");
        setPhoneNumber("");
        setEmail("");
    }

    

    



    return (
    <>
    <h1>Design Booking</h1>
    <form className="contactForm" onSubmit={handleSubmit}>
    <h3>Personal Information:</h3>
        <fieldset className="formFieldset">
            
            <label>Full Name
                <input 
                type="text" 
                name="fullName" 
                value={fullName}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
            <label>Postcode
                <input 
                type="text" 
                name="postcode"
                value={postcode}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
            <label>House/Flat Number and Street Name
                <input 
                type="text" 
                name="firstLineAddress" 
                value={firstLineAddress}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
            <label>City
                <input 
                type="text"
                name="city" 
                value={city} 
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
        </fieldset>
        <h3>Contact Information:</h3>
        <fieldset className="formFieldset">
            
            <label>Phone Number
                <input 
                type="text" 
                name="phoneNumber" 
                value={phoneNumber}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
            <label>Email Address
                <input 
                type="text" 
                name="email" 
                value={email}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
        </fieldset>
        <button type="submit" value="submit">Submit</button>
    </form>
    </> 
    )
}

export default Booking;