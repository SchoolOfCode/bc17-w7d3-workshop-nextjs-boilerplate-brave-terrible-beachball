import Image from 'next/image'
import Fireplace from '/public/hero-mobile.png'
import React from 'react'
import './heroImage.css'



export function HeroOneImage() {
    return (
      <>
      <div className="heroImageContainer">
      <Image src={Fireplace} alt="fireplace image" width={300} height={300} className="heroImage" />
      </div>
      </> 
      )
  }