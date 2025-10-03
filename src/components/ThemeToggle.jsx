import React from 'react';
import styled from 'styled-components';

// A container to hold the two buttons together
const ToggleGroup = styled.div`
  display: flex;
  gap: 0.5rem; /* A small gap between the buttons */
  margin-left: 2rem; /* Spacing from the other nav links */

  @media (max-width: 768px) {
    display: none; /* Still hidden on mobile to keep the menu clean */
  }
`;

// The new button style. It will change appearance if it is the active theme.
const ThemeButton = styled.button`
  padding: 0.5rem 1rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;

  /* Style for the active theme button */
  background-color: ${props => props.$active ? 'var(--accent-blue)' : 'transparent'};
  color: ${props => props.$active ? 'var(--primary-black)' : 'var(--accent-blue)'};
  border: 1px solid var(--accent-blue);

  &:hover {
    background-color: var(--accent-blue);
    color: var(--primary-black);
  }
`;

const ThemeToggle = ({ currentTheme, setTheme }) => {
  return (
    <ToggleGroup>
      <ThemeButton
        $active={currentTheme === 'classic'}
        onClick={() => setTheme('classic')}
      >
        Classic
      </ThemeButton>
      <ThemeButton
        $active={currentTheme === 'digitalTwin'}
        onClick={() => setTheme('digitalTwin')}
      >
        Digital
      </ThemeButton>
    </ToggleGroup>
  );
};

export default ThemeToggle;
