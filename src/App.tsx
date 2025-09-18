import React from 'react';
import Header from './components/Header.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Sustainability from './components/Sustainability.tsx';
import Portfolio from './components/Portfolio.tsx';
import Workspaces from './components/Workspaces.tsx';
import Process from './components/Process.tsx';
import Contact from './components/Contact.tsx';

function App() {
  return (
    <div className="text-center">
      {/* Global SVG gradient definition for use in child components */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="5%" stopColor="#D2AC47" />
            <stop offset="45%" stopColor="#F7EF8A" />
            <stop offset="85%" stopColor="#AC8625" />
          </linearGradient>
        </defs>
      </svg>
      <Header />
      <About />
      <Services />
      <Sustainability />
      <Portfolio />
      <Process />
      <Contact />
      <Workspaces />
    </div>
  );
}

export default App;
