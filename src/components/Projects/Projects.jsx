import React from 'react';
import Project from './Project';
const project = [
   {
    name:"AI GENERATED IMAGE DETECTION",
    imgurl:"Images/AI_generated_image_detection.png",
    Description:"Built an end-to-end AI vs real image detection pipeline using Vision Transformers (ViT). Trained a ViT model for classification, deployed the model using FastAPI, and integrated it with a React frontend for user-friendly image uploads and real-time probabilistic predictions.",
    TechStack: "Vision Transformers (ViT), PyTorch, FastAPI, React.js, Hugging Face Transformers, PIL, Axios",
    Githublink: "https://github.com/GiridharanSanthoshkumar/Ai_generated_image_detection_Using_vit",
    
  },
  
   {
    name:"CONTEXT AWARE ACCESS CONTROL FOR IOT SYSTEMS",
    imgurl:"Images/CAAC_blockchain1.png",
    Description:"Developed a decentralized access control system for IoT devices using blockchain and smart contracts. The system enforces context-aware policies, such as time, location, and user roles, to grant or deny access to resources like smart lights and security cameras. It ensures secure, transparent, and auditable access management without relying on a central authority.",
    TechStack: "React.js, Node.js, Express.js, Solidity, Web3.js, Ganache, Truffle, IPFS (off-chain storage)",
    Githublink: "https://github.com/Sandhiya-8/mini_project",
    
  },
  /*
  {
    name:"OFFLINE QUIZ APP",
    imgurl:"Images/CAAC_blockchain1.png",
    Description:"Developed a decentralized access control system for IoT devices using blockchain and smart contracts. The system enforces context-aware policies, such as time, location, and user roles, to grant or deny access to resources like smart lights and security cameras. It ensures secure, transparent, and auditable access management without relying on a central authority.",
    TechStack: "React Native,Expo build framework",
    Githublink: "https://github.com/Sandhiya-8/mini_project",
    
  },
  */
  
  
   {
    name:"INFOQUEST REGISTRATION WEBSITE (SPACE THEMED)",
    imgurl:"Images/Infoquest.png",
    Description:"Designed and built a space-themed symposium registration website for a college event, featuring smooth animations and an intuitive user interface. The system captures participant details and records them directly into Google Sheets, providing a lightweight and efficient registration workflow.",
    TechStack: "React.js, Node.js, Express.js, Google Sheets API, Framer Motion",
    Githublink: "https://github.com/GiridharanSanthoshkumar/Iq_website",
    deployedlink:"https://infoquest.gctcsea.in/"
  },
  
  
  {
    name:"HOSPITAL SUGGESTION SYSTEM",
    imgurl:"Images/Hospitalsuggestion.png",
    Description:"Developed a Hospital Suggestion System for efficient local healthcare access. Using geolocation ,places API and machine learning, it offers personalized hospital recommendations based on user location and reported medical issues, addressing current limitations in existing options.",
    TechStack: "React.js,Node.js,Express.js,API,LLM integration",
    Githublink: "https://github.com/GiridharanSanthoshkumar/Hospital_Suggestion_System/",
    
  },
    {
  name:"BRAINSTRAIN REGISTRATION WEBSITE",
  imgurl:"Images/Brainstrain.png",
  Description:"Collaborated with a team to develop a event registration website for a college club. As one of the primary web developers, I worked closely with designers to bring the visual and functional aspects of the site to life. The website features a visually appealing home page, an events page that lists all upcoming events, and a seamless registration page for participants.",
  TechStack: "React.js",
  Githublink: "https://github.com/GiridharanSanthoshkumar/Brainstrain",
  deployedlink:"https://www.ldsgct.in/"
  
  },
  {
name:"KEEPER APP",
imgurl:"Images/Keeper.png",
Description:"Developed frontend for a note-keeping web application using React.js.It enables users to seamlessly create, edit, and delete notes through an intuitive user interface. Leveraging React's useState for state management, the project ensures dynamic and responsive note handling.",
TechStack: "React.js",
Githublink: "https://github.com/GiridharanSanthoshkumar/keeper-react-app",

},

{
  name:"DICTIONARY",
  imgurl:"Images/Dictionary.png",
  
  Description: "Developed an online Dictionary using the Free Dictionary API. This platform allows users to search for word definitions, learn pronunciation, and discover synonyms for the words they are interested in.",
  TechStack: "HTML, CSS, JavaScript ,EJS, Node.js, Express.js, REST API(Free Dictionary API)",
  Githublink:"https://github.com/GiridharanSanthoshkumar/Dictionary",
  
 },
{
name:"SIMON GAME",
imgurl:"Images/simon.png",
Description: "Created a classic Simon game using HTML, CSS, and JavaScript with jQuery for interactivity. Players must follow a sequence of colors and sounds, progressively increasing in complexity.",
TechStack: "HTML, CSS, JavaScript (jQuery)",
Githublink: "https://github.com/GiridharanSanthoshkumar/s-mon-Game",
deployedlink:"https://giridharansanthoshkumar.github.io/s-mon-Game/"
},
{
name:"DRUM STICK PLAYER",
imgurl:"Images/Drumkit.png",
Description: "Built a virtual drumstick player using HTML, CSS, and JavaScript with jQuery. Users can simulate playing the drums by clicking on the virtual drumsticks and producing corresponding sounds.",
TechStack:" HTML, CSS, JavaScript (jQuery)",
Githublink: "https://github.com/GiridharanSanthoshkumar/drumstick",
deployedlink:"https://giridharansanthoshkumar.github.io/drumstick/"
}


];



const Projects = () => {
  return (
    <div  id="projects">
      <h2>My <strong>Projects</strong></h2>
      
      <div className="projects-content">
      
     { project.map((pro)=>{
        return <Project name={pro.name} imgurl={pro.imgurl} desc={pro.Description} srclink={pro.Githublink} deploy={(pro.deployedlink)?pro.deployedlink:null}></Project>
      })
      }
      </div>
      
      
     
      {/* Add more project details as needed */}
    </div>
  );
};

export default Projects;
