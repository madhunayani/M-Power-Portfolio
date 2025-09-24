import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Imports the blur-up effect

const Card = styled.div`
  background-color: #050505;
  border: 1px solid #222;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  }
`;

const CardImage = styled(LazyLoadImage)`
  height: 220px;
  width: 100%;
  object-fit: cover; // Ensures the image covers the area without distortion
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    /* Uses the sans-serif for subheadings */
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--primary-white);
  }

  p {
    /* Uses the default readable font */
    font-family: 'Roboto', sans-serif;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    flex-grow: 1;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    background-color: #1a1a1a;
    color: var(--accent-blue);
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    font-size: 0.8rem;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

const CardLinks = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  a {
    color: var(--primary-white);
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;

    &:hover {
      color: var(--accent-blue);
    }
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardImage
        alt={project.title}
        src={project.imageUrl} // We will add this to data.js
        effect="blur" 
      />
      <CardContent>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TechStack>
          {project.techStack.map(tech => <span key={tech}>{tech}</span>)}
        </TechStack>
        <CardLinks>
          {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>}
        </CardLinks>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
