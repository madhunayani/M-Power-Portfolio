import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0c0c0c;
  padding: 4rem 4%;
  color: rgba(255, 255, 255, 0.5);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  
  h4 {
    color: var(--primary-white);
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
  }
  
  a {
    display: block;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    margin-bottom: 0.8rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-white);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  border-top: 1px solid #222;
  padding-top: 2rem;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <h4>Madhu Nayani</h4>
          <p>MERN Stack & Data Science Developer</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="https://www.linkedin.com/in/madhu-nayani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/SaiHemanth17" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/Madhu17" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </FooterGrid>
      <Copyright>
        © {new Date().getFullYear()} Madhu Sai Hemanth Nayani. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
