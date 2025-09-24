// src/sections/Projects.jsx
import React from 'react';
import styled from 'styled-components';
import { mernProjects, dataScienceProjects } from '../data'; // Import both arrays
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: var(--primary-white);
`;

const CategoryTitle = styled.h3`
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.9);
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

const Projects = ({projects}) => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Featured Projects</SectionTitle>

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
