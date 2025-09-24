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
  background: transparent;
  cursor: pointer;
  z-index: 1;
  display: inline-block;  /* ✅ keeps ::before bound to the button */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;  /* ✅ anchor inside the button */
    width: 100%;
    height: 100%;
    background-color: var(--primary-white);
    transform: scaleX(0);  /* ✅ starts invisible */
    transform-origin: left;  /* ✅ grows from left edge */
    transition: transform 0.4s ease-in-out;
    z-index: -1;  /* ✅ stays behind text */
  }

  &:hover {
    color: var(--primary-black);
  }

  &:hover::before {
    transform: scaleX(1);  /* ✅ smooth fill from left to right */
  }
`;



const Hero = () => {
  return (
    <HeroContainer id="ignition">
      {/* THE FIX: Changed initial animation to a faster, single Fade */}
      <Fade direction="up" triggerOnce duration={600} delay={100}>
        <Title>MADHU SAI HEMANTH NAYANI</Title>
        <Subtitle>
          MERN Stack & Data Science Developer with an Engineer's precision and a Gearhead's passion. I don't just write code—I engineer high-performance digital experiences.
        </Subtitle>
        <CTAButton href="#garage" className="btn">
          View The Garage
        </CTAButton>
      </Fade>
    </HeroContainer>
  );
};

export default Hero;

