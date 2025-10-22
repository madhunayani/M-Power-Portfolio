import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const shine = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const ShinyWrapper = styled(motion.span)`
  background: linear-gradient(
    90deg,
    var(--primary-white) 30%,
    var(--accent-blue) 50%,
    var(--primary-white) 70%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shine} 3s linear infinite;
  display: inline-block;
`;

export const ShinyText = ({ text, className = '' }) => {
  return (
    <ShinyWrapper className={className}>
      {text}
    </ShinyWrapper>
  );
};
