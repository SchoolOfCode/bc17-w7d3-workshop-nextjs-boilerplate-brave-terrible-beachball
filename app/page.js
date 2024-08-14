import Image from "next/image";
import "./page.css";


export function HeroOneText(){
  const text = 
    {heading: "Discover the perfect fireplace ...", 
      subHeading: "Book consultation:", 
      contactNumber: "0121 345 6789"}
  return (
    <>
  <div className="call-to-action">
                    <h2>{text.heading}</h2>
                    <p>{text.subHeading}<span className="contact-number">{text.contactNumber}</span></p>
                </div>
                </> )
}


export default function Home() {
  return (
    <h1> <HeroOneText /> </h1>
    
                  
  );
}

