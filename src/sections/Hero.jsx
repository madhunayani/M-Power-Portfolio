import React from 'react';
// THE FIX: `keyframes` is no longer needed, so we don't import it.
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';


// THE FIX: The unused `fadeIn` constant that was causing the crash has been completely removed.


const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 4%;
`;


const Title = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  color: var(--primary-white);
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;


const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 700px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1rem 3rem;
  border: 2px solid var(--accent-blue);
  color: var(--accent-blue);
  background-color: transparent;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--accent-blue);
    /* --- THIS IS THE FIX --- */
    color: #0d0d0d; /* Change text to your deep black base color */
    
    box-shadow: var(--glow-blue); /* Optional: Add the glow effect */
    transform: translateY(-3px);
  }
`;



const Hero = () => {
  return (
    <HeroContainer id="ignition">
      {/* THE FIX: Changed initial animation to a faster, single Fade */}
      <Fade direction="up" triggerOnce duration={600} delay={100}>
        <Title>MADHU SAI HEMANTH NAYANI</Title>
        <Subtitle>
          MERN Stack & AI Developer with an Engineer's precision and a Gearhead's passion. I don't just write code—I engineer high-performance digital experiences.
        </Subtitle>
        <CTAButton href="#garage" className="btn">
          View The Garage
        </CTAButton>
      </Fade>
    </HeroContainer>
  );
};

export default Hero;

