'use client';
import React, { useState } from 'react';
import './booking.css'

function Booking() {


    const [ formData, setFormData ] = useState({fullName:"", postcode:"", firstLineAddress:"", city:"", phoneNumber:"", email:""})
    const [error, setError] = useState(false)
    
    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.fullName || !formData.postcode || !formData.firstLineAddress || !formData.city || !formData.phoneNumber || !formData.email)  {
            setError(true);
            return;
        }

        if (error) {
            setError(false);
        }




        console.log(formData);
        setFormData({fullName:"", postcode:"", firstLineAddress:"", city:"", phoneNumber:"", email:""})

    
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
                value={formData.fullName}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
            <label>Postcode
                <input 
                type="text" 
                name="postcode"
                value={formData.postcode}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
            <label>House/Flat Number and Street Name
                <input 
                type="text" 
                name="firstLineAddress" 
                value={formData.firstLineAddress}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
            <label>City
                <input 
                type="text"
                name="city" 
                value={formData.city} 
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
                value={formData.phoneNumber}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
            <label>Email Address
                <input 
                type="text" 
                name="email" 
                value={formData.email}
                onChange={(event) => handleChange(event)}>
                </input>
            </label>
        </fieldset>
        { error && <p>Error</p> }

        <button type="submit" value="submit">Submit</button>
    </form>
    </> 
    )

    }

export default Booking;