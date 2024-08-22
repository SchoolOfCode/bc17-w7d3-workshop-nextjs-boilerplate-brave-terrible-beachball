"use client";
import React, { useState, useReducer } from "react";
import styles from "./booking.css";

const initialState = {
  data: {
    fullName: "",
    postcode: "",
    firstLineAddress: "",
    city: "",
    phoneNumber: "",
    email: ""
  },
  status: "editing",
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
            [action.payload.name]: action.payload.value,
          },
        };

      case "ERROR":
        return {
          ...state,
          status: "error",
        };

      case "FORM_SUBMITTING":
        return {
          ...state,
          status: "submitting",
        };

      case "FORM_SUCCESS":
        return {
          ...state,
          status: "success",
        };

      case "FORM_OVER_DONE_CANNOT_TYPE":
        return {
          ...state,
          status: "overdone",
        };

      case "RESET_FORM":
        return initialState;

      default:
        return state;
    }
  }

  function handleFormFieldChange(event) {
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: {
        name: event.target.name, // name of field
        value: event.target.value, // new value
      },
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "FORM_SUBMITTING",
    });

    setTimeout(() => {
      if (!state.data.fullName || !state.data.postcode || !state.data.firstLineAddress || !state.data.city || !state.data.phoneNumber || !state.data.email) {
        dispatch({
          type: "ERROR",
        });
        return;
      }

      console.log(state.data);
      dispatch({
        type: "FORM_SUCCESS",
      });

      dispatch({
        type: "FORM_OVER_DONE_CANNOT_TYPE",
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
      <form className="contactForm" onSubmit={handleSubmit}>
        <h3>Personal Information:</h3>
        <fieldset className="formFieldset">
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={state.data.fullName}
              onChange={(event) => handleFormFieldChange(event)}
            />
          </label>
          <label>
            Postcode
            <input
              type="text"
              name="postcode"
              value={state.data.postcode}
              onChange={(event) => handleFormFieldChange(event)}
            ></input>
          </label>
          <label>House/Flat Number and Street Name
                <input 
                type="text" 
                name="firstLineAddress" 
                value={state.data.firstLineAddress}
                onChange={(event) => handleFormFieldChange(event)}>
                </input>
            </label>
            <label>City
                <input 
                type="text"
                name="city" 
                value={state.data.city} 
                onChange={(event) => handleFormFieldChange(event)}>
                </input>
            </label>


        </fieldset>
        <h3>Contact Information:</h3>
        <fieldset className="formFieldset">
        <label>Phone Number
                <input 
                type="text" 
                name="phoneNumber" 
                value={state.data.phoneNumber}
                onChange={(event) => handleFormFieldChange(event)}>
                </input>
            </label>
            <label>Email Address
                <input 
                type="text" 
                name="email" 
                value={state.data.email}
                onChange={(event) => handleFormFieldChange(event)}>
                </input>
            </label>

        </fieldset>
        {state.status === "error" && <p className={styles.error} style={{color:"red"}} >Error!</p>}

        <button type="submit" value="submit" className={styles.button}> {state.status ===  "submitting" ? "Submitting..." : "Submit" || "success" ? "Submitted" : "Submit"|| "editing" ? "Submit" : "Submit" }
          
        </button>
      </form>
    </>
  );
}
export default Booking;
