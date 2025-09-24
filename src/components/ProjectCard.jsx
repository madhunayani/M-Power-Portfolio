import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// This new wrapper will be the direct child of the Grid and handle alignment
const CardWrapper = styled.div`
  height: 100%; /* Ensures the wrapper takes up the full grid cell height */
  display: flex; /* Allows the card inside to be flexed */
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  padding: 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  /* --- MOVED to CardWrapper --- */
  /* height: 100%; */
  
  display: flex;
  flex-direction: column;
  width: 100%; /* Ensure card fills the wrapper */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled(LazyLoadImage)`
  height: 220px;
  width: 100%;
  object-fit: cover;
  border-radius: 4px; /* Added for softer corners on the image */
`;

const CardContent = styled.div`
  padding: 1.5rem 0 0; /* Adjusted padding */
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--primary-white);
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    flex-grow: 1; /* This makes the description take up available space */
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem; /* Increased margin for spacing */
  margin-bottom: 1.5rem; /* Added margin for spacing */

  span {
    background-color: #1a1a1a;
    color: var(--accent-blue);
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    font-size: 0.8rem;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

// New component for the links section to push it to the bottom
const CardFooter = styled.div`
  margin-top: auto; /* This is the magic property! */
  padding-top: 1rem;
`;

const CardLinks = styled.div`
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
    // We apply the wrapper here, outside the main card component
    <CardWrapper>
      <Card>
        <CardImage
          alt={project.title}
          src={project.imageUrl}
          effect="blur" 
        />
        <CardContent>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </CardContent>
        {/* The CardFooter ensures the tech stack and links are at the bottom */}
        <CardFooter>
          <TechStack>
            {project.techStack.map(tech => <span key={tech}>{tech}</span>)}
          </TechStack>
          <CardLinks>
            {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>}
          </CardLinks>
        </CardFooter>
      </Card>
    </CardWrapper>
  );
};

export default ProjectCard;
