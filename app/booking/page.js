'use client';
import React, { useState, useReducer} from 'react';
import './booking.css'


const initialState ={ data: {
    fullName:""
    
}, 
errorStatus: false
};


function Booking() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {error, setError} = useState(false);


    function reducer(state, action) {
        switch (action.type){
            case "CHANGE_FIELD":
                return {
                    ...state.data, 
                    [action.payload.data.name]: action.payload.data.value
                }
                
            
            default: return state;
        
    }}
    



 
    
    const handleChange = (event) => {
        dispatch({
            type: "CHANGE_FIELD",
            payload: {data: event.target}
        })
        const {name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!data.fullName)  {
            setError(true);
            return;
        }

        if (error) {
            setError(false);
        }




        console.log(data);
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
                value={state.data.fullName}
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