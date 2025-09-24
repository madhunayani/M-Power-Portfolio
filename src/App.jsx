import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer'; // Keep the footer

function App() {
  // This data is pre-filled with the links you provided.
  const socialLinksData = {
    github: "https://github.com/madhunayani",
    linkedin: "https://linkedin.com/in/madhunayani",
    twitter: "https://x.com/Mad_hu17"
  };

  // The testimonialsData array has been completely removed.

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      {/* The Testimonials component has been removed from here. */}
      <Footer socialLinks={socialLinksData} />
    </>
  );
}

export default App;
