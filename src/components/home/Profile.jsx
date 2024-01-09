import React from 'react';
import NavBar from './NavBar';

const Profile = () => {
  return (
    <div className="fullscreen prof" id="home">
      <NavBar  />
     <div className="intro">

   <h1 style={{ fontWeight:"200",
    color:"#fff",
    fontSize: "70px",
    marginBottom:"20px"
      }}>Hello,I'm
      <strong>Giridharan Santhoshkumar</strong>
      </h1>
      <strong className="letter-spacing text-uppercase opacity-incr" >
        web developer</strong>
        <br></br>
      <strong className="letter-spacing text-uppercase">
        and this is my portfolio 
      </strong>
      </div> 
      {/* Add more profile details as needed */}
    </div>
  );
};

export default Profile;