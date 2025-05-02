import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certification from './sections/Certifications';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="w-full h-auto bg-primary text-fourth Open-Sans">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Certification/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

