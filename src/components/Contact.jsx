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
               <div className="skill">Data Structures & Algorithms</div>
               <div className="skill">Object-Oriented Programming (OOP)</div>
               <div className="skill">Design Patterns</div>
               <div className="skill">System Design (HLD, LLD)</div>
               <div className="skill">Operating Systems</div>
               <div className="skill">Computer Networks</div>

               <div className="skill">Java</div>
               <div className="skill">Python</div>
               <div className="skill">C++</div>
               <div className="skill">JavaScript</div>
               <div className="skill">TypeScript</div>

               <div className="skill">Spring Boot</div>
               <div className="skill">Node.js</div>
               <div className="skill">Express.js</div>
               <div className="skill">REST APIs</div>

               <div className="skill">React.js</div>
            <div className="skill">Angular</div>
            
            <div className="skill">MySQL</div>
            <div className="skill">PostgreSQL</div>
            <div className="skill">MongoDB</div>
            
            
        
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