import React from 'react';
import Header from './components/Header.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Sustainability from './components/Sustainability.tsx';
import Portfolio from './components/Portfolio.tsx';
import Workspaces from './components/Workspaces.tsx';
import Process from './components/Process.tsx';
import Contact from './components/NewContact.tsx';
import Hero from './components/Hero.tsx';
import Stats from './components/Stats.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQs from './components/FAQs.tsx';

function App() {
  return (
    <div className="text-center">

      <Header />
      <main className='pt-28'>
        <Hero />
        <About />
        <Stats />
        {/* <Services /> */}
        {/* <Sustainability /> */}
        <Portfolio />
        {/* <Process /> */}
        <Testimonials />
        <FAQs />
        <Contact />
        {/* <Workspaces /> */}
      </main>
    </div>
  );
}

export default App;
