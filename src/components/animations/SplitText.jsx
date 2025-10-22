import { motion } from 'framer-motion';
import React from 'react';

export const SplitText = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  type = 'chars' // 'chars', 'words', or 'lines'
}) => {
  const items = type === 'chars' ? text.split('') : text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration / items.length, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {items.map((item, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: 'inline-block', marginRight: type === 'chars' ? '0' : '0.25em' }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.div>
  );
};
