import React from 'react';


const NavBar = () => {
  return (
    <nav>
      <div className="right">
        <ul className="list">
        <a href="#home"> <li>HOME</li></a>
        <a href="#about"> <li>ABOUT</li></a>
          
       <a  href="#contact">  <li>CONTACT</li></a>
          
          <a href="#projects"><li>PROJECTS</li></a>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;