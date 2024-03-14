import React from 'react';
import Profile from './components/home/Profile';
import Projects from './components/Projects/Projects';
import About from "./components/about/About";
import Contact from "./components/Contact"
import CertificateSection from './components/Certificate/CertificateSection';
function App() {
  return (
  
      <div className="App">
        <main>
          
        <Profile />
            
           
            <Projects />
            <CertificateSection/>
            <About /> 
           
            
            <Contact />

        
        </main>
      </div>
    
  );
};

export default App;
