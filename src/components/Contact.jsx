import React from "react";

function Contact()
{
    const date =new Date();
    const yr=date.getFullYear();
    return (<div id="contact">
   
      <div className="conta">

       <div className="contactdet" >
        <h2 style={{fontFamily:"'Roboto', sans-serif"}}>My Contact Details</h2>
        <div>
        <p class="label">EMAIL</p>
        <a href="mailto:giridharansanthosh0501@gmail.com" target="blank"><p class="det">giridharansanthosh0501@gmail.com </p></a>
        </div>
        <div>
        <p class="label">PHONE</p>
        <p class="det">+91 8940152465</p>
        </div>
        <div>
        <p class="label">ADDRESS</p>
        <p class="det">Thadagam Road,</p>
         <p class="det">Coimbatore-13,</p>
         <p class="det">India</p>
        </div>

       </div>
       <div className="skills"  >

        <h2 style={{fontFamily:"'Roboto', sans-serif"}}>Skills</h2>
        <div style={{display:"flex",flexWrap: "wrap",}}>
            <div className="skill">HTML5</div>
            <div className="skill">CSS3</div>
            <div className="skill">Javascript</div>
            <div className="skill">EJS</div>
            <div className="skill">Node.js</div>
            <div className="skill">Express.js</div>
            <div className="skill">React.js</div>
            <div className="skill">MongoDB</div>
            <div className="skill">PostgreSQL</div>
            <div className="skill">Git</div>
            <div className="skill">Rest API</div>
            
        
        </div>
       </div>

      </div>

      <div class="foot" style={{display:"flex",flexDirection:"row", width:"100%",justifyContent: "center",paddingBottom:"20px"}}>
      <div><a href="https://github.com/GiridharanSanthoshkumar/"><i class="fa-brands fa-github fa-2xl" style={{color: "#8a8a8f"}}></i></a></div>
      
      <div><a href="https://www.linkedin.com/in/giridharan-s-542a9822b/"><i class="fa-brands fa-linkedin fa-2xl" style={{color: "#8a8a8f"}}></i></a></div>
      <div><a href="https://www.instagram.com/giridharan0503/"><i class="fa-brands fa-instagram fa-2xl" style={{color: "#8a8a8f"}}></i></a></div>
      
      </div>
      
    </div>)
}
export default Contact;