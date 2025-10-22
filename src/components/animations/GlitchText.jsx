import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const glitch = keyframes`
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
`;

const GlitchWrapper = styled(motion.span)`
  position: relative;
  display: inline-block;
  
  &:hover {
    animation: ${glitch} 0.3s infinite;
  }
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  
  &:hover::before {
    color: #ff00ff;
    animation: ${glitch} 0.3s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-2px, -2px);
    opacity: 0.8;
  }
  
  &:hover::after {
    color: #00ffff;
    animation: ${glitch} 0.3s infinite reverse;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    transform: translate(2px, 2px);
    opacity: 0.8;
  }
`;

export const GlitchText = ({ text, className = '' }) => {
  return (
    <GlitchWrapper 
      data-text={text}
      className={className}
      whileHover={{ scale: 1.02 }}
    >
      {text}
    </GlitchWrapper>
  );
};
