import React from 'react';
import styled from 'styled-components';
import { mernProjects, dataScienceProjects } from '../data';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SplitText } from '../components/animations/SplitText';
import { GlitchText } from '../components/animations/GlitchText';

const ProjectsContainer = styled.section`
  padding: 6rem 4%;
`;

const MainTitleWrapper = styled(motion.div)`
  font-family: var(--font-display);
  font-size: 4rem;
  text-align: center;
  margin-bottom: 5rem;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CategoryWrapper = styled.div`
  margin-bottom: 5rem;
`;

const CategoryTitle = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #81C4FF, #E7222E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  font-weight: 700;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  align-items: stretch;
`;

const GitHubButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 4rem auto 0;
  padding: 1.2rem 2.5rem;
  max-width: 350px;
  border: 3px solid #81C4FF;
  background-color: transparent;
  color: #81C4FF;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
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
    box-shadow: 0 5px 30px rgba(129, 196, 255, 0.6), 0 0 50px rgba(231, 34, 46, 0.4);
    transform: translateY(-3px);
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const Projects = () => {
  return (
    <ProjectsContainer id="garage">
      {/* MAIN TITLE WITH GLITCH ANIMATION - SAME AS "THE PITSTOP" */}
      <MainTitleWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GlitchText text="The Garage" />
      </MainTitleWrapper>

      {/* Data Science Projects */}
      <CategoryWrapper>
        <CategoryTitle>
          <SplitText 
            text="Data Science & AI Initiatives" 
            type="words" 
            duration={0.8}
          />
        </CategoryTitle>
        <ProjectsGrid>
          {dataScienceProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <ProjectCard project={project} showLiveDemo={false} />
            </motion.div>
          ))}
        </ProjectsGrid>
      </CategoryWrapper>
      
      {/* MERN Stack Projects */}
      <CategoryWrapper>
        <CategoryTitle>
          <SplitText 
            text="MERN Stack Deployments" 
            type="words" 
            duration={0.8}
          />
        </CategoryTitle>
        <ProjectsGrid>
          {mernProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <ProjectCard project={project} showLiveDemo={true} />
            </motion.div>
          ))}
        </ProjectsGrid>
      </CategoryWrapper>

      <GitHubButton 
        href="https://github.com/madhunayani" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub size={24} />
        View All Projects on GitHub
      </GitHubButton>
    </ProjectsContainer>
  );
};

export default Projects;
