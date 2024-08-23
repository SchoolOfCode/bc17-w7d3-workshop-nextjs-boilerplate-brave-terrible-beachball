import React from 'react';
import Image from 'next/image'
import MikeMandy from '/public/founder-mike-and-mandy.png'  
import Founders1 from '/public/founders-1.png'
import Founders2 from '/public/founders-2.png'
import Founders3 from '/public/founders-3.png'
import './founders.css'

function Founders() {
    return (
    <>
    <div className="michael-and-amanda">
    <h1>Meet the artisans behind our masterpieces!</h1>
    <h1>Mike and Mandy</h1>
    <Image src={MikeMandy} alt="mnm" width="300" height="300" className="mnm"/>
    </div>
    <div className='picture-text'>
    <h2>Our craftsmanship</h2>
    <p>Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.</p>
    <Image src={Founders1} alt="f1" width="350" height="200" className="f1"/>
    <h2>Our experience</h2>
    <p>Numbers don't lie - we've been around for 204 years and have a long list of happy customers who gladly recommend us.</p>
    <Image src={Founders2} alt="f2" width="350" height="200" className="f2"/>
    <h2> Our guarantee</h2>
    <p>If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!</p>
    <Image src={Founders3} alt="f3" width="350" height="200" className="f3"/>
    </div>
</>
    )
}

export default Founders;