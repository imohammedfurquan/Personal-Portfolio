
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import projects from './Projects.json'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
