'use client';
import React, { useState } from 'react';
import './booking.css'

function Booking() {


    const initialState ={ data: {
        fullName:""
    }, 
    errorStatus: false
    };

    const [ formData, setFormData ] = useState({fullName:""})
    const [error, setError] = useState(false)
    
    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.fullName)  {
            setError(true);
            return;
        }

        if (error) {
            setError(false);
        }




        console.log(formData);
        setFormData({fullName:""})

    
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

        </fieldset>
        <h3>Contact Information:</h3>
        <fieldset className="formFieldset">

        </fieldset>
        { error && <p>Error</p> }

        <button type="submit" value="submit">Submit</button>
    </form>
    </> 
    )

    }

export default Booking;