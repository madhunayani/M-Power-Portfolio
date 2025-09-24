import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// This is the path to your new profile photo.
const profileImage = '/images/profile-photo.jpg';

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 4%; /* Slightly adjusted padding for the image */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;
  transition: background-color 0.3s ease;
  background-color: ${props => props.$scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
`;

// The Logo component is now styled to hold an image perfectly.
const Logo = styled.a`
  display: flex;
  align-items: center;
  z-index: 1002;

  img {
    height: 50px; /* NEW, larger size */
    width: 50px;  /* NEW, larger size */
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-white);
  }
`;

const DesktopNavLinks = styled.nav`
  /* No changes here */
  a {
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--primary-white);
    text-decoration: none;
    margin-left: 2rem;
    font-size: 1rem;
    text-transform: uppercase;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--accent-blue);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--accent-blue);
    }
    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  /* No changes here, this is our clean, transient-prop version */
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;

  span {
    width: 1.5rem;
    height: 3px;
    background: var(--primary-white);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  
  ${props => props.$isOpen && css`
    span:nth-child(1) {
      transform: rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.nav`
  /* No changes here */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--primary-black);
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 1000;

  &.open {
    transform: translateX(-100%);
  }

  a {
    font-size: 2rem;
    color: var(--primary-white);
    text-decoration: none;
    margin-bottom: 2rem;
    font-family: 'Playfair Display', serif;
    opacity: 0;
    transition: opacity 0.3s ease 0.3s;
  }

  &.open a {
    opacity: 1;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav $scrolled={scrolled}>
        {/* The text logo is replaced with this image logo */}
        <Logo href="/">
          <img src={profileImage} alt="Madhu Nayani Profile" />
        </Logo>
        
        <DesktopNavLinks>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </DesktopNavLinks>
        
        <Hamburger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </Nav>
      
      <MobileNav className={isOpen ? 'open' : ''}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </MobileNav>
    </>
  );
};

export default Header;
