import React from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="right">
      <button class="menu-icon toggle-button" style={{margin:"0px",padding:"0px"}}onClick={toggleDropdown}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
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
