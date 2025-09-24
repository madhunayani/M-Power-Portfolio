import React from 'react';
import styled from 'styled-components';
import { mernProjects, dataScienceProjects } from '../data'; // Your data imports are preserved
import ProjectCard from '../components/ProjectCard';

// Your original styled-component is preserved, with minor adjustments for theming
const ProjectsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 6rem 4%; /* Added padding for spacing */
  background-color: var(--background-color); /* Uses theme variable */
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  
  /* --- THEMATIC ENHANCEMENT --- */
  font-family: var(--font-display); /* Dynamically uses Orbitron or Playfair Display */
  color: var(--accent-blue);      /* Dynamically uses the theme's accent color */
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const CategoryTitle = styled.h3`
  font-size: 2.2rem;
  /* Uses a fallback for the secondary text color */
  color: var(--text-secondary, rgba(255, 255, 255, 0.9)); 
  margin-bottom: 2.5rem;
  text-align: center;
  border-bottom: 2px solid var(--accent-blue);
  padding-bottom: 1rem;
  display: inline-block;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  width: 100%;
`;

const Projects = () => {
  return (
    // The ID is updated to "garage" to match our new navigation links
    <ProjectsContainer id="garage"> 
      {/* The title is changed to "The Garage" */}
      <SectionTitle>The Garage</SectionTitle>

      {/* Your original category structure is fully preserved */}
      <CategoryWrapper>
        <CategoryTitle>Data Science & AI Initiatives</CategoryTitle>
        <ProjectsGrid>
          {dataScienceProjects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ProjectsGrid>
      </CategoryWrapper>

      <CategoryWrapper>
        <CategoryTitle>MERN Stack Deployments</CategoryTitle>
        <ProjectsGrid>
          {mernProjects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ProjectsGrid>
      </CategoryWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
