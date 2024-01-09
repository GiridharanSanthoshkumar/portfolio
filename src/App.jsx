import React from 'react';
import Profile from './components/home/Profile';
import Projects from './components/Projects';
import About from "./components/about/About";
import Contact from "./components/Contact"
function App() {
  return (
  
      <div className="App">
        <main>
          
        <Profile />
            
           
            <Projects />
            <About /> 
           
            <Contact />
        
        </main>
      </div>
    
  );
};

export default App;
