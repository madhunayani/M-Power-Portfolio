import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const profileImage = '/images/profile-photo.jpg';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Nav = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  padding: 1rem 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${props => props.$scrolled ? `
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 3px solid;
    border-image: linear-gradient(90deg, #81C4FF, #16588E, #E7222E) 1;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.6);
  ` : `
    background: transparent;
  `}
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1002;
`;

const LogoImage = styled(motion.img)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #81C4FF;
  box-shadow: 0 0 25px rgba(129, 196, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: #E7222E;
    box-shadow: 0 0 35px rgba(231, 34, 46, 0.7);
    transform: rotate(5deg) scale(1.1);
  }
`;

const LogoText = styled(motion.div)`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #81C4FF, #E7222E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
  position: relative;
  
  @media (max-width: 768px) {
    display: ${props => props.$showOnMobile ? 'block' : 'none'};
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const NavPill = styled(motion.a)`
  position: relative;
  padding: 0.8rem 1.6rem;
  color: #81C4FF;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    color: #E7222E;
    border-color: #81C4FF;
    background: rgba(129, 196, 255, 0.1);
    transform: translateY(-2px);
  }
  
  ${props => props.$active && `
    background: linear-gradient(135deg, #81C4FF, #16588E);
    color: #0d0d0d;
    border-color: #81C4FF;
    box-shadow: 0 4px 20px rgba(129, 196, 255, 0.5);
  `}
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #81C4FF;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1002;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(129, 196, 255, 0.1);
    border-color: #E7222E;
  }
  
  @media (max-width: 968px) {
    display: flex;
  }
`;

const MenuLine = styled(motion.span)`
  width: 20px;
  height: 3px;
  background: #81C4FF;
  border-radius: 2px;
  transition: all 0.3s;
  
  ${MobileMenuButton}:hover & {
    background: #E7222E;
  }
`;

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  border-left: 3px solid;
  border-image: linear-gradient(180deg, #81C4FF, #16588E, #E7222E) 1;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  box-shadow: -10px 0 60px rgba(0, 0, 0, 0.7);
`;

const MobileNavLink = styled(motion.a)`
  color: #81C4FF;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.3s;
  
  &::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 4px;
    background: linear-gradient(90deg, #81C4FF, #E7222E);
    transition: width 0.4s;
  }
  
  &:hover {
    color: #E7222E;
    transform: translateX(10px);
  }
  
  &:hover::before {
    width: 30px;
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('ignition');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['ignition', 'driver-seat', 'test-bench', 'garage', 'blueprint', 'pitstop'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const navLinks = [
    { name: "Driver's Seat", href: '#driver-seat', id: 'driver-seat' },
    { name: 'Test Bench', href: '#test-bench', id: 'test-bench' },
    { name: 'Garage', href: '#garage', id: 'garage' },
    { name: 'Blueprint', href: '#blueprint', id: 'blueprint' },
    { name: 'Pitstop', href: '#pitstop', id: 'pitstop' },
  ];

  const mobileNavVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    exit: { x: '100%', transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.5 } })
  };

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    openTop: { rotate: 45, y: 6 },
    openBottom: { rotate: -45, y: -6 }
  };

  return (
    <>
      <Nav $scrolled={scrolled} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <LogoSection>
          <LogoImage 
            src={profileImage}
            alt="Portfolio Logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <LogoText $showOnMobile={scrolled}>The Code Garage</LogoText>
        </LogoSection>

        <DesktopNav>
          {navLinks.map((link, index) => (
            <NavPill
              key={link.name}
              href={link.href}
              $active={activeSection === link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </NavPill>
          ))}
        </DesktopNav>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.9 }}>
          <MenuLine variants={lineVariants} animate={isOpen ? 'openTop' : 'closed'} />
          <MenuLine style={{ margin: '4px 0' }} animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
          <MenuLine variants={lineVariants} animate={isOpen ? 'openBottom' : 'closed'} />
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} />
            <MobileNav variants={mobileNavVariants} initial="hidden" animate="visible" exit="exit">
              {navLinks.map((link, index) => (
                <MobileNavLink key={link.name} href={link.href} onClick={() => setIsOpen(false)} custom={index} variants={linkVariants} initial="hidden" animate="visible">
                  {link.name}
                </MobileNavLink>
              ))}
            </MobileNav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
