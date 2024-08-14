'use client';

import React from 'react';
import './header.css'

export function Header() {

    const [menuOpen, setMenuOpen] = React.useState(false)

    function handleClick(){
      console.log("Menu button clicked")
       setMenuOpen(!menuOpen)
       console.log(menuOpen)
    }

    return (
      <>
      <header>
        <div className="header">
              <h1>🔥 Fireplace Palace</h1>
              <button onClick={handleClick} className="menuButton">Menu</button>
              
              </div>
          </header>
      </>
    )
  }