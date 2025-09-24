import React from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
import { FaGraduationCap } from 'react-icons/fa';

const EducationContainer = styled.section`
  padding: 6rem 4%;
  background-color: var(--background-color, #000);
`;

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  color: var(--accent-blue);
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #333;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  /* The blue circle on the timeline */
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: var(--primary-black);
    border: 4px solid var(--accent-blue);
    top: 30px;
    border-radius: 50%;
    z-index: 1;
  }
  
  &:nth-child(odd) {
    left: 0;
    &::after { right: -14.5px; }
  }

  &:nth-child(even) {
    left: 50%;
    &::after { left: -14.5px; }
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  position: relative;
  border-radius: 6px;
  text-align: left;
  
  /* The graduation cap icon */
  &::before {
    content: '🎓'; /* Using the emoji directly */
    font-family: sans-serif; /* Ensures the emoji renders correctly */
    position: absolute;
    top: -20px;
    font-size: 2rem;
    color: var(--accent-blue);
  }
  
  &:nth-child(odd) &::before { left: 20px; }
  &:nth-child(even) &::before { left: 20px; }
  
  h3 { font-size: 1.4rem; color: var(--primary-white); margin-top: 1rem; }
  h4 { font-size: 1rem; color: rgba(255, 255, 255, 0.7); margin: 0.5rem 0; }
  p { font-size: 0.9rem; font-style: italic; }
`;

const Education = () => {
  const educationData = [
    { degree: 'MERN Full Stack Course', institution: 'CCBP NxtWave', period: '2024 – 2025' },
    { degree: 'B.Tech in Computer Science & Engineering', institution: 'Acharya Nagarjuna University', period: '2020 – 2024' },
    { degree: 'Intermediate MPC', institution: 'Vignana Bharati Jr. College', period: '2018 – 2020' },
  ];

  return (
    <EducationContainer id="blueprint">
      <Fade direction="up" duration={500} triggerOnce>
        <SectionTitle>The Blueprint 📐</SectionTitle>
      </Fade>
      <Timeline>
        {educationData.map((edu, index) => (
          <Fade key={index} direction={index % 2 === 0 ? "left" : "right"} duration={600} triggerOnce>
            <TimelineItem>
              <TimelineContent>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.period}</p>
              </TimelineContent>
            </TimelineItem>
          </Fade>
        ))}
      </Timeline>
    </EducationContainer>
  );
};

export default Education;
