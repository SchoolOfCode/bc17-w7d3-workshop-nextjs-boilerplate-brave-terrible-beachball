'use client';
import React, { useState, useReducer} from 'react';
import styles from './booking.css'

const initialState ={ data: {
    fullName:'',
    postcode:''
},
   status: "editing"
};


function Booking() {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);
    
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

          case "ERROR":
            return {
              ...state,
              status: "error"
          }

          case "FORM_SUBMITTING":
            return {
                ...state,
                status: "submitting"
            };

          case "FORM_SUCCESS":
            return {
                ...state,
                status: "success"
            };

          case "RESET_FORM":
            return initialState;

          default:
            return state;
        }
      }
      
      function handleFormFieldChange(event) {
        
            dispatch({
              type: 'CHANGE_FORM_DATA',
              payload: {
                name: event.target.name, // name of field
                value: event.target.value // new value
              }
            });
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
          type: "FORM_SUBMITTING"
      });

      setTimeout(() => {

        if (!state.data.fullName || !state.data.postcode) {
          dispatch({
            type: "ERROR",
        });
        return;
      }
  
        console.log(state.data);
        dispatch({
          type: "FORM_SUCCESS"
      });

      console.log("Data!!!!!!");

      }, 2000);
    
        // Reset the form
        // dispatch({
        //   type: "RESET_FORM"
        // });
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
            <label>Postcode
                <input 
                type="text" 
                name="postcode"
                value={state.data.postcode}
                onChange={(event) => handleFormFieldChange(event)}>
                </input>
            </label>
        </fieldset>
        <h3>Contact Information:</h3>
        <fieldset className='formFieldset'>
        </fieldset>
        { state.status === "error" && <p className={styles.error}>Error</p> }
        <button type='submit' value='submit'>Submit</button>
    </form>
    </>
    )
    }
export default Booking;