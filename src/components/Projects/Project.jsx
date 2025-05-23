import React from "react";
import "./project.css";
function Project(props)
{
    return (
        <div className="project-row">
        <div>
        <img src={props.imgurl} alt="project" width="100%" height="100%"></img>
        </div>
        <div className="project-row-content">
       <h2 >{props.name}</h2>
<p >{props.desc}</p>
    <div className="links">
<a href={props.srclink} target="blank"><button className="button-34" >source code</button></a>
 
      {(props.deploy)?<a href={props.deploy} target="blank"><button class="button-34" >Try it</button></a>:null}
      </div>


        </div>

        </div>
     
        );

}
export default Project;