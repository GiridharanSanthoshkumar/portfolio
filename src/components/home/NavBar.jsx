import React from 'react';


const NavBar = () => {
  const [classname,setclassname]=React.useState("list");
  const [openorclose,setOc]=React.useState(false);
  function toggleDropdown() {
    setOc(!openorclose);
    if(openorclose)
       setclassname("show");
    else 
      setclassname("list");
  }
  return (
    <nav>
    
      <div className="right">
      <div class="menu-icon" onClick={toggleDropdown}>☰</div>
        <ul className={classname}>
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