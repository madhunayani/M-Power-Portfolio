import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// --- No changes to keyframes or styled-components ---
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

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

const CTAButton = styled(motion.a)`
  border: 2px solid var(--primary-white);
  color: var(--primary-white);
  padding: 15px 35px;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: var(--primary-white);
    transition: left 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: var(--primary-black);
  }

  &:hover::before {
    left: 0;
  }
`;

const Hero = () => {
  return (
    // --- CHANGE MADE HERE ---
    <HeroContainer id="ignition"> {/* id updated to "ignition" */}
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        MADHU SAI HEMANTH NAYANI
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        MERN Stack & Data Science Developer with an Engineer's precision and a Gearhead's passion. I don't just write code—I engineer high-performance digital experiences.
      </Subtitle>
      <CTAButton
        href="#garage"
        className="btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        View The Garage
      </CTAButton>
    </HeroContainer>
  );
};

export default Hero;
