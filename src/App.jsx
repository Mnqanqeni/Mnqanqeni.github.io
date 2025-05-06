import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certification from './sections/Certifications';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="w-full h-auto bg-primary text-fourth Open-Sans overflow-x-hidden">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certification />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
