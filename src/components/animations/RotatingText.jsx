import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const RotatingWrapper = styled.span`
  display: inline-block;
  min-width: 150px;
  text-align: left;
`;

export const RotatingText = ({ words, interval = 2000, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <RotatingWrapper className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </RotatingWrapper>
  );
};
