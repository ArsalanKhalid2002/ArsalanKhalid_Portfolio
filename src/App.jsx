import React from 'react';
import Navbar from './components/navbar';
import Intro from './components/Intro';
import About from './components/About';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* Background divs */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950"></div>
      <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main content */}
      <div className='container mx-auto px-8'>
        <Navbar />
        <Intro />
        <Technology/>
        <Experience/>
        <Projects />
        <Education/>
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;