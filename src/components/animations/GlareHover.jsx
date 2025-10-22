import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const GlareWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const GlareEffect = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

export const GlareHover = ({ children, className = '' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <GlareWrapper
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      {isHovering && (
        <GlareEffect
          style={{
            left: position.x - 100,
            top: position.y - 100
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </GlareWrapper>
  );
};
