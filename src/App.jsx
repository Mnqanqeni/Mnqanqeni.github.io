import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import './App.css';
import About from './sections/About';

function App() {
  return (
    <div className="w-full h-auto bg-primary text-fourth Open-Sans">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;

