// In your Projects.jsx file

import React from 'react';
import styled from 'styled-components';
import { mernProjects, dataScienceProjects } from '../data'; // Assuming you have this
import ProjectCard from '../components/ProjectCard';
import { Fade } from 'react-awesome-reveal';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon

const ProjectsContainer = styled.section`
  padding: 6rem 4%;
  /* Any background styles for this section would go here */
`;

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  color: var(--accent-blue);
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 5rem;
`;

const CategoryTitle = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary-white);
  text-transform: uppercase;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  align-items: stretch;
`;

// --- NEW: Styled-component for the GitHub button ---
const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 4rem auto 0; /* Centers the button and adds space above */
  padding: 1rem 2rem;
  max-width: 300px; /* Sets a max width for the button */
  
  border: 1px solid var(--accent-blue);
  background-color: transparent;
  color: var(--accent-blue);
  
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-blue);
    color: #0d0d0d; /* Your dark background color for contrast */
    box-shadow: var(--glow-blue);
    transform: translateY(-3px);
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer id="garage">
      <Fade direction="up" duration={500} triggerOnce>
        <SectionTitle>The Garage 🛠️</SectionTitle>
      </Fade>

      <CategoryWrapper>
        <Fade direction="up" delay={200} duration={500} triggerOnce>
          <CategoryTitle>Data Science & AI Initiatives</CategoryTitle>
        </Fade>
        <ProjectsGrid>
          {dataScienceProjects.map((project, index) => (
            <Fade key={index} direction="up" delay={index * 100} duration={500} triggerOnce>
              <ProjectCard project={project} />
            </Fade>
          ))}
        </ProjectsGrid>
      </CategoryWrapper>
      
      <CategoryWrapper>
        <Fade direction="up" delay={200} duration={500} triggerOnce>
          <CategoryTitle>MERN Stack Deployments</CategoryTitle>
        </Fade>
        <ProjectsGrid>
          {mernProjects.map((project, index) => (
            <Fade key={index} direction="up" delay={index * 100} duration={500} triggerOnce>
              <ProjectCard project={project} />
            </Fade>
          ))}
        </ProjectsGrid>
      </CategoryWrapper>

      {/* --- NEW: GitHub button added here --- */}
      <Fade direction="up" duration={500} delay={300} triggerOnce>
        {/* IMPORTANT: Replace with your actual GitHub URL */}
        <GitHubButton href="https://github.com/madhunayani" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          View All Projects on GitHub
        </GitHubButton>
      </Fade>
    </ProjectsContainer>
  );
};

export default Projects;
