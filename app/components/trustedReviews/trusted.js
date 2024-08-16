'use client';
import React, { useEffect, useState } from 'react';
import "./trusted.css";

export function TrustedReviews(){

    const [selectedCountry, setSelectedCountry] = useState('null');
    const [reviewData, setReviewData] = useState('null');

    console.log(reviewData);

    useEffect(() => {


    }, [selectedCountry])

    function setCountry(country){
        setSelectedCountry(country);
    };

    return (
    <>
    <section className="trusted">
        <h2>Trusted.</h2>
        <hr />
        <p>We've got thousands of happy customers all over the UK. Choose your country to see the lastest review:</p>
        <br></br>
        <div className="button-container">
         <button onClick={() => setCountry('scotland')}>Scotland</button>
         <button onClick={() => setCountry('wales')}>Wales</button>
         <button onClick={() => setCountry('england')}>England</button>
        </div>
        <p>{selectedCountry}</p>
    </section>
    </>



    )
}