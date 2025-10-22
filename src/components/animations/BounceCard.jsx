import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const BounceCard = ({ children, className = '' }) => {
  return (
    <CardWrapper
      className={className}
      whileHover={{ 
        scale: 1.05,
        rotateZ: 1,
        transition: { 
          type: 'spring', 
          stiffness: 300, 
          damping: 10 
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </CardWrapper>
  );
};
