import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: transparent;
  border: 1px solid var(--accent-blue);
  color: var(--accent-blue);
  padding: 0.5rem 1rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 20px;
  margin-left: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-blue);
    color: var(--primary-black);
  }

  @media (max-width: 768px) {
    display: none; /* Hides the button on mobile to keep the navbar clean */
  }
`;

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      Switch to {currentTheme === 'classic' ? 'Digital' : 'Classic'}
    </ToggleButton>
  );
};

export default ThemeToggle;
