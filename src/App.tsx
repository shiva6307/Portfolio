import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="min-h-screen">
        {renderSection()}
      </div>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}