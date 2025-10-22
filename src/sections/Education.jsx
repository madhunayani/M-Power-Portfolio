import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlitchText } from '../components/animations/GlitchText';

const EducationContainer = styled.section`
  padding: 6rem 4%;
`;

const SectionTitleWrapper = styled(motion.div)`
  font-family: var(--font-display);
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: linear-gradient(
      180deg,
      #81C4FF 0%,
      #16588E 33%,
      #E7222E 66%,
      #81C4FF 100%
    );
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(129, 196, 255, 0.5);
  }

  @media (max-width: 768px) {
    &::after {
      left: 20px;
      width: 6px;
      margin-left: 0;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #81C4FF, #E7222E);
    border: 4px solid #0d0d0d;
    top: 30px;
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 25px rgba(129, 196, 255, 0.8), 0 0 40px rgba(231, 34, 46, 0.5);
  }
  
  &:nth-child(odd) {
    left: 0;
    &::after { right: -14px; }
  }

  &:nth-child(even) {
    left: 50%;
    &::after { left: -14px; }
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0 !important;
    padding-left: 60px;
    padding-right: 15px;

    &::after {
      left: 8px;
    }
  }
`;

const TimelineContent = styled(motion.div)`
  padding: 25px 30px;
  background: linear-gradient(
    135deg,
    rgba(22, 88, 142, 0.3) 0%,
    rgba(13, 13, 13, 0.95) 100%
  );
  border: 2px solid #81C4FF;
  position: relative;
  border-radius: 12px;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #81C4FF, #E7222E);
    opacity: 1;
  }
  
  &:hover {
    border-color: #E7222E;
    box-shadow: 0 10px 40px rgba(129, 196, 255, 0.4), 0 0 60px rgba(231, 34, 46, 0.3);
    transform: translateY(-8px) scale(1.02);
  }
  
  h3 { 
    font-size: 1.5rem; 
    color: #81C4FF;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
    transition: color 0.3s;
  }
  
  h4 { 
    font-size: 1.1rem; 
    color: rgba(255, 255, 255, 0.8); 
    margin: 0.5rem 0;
    font-weight: 500;
  }
  
  p { 
    font-size: 1rem; 
    font-style: italic;
    color: #E7222E;
    font-weight: 700;
    margin-top: 0.8rem;
  }

  &:hover h3 {
    color: #E7222E;
  }

  @media (max-width: 768px) {
    h3, h4, p {
      word-wrap: break-word;
    }
  }
`;

const Education = () => {
  const educationData = [
    { degree: 'MERN Full Stack Course', institution: 'CCBP NxtWave', period: '2024 – 2025' },
    { degree: 'B.Tech in Computer Science & Engineering', institution: 'Acharya Nagarjuna University', period: '2020 – 2024' },
    { degree: 'Intermediate MPC', institution: 'Vignana Bharati Jr. College', period: '2018 – 2020' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: (index) => index % 2 === 0 ? -100 : 100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        type: 'spring',
        stiffness: 80
      }
    })
  };

  return (
    <EducationContainer id="blueprint">
      <SectionTitleWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GlitchText text="The Blueprint" />
      </SectionTitleWrapper>
      
      <Timeline>
        {educationData.map((edu, index) => (
          <TimelineItem
            key={index}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <TimelineContent whileHover={{ scale: 1.02 }}>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.period}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationContainer>
  );
};

export default Education;
