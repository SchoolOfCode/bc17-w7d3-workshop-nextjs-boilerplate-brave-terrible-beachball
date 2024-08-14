import React from 'react';
import Image from 'next/image';
import "./howItWorks.css";

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