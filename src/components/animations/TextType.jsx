import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypedText = styled.span`
  display: inline-block;
  
  &::after {
    content: '|';
    display: inline-block;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

export const TextType = ({ text, speed = 100, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <TypedText className={className}>{displayText}</TypedText>;
};
