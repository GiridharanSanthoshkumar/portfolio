import React from 'react';
import { useState, useEffect } from 'react';
import "./navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="right">
      <button class="menu-icon toggle-button" style={{margin:"0px",padding:"0px"}}onClick={toggleDropdown}>
      {isOpen ? (
            <span style={{fontSize:"2rem"}}> X </span> // Close icon (cross mark)
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
      </button>
        <ul className={isOpen ? "show" : "list"}>
           <li className='navicon-li'> <a href="#home" className='navicons'>HOME</a></li>
          <li className='navicon-li'><a href="#about" className='navicons'>ABOUT</a></li>
          <li className='navicon-li'><a href="#contact" className='navicons'>  CONTACT</a> </li>
          <li className='navicon-li'><a href="#projects" className='navicons'>PROJECTS </a></li>
         <li className='navicon-li'> <a href="#certificate-section" className='navicons'>CERTIFICATIONS</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
