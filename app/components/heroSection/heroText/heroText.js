import React from 'react';
import './heroText.css'

export function HeroOneText(){
  const text = 
    {heading: "Discover the perfect fireplace ...", 
      subHeading: "Book consultation"}
  return (
    <>
  <div className="call-to-action">
                    <h2>{text.heading}</h2>
                    <a href='/booking'>{text.subHeading}</a>
                </div>
                </> )
}