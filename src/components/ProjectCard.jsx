import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Card = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(22, 88, 142, 0.25) 0%,
    rgba(13, 13, 13, 0.95) 100%
  );
  border: 2px solid #81C4FF;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  
  /* M Power Racing Stripe */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #81C4FF, #16588E, #E7222E);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 50px rgba(129, 196, 255, 0.4), 0 0 70px rgba(231, 34, 46, 0.3);
    border-color: #E7222E;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 2px solid #16588E;
`;

const CardImage = styled(LazyLoadImage)`
  height: 220px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.08);
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
    color: #81C4FF;
    transition: color 0.3s;
    position: relative;
    display: inline-block;
    font-weight: 700;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #81C4FF, #E7222E);
      transition: width 0.4s;
    }
  }
  
  ${Card}:hover h3 {
    color: #E7222E;
    
    &::after {
      width: 100%;
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    flex-grow: 1;
    margin: 0.5rem 0 0 0;
    font-size: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled(motion.span)`
  background: rgba(22, 88, 142, 0.4);
  color: #81C4FF;
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: 'Roboto Condensed', sans-serif;
  border: 2px solid #16588E;
  font-weight: 600;
  transition: all 0.3s ease;
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
    background: linear-gradient(135deg, #81C4FF, #E7222E);
    transition: left 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    color: #0d0d0d;
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(129, 196, 255, 0.5);
    border-color: #E7222E;
  }
`;

const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled(motion.a)`
  color: #81C4FF;
  text-decoration: none;
  font-weight: 700;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  padding: 0.7rem 1.4rem;
  border: 2px solid #81C4FF;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  letter-spacing: 0.5px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #81C4FF, #16588E);
    transition: left 0.4s;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
  }

  &:hover {
    color: #0d0d0d;
    border-color: #E7222E;
    box-shadow: 0 4px 20px rgba(129, 196, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const ProjectCard = ({ project, showLiveDemo = false }) => {
  return (
    <CardWrapper>
      <Card
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <ImageWrapper>
          <CardImage
            alt={project.title}
            src={project.imageUrl}
            effect="blur" 
          />
        </ImageWrapper>
        
        <CardContent>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </CardContent>
        
        <CardFooter>
          <TechStack>
            {project.techStack.map((tech) => (
              <TechBadge 
                key={tech}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </TechBadge>
            ))}
          </TechStack>
          
          <CardLinks>
            {/* Show Live Demo ONLY if showLiveDemo prop is true AND liveLink exists */}
            {showLiveDemo && project.liveLink && (
              <LinkButton 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </LinkButton>
            )}
            {project.codeLink && (
              <LinkButton 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Code
              </LinkButton>
            )}
          </CardLinks>
        </CardFooter>
      </Card>
    </CardWrapper>
  );
};

export default ProjectCard;
