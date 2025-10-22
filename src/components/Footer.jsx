import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterContainer = styled.footer`
  padding: 4rem 4% 2rem;
  text-align: center;
  border-top: 3px solid;
  border-image: linear-gradient(90deg, #81C4FF, #16588E, #E7222E) 1;
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.8) 0%, rgba(0, 0, 0, 1) 100%);
  position: relative;
  overflow: hidden;
  
  /* Racing stripe animation */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #81C4FF, #E7222E, transparent);
    animation: slideRight 3s infinite;
  }
  
  @keyframes slideRight {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const SiteNavWrapper = styled(motion.div)`
  margin-bottom: 3rem;
  
  h4 {
    font-family: 'Roboto Condensed', sans-serif;
    background: linear-gradient(90deg, #81C4FF, #E7222E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    letter-spacing: 1.5px;
    font-weight: 700;
  }

  nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const FooterLink = styled(motion.a)`
  color: #81C4FF;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #81C4FF, #E7222E);
    transition: all 0.3s;
    transform: translateX(-50%);
  }

  &:hover {
    color: #E7222E;
    transform: translateY(-3px);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: #81C4FF;
  font-size: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid #81C4FF;
  position: relative;
  overflow: hidden;
  
  /* RESTORED: Radial gradient hover effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #81C4FF 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    color: #E7222E;
    border-color: #E7222E;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 5px 25px rgba(231, 34, 46, 0.6);
  }
  
  &:hover::before {
    opacity: 0.3;
  }
`;

const CopyrightNotice = styled(motion.p)`
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  margin-top: 2rem;
`;

const Footer = () => {
  const navLinks = [
    { name: 'The Ignition', href: '#ignition' },
    { name: "The Driver's Seat", href: '#driver-seat' },
    { name: 'The Test Bench', href: '#test-bench' },
    { name: 'The Garage', href: '#garage' },
    { name: 'The Blueprint', href: '#blueprint' },
    { name: 'The Pitstop', href: '#pitstop' },
  ];

  const socialMediaLinks = [
    { name: 'GitHub', url: 'https://github.com/madhunayani', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/madhunayani/', icon: <FaLinkedin /> },
    { name: 'X', url: 'https://x.com/Mad_hu17', icon: <FaXTwitter /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <FooterContainer>
      <SiteNavWrapper initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
        <motion.h4 variants={itemVariants}>Site Contents</motion.h4>
        <nav>
          {navLinks.map((link) => (
            <FooterLink key={link.name} href={link.href} variants={itemVariants} whileHover={{ scale: 1.1 }}>
              {link.name}
            </FooterLink>
          ))}
        </nav>
      </SiteNavWrapper>

      <SocialLinks initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
        {socialMediaLinks.map((social) => (
          <SocialIcon 
            key={social.name} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            variants={itemVariants}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </SocialIcon>
        ))}
      </SocialLinks>

      <CopyrightNotice initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
        &copy; {new Date().getFullYear()} Madhu Nayani. All Rights Reserved.
      </CopyrightNotice>
    </FooterContainer>
  );
};

export default Footer;
