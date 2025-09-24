import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  padding: 3rem 4%;
  text-align: center;
  border-top: 1px solid #222;
`;

const SocialLinks = styled.div`
  margin-bottom: 1.5rem;
  a {
    color: var(--primary-white);
    text-decoration: none;
    font-size: 1.1rem; /* Adjusted for better readability */
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    margin: 0 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-blue);
    }
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const Footer = ({ socialLinks }) => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} Madhu Nayani. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
