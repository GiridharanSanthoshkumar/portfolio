import React from 'react';


const Profile = () => {
  return (
    <div className="fullscreen prof" id="home">
     
     <div className="intro">

   <h1 style={{ 
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