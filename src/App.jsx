import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Sustainability from './components/Sustainability';
import Portfolio from './components/Portfolio';
import Workspaces from './components/Workspaces';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
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
