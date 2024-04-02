import React from 'react';
import { useState, useEffect } from 'react';

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
            <span> &times; </span> // Close icon (cross mark)
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
      </button>
        <ul className={isOpen ? "show" : "list"}>
          <a href="#home"> <li>HOME</li></a>
          <a href="#about"> <li>ABOUT</li></a>
          <a href="#contact">  <li>CONTACT</li></a>
          <a href="#projects"><li>PROJECTS</li></a>
          <a href="#certificate-section"><li>CERTIFICATIONS</li></a>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
