'use client';

import React from 'react';
import './header.css';
import Image from "next/image";

export function Header() {

    const [menuOpen, setMenuOpen] = React.useState(false)

    function handleClick(){
      console.log("Menu button clicked")
       setMenuOpen(!menuOpen)
       console.log(menuOpen)
    }
   

    return (
      <>
      <header className="header">
        
              <h1>🔥 Fireplace Palace</h1>
              <button onClick={handleClick} className="menuButton">
              <Image src="/menu-open-button.png" alt="menu open icon" width={20} height={20} className="menuIcon" />
                </button>
          
          </header>
          {menuOpen &&
              <div>
                <menu className="menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/founders">Founders</a></li>
                </menu>
              </div>
               }
      </>
    )
  }