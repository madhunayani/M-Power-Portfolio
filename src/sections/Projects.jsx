import React from 'react';
import styled from 'styled-components';
import { mernProjects, dataScienceProjects } from '../data';
import ProjectCard from '../components/ProjectCard';
import { Fade } from 'react-awesome-reveal';

const ProjectsContainer = styled.section`
  padding: 6rem 4%;
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

const Projects = () => {
  return (
    // --- FIX: EMOJI REPLACED ---
    <ProjectsContainer id="garage">
      <Fade direction="up" duration={500} triggerOnce>
        <SectionTitle>The Garage 🛠️</SectionTitle>
      </Fade>

      <CategoryWrapper>
        <Fade direction="up" delay={200} duration={500} triggerOnce>
          <CategoryTitle>Data Science & AI Initiatives</CategoryTitle>
        </Fade>
        <ProjectsGrid>
          {/* --- FIX: INDIVIDUAL FADE WRAPPER FOR EACH CARD --- */}
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
          {/* --- FIX: INDIVIDUAL FADE WRAPPER FOR EACH CARD --- */}
          {mernProjects.map((project, index) => (
            <Fade key={index} direction="up" delay={index * 100} duration={500} triggerOnce>
              <ProjectCard project={project} />
            </Fade>
          ))}
        </ProjectsGrid>
      </CategoryWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
