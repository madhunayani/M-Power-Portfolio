import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const profileImage = '/images/profile-photo.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 4%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1001;
  transition: background-color 0.3s ease;
  background-color: ${props => props.$scrolled ? 'rgba(13, 13, 13, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  z-index: 1002;
  flex-shrink: 0;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-white);
  }
`;

const NavTitle = styled.div`
  color: var(--primary-white);
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;

  ${props => props.$show && css`
    opacity: 1;
    pointer-events: auto;
    animation: ${fadeIn} 0.5s ease-out forwards;
  `}

  @media (min-width: 769px) {
    font-size: 1.25rem;
    margin-left: 1.5rem;
    margin-right: auto;
  }

  /* --- FIX: More robust centering for mobile view --- */
  @media (max-width: 768px) {
    font-size: 1rem;
    position: absolute;
    /* Stretch the element across the parent's padding box */
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    /* Use margin auto to perfectly center it in the available space */
    margin-left: auto;
    margin-right: auto;

    /* Ensure text alignment is centered and element width is constrained */
    text-align: center;
    width: fit-content;
  }
`;

const DesktopNavLinks = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  
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

    &:hover { color: var(--accent-blue); }
    &:hover::after { width: 100%; }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  margin-left: auto;

  @media (max-width: 768px) {
    display: flex;
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
      span:nth-child(1) { transform: rotate(45deg); }
      span:nth-child(2) { opacity: 0; transform: translateX(20px); }
      span:nth-child(3) { transform: rotate(-45deg); }
    `}
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(18, 18, 18, 0.9); 
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 1000;

  &.open { transform: translateX(-100%); }

  a {
    font-size: 2rem;
    color: var(--primary-white);
    text-decoration: none;
    margin-bottom: 2rem;
    font-family: 'Playfair Display', serif;
    opacity: 0;
    transition: opacity 0.3s ease 0.3s;
  }

  &.open a { opacity: 1; }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setShowTitle(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Logo href="#ignition">
          <img src={profileImage} alt="Madhu Nayani Profile" />
        </Logo>
        
        <NavTitle $show={showTitle}>
          The Code Garage🔧💻
        </NavTitle>
        
        <DesktopNavLinks>
          <a href="#driver-seat">The Driver's Seat 🏁</a>
          <a href="#test-bench">The Test Bench 🏭</a>
          <a href="#garage">The Garage 🛠️</a>
          <a href="#blueprint">The Blueprint 📐</a>
          <a href="#pitstop">The Pitstop 🏎️</a>
        </DesktopNavLinks>
        
        <Hamburger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span /><span /><span />
        </Hamburger>
      </Nav>
      
      <MobileNav className={isOpen ? 'open' : ''}>
          <a href="#driver-seat" onClick={() => setIsOpen(false)}>The Driver's Seat 🏁</a>
          <a href="#test-bench" onClick={() => setIsOpen(false)}>The Test Bench 🏭</a>
          <a href="#garage" onClick={() => setIsOpen(false)}>The Garage 🛠️</a>
          <a href="#blueprint" onClick={() => setIsOpen(false)}>The Blueprint 📐</a>
          <a href="#pitstop" onClick={() => setIsOpen(false)}>The Pitstop 🏎️</a>
      </MobileNav>
    </>
  );
};

export default Header;
