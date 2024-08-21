'use client';
import React, { useState, useReducer} from 'react';
import './booking.css'

const initialState ={ data: {
    fullName:'',
    postcode:''
},
errorStatus: false
};
function Booking() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [error, setError] = useState(false);
    
    function reducer(state, action) {
        switch (action.type) {
          case "CHANGE_FORM_DATA":
            return {
              ...state,
              data: {
                ...state.data,
                [action.payload.name]: action.payload.value
              }
            };
          case "RESET_FORM":
            return initialState;
          default:
            return state;
        }
      }
      
      function handleFormFieldChange(event) {
        if (event.target.name === 'fullName') {
            dispatch({
              type: 'CHANGE_FORM_DATA',
              payload: {
                name: event.target.name, // name of field
                value: event.target.value // new value
              }
            });
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!state.data.fullName) {
          setError(true);
          return;
        }
        if (error) {
          setError(false);
        }
        console.log(state.data);
        // Reset the form
        dispatch({
          type: "RESET_FORM"
        });
      };
    return (
    <>
    <h1>Design Booking</h1>
    <form className='contactForm' onSubmit={handleSubmit}>
    <h3>Personal Information:</h3>
        <fieldset className='formFieldset'>
            <label>Full Name
            <input
  type="text"
  name="fullName"
  value={state.data.fullName}
  onChange={(event) => handleFormFieldChange(event)}
/>
            </label>
        </fieldset>
        <h3>Contact Information:</h3>
        <fieldset className='formFieldset'>
        </fieldset>
        { error && <p>Error</p> }
        <button type='submit' value='submit'>Submit</button>
    </form>
    </>
    )
    }
export default Booking;