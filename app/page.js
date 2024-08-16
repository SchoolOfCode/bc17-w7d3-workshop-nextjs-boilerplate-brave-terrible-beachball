import Image from "next/image";
import Fireplace from "/public/hero-mobile.png"
import ArticleOne from "/public/how-it-works-1.png"
import "./page.css";
import {HeroOneImage} from "./components/heroSection/heroImage/heroImage"
import {HeroOneText} from "./components/heroSection/heroText/heroText"
import { TrustedReviews } from "./components/trustedReviews/trusted";
import {HowItWorks} from "./components/howItWorks/howItWorks"

import Link from "next/link"



export default function Home() {
  return (
    <div>
    <HeroOneImage />
    <HeroOneText /> 
    <TrustedReviews/>
    <HowItWorks />
    </div>
    
                  
  );
}

