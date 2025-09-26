// Location: src/components/Footer.jsx

import React from 'react';
import styled from 'styled-components';
// Import icons from their respective sets
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Correct import for the "X" icon

const FooterContainer = styled.footer`
  padding: 4rem 4% 2rem;
  text-align: center;
  border-top: 1px solid #333;
  background-color: #0a0a0a;
`;

const SiteNavWrapper = styled.div`
  margin-bottom: 3rem;
  
  h4 {
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--primary-white);
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
  }

  nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  a {
    color: var(--accent-blue);
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-white);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.8rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--accent-blue);
      transform: translateY(-3px);
    }
  }
`;

const CopyrightNotice = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  margin-top: 2rem;
`;

const Footer = () => {
  const navLinks = [
    { name: 'The Ignition 💥', href: '#ignition' },
    { name: "The Driver's Seat 💺", href: '#driver-seat' },
    { name: 'The Test Bench 🛋', href: '#test-bench' },
    { name: 'The Garage 🛠️', href: '#garage' },
    { name: 'The Blueprint 🗺️', href: '#blueprint' },
    { name: 'The Pitstop ⛽', href: '#pitstop' },
  ];

  const socialMediaLinks = [
    { name: 'GitHub', url: 'https://github.com/madhunayani', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/madhunayani/', icon: <FaLinkedin /> },
    // --- FIX: Using the correct icon and name for "X" ---
    { name: 'X', url: 'https://x.com/Mad_hu17', icon: <FaXTwitter /> },
  ];

  return (
    <FooterContainer id="pitstop">
      <SiteNavWrapper>
        <h4>Site Contents</h4>
        <nav>
          {navLinks.map(link => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </nav>
      </SiteNavWrapper>

      <SocialLinks>
        {socialMediaLinks.map(social => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            {social.icon}
          </a>
        ))}
      </SocialLinks>

      <CopyrightNotice>
        &copy; {new Date().getFullYear()} Madhu Nayani. All Rights Reserved.
      </CopyrightNotice>
    </FooterContainer>
  );
};

export default Footer;

