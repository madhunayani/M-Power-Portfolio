import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SplitText } from '../components/animations/SplitText';
import { RotatingText } from '../components/animations/RotatingText';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 4%;
  overflow: hidden;
  position: relative;
`;

const TitleWrapper = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  color: var(--primary-white);
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 700px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RotatingWrapper = styled.span`
  background: linear-gradient(135deg, #81C4FF, #E7222E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  text-shadow: 0 0 30px rgba(129, 196, 255, 0.6);
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1.2rem 3rem;
  border: 3px solid #81C4FF;
  color: #81C4FF;
  background-color: transparent;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-weight: 700;
  border-radius: 8px;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #81C4FF, #16588E, #E7222E);
    transition: left 0.5s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
  }

  &:hover {
    color: #0d0d0d;
    border-color: #E7222E;
    box-shadow: 
      0 5px 30px rgba(129, 196, 255, 0.6),
      0 0 50px rgba(231, 34, 46, 0.4);
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  const roles = ['MERN Stack Developer', 'AI Engineer', 'Performance Optimizer', 'Digital Architect'];

  return (
    <HeroContainer id="ignition">
      <TitleWrapper>
        <SplitText 
          text="MADHU SAI HEMANTH NAYANI" 
          delay={0.3}
          duration={1.5}
          type="chars"
        />
      </TitleWrapper>
      
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <RotatingWrapper>
          <RotatingText words={roles} interval={2500} />
        </RotatingWrapper>
        {' '}with an Engineer's precision and a Gearhead's passion. I don't just write code—I engineer high-performance digital experiences.
      </Subtitle>
      
      <CTAButton 
        href="#garage"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View The Garage
      </CTAButton>
    </HeroContainer>
  );
};

export default Hero;
