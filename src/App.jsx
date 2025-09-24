import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
// No need to import ThemeToggle here, it's inside the Header

function App() {
  // This state controls the entire theme system
  const [theme, setTheme] = useState('classic'); // 'classic' or 'digitalTwin'

  // This function is what the button needs to call
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'classic' ? 'digitalTwin' : 'classic'));
  };

  // This effect applies the correct CSS class to the body
  useEffect(() => {
    document.body.className = ''; // Clear previous classes
    if (theme === 'digitalTwin') {
      document.body.classList.add('digital-twin');
    }
  }, [theme]);

  const socialLinksData = {
    github: "https://github.com/madhunayani",
    linkedin: "https://linkedin.com/in/madhunayani",
    twitter: "https://x.com/Mad_hu17"
  };

  return (
    <>
      {/* --- FIX IS HERE: Pass the props down to the Header --- */}
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer socialLinks={socialLinksData} />
    </>
  );
}

export default App;
