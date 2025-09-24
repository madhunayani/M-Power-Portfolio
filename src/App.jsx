import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Internships from './sections/Internships';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const socialLinksData = {
    github: "https://github.com/madhunayani",
    linkedin: "https://linkedin.com/in/madhunayani",
    twitter: "https://x.com/Mad_hu17"
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Internships />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer socialLinks={socialLinksData} />
    </>
  );
}

export default App;
