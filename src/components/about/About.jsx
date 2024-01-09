import React from "react";
import Description from "./Description";
import Photo from "./Photo";
function About(){
    return (<div id="about">
    
    <h2> <strong>About</strong> me</h2>
    <div className="abt">
    <Photo></Photo>
    <Description></Description>
    </div>
    </div>);

}
export default About;