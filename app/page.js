import Image from "next/image";
import Fireplace from "/public/hero-mobile.png"
import ArticleOne from "/public/how-it-works-1.png"
import "./page.css";


export function HeroOneImage() {
  return (
    <>
    <div className="heroImageContainer">
    <Image src={Fireplace} alt="fireplace image" width={300} height={300} className="heroImage" />
    </div>
    </> 
    )
}

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

export function HowItWorks(){
  const articleList = [
    {image: "/how-it-works-1.png", heading: "Give us a call...", bodyText: "Call us and book in a \'Design Consultation\' on a date and time to suit.", id: 1},
    {image: "/how-it-works-2.png", heading: "We come to you...", bodyText: "We come to your home to do an assessment of the space and to your style preference.", id: 2},
    {image: "/how-it-works-3.png", heading: "We recommend...", bodyText: "We send you a bespoke set of fireplace recommendation.", id: 3}
  ];
  return ( 
    <>
<section className="how-it-works">
  { <h2>How it works.</h2> }
  {articleList.map((article) => (
    <div className="article-preview" key={article.id}>
      <Image src={article.image} alt="article one"  width={500} height={300}/>
      <h2>{ article.heading }</h2>
      <p>{ article.bodyText }</p>
    </div>

  ))}
  </section>
  </>
  );
}

export default function Home() {
  return (
    <div>
    <HeroOneImage />
    <HeroOneText /> 
    <HowItWorks />
    </div>
    
                  
  );
}

