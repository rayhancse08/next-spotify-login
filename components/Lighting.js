// components/Lighting.js
import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Modify LightingWrapper to use a default color in case the prop is not passed
const LightingWrapper = styled.div`
  background-color: ${({ color }) => color || '#000'};  // Add default color if no prop
  transition: background-color 1s ease;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightingText = styled.h2`
  font-size: 1.8rem;
  color: white;
  text-align: center;
`;

const colors = ['#4a90e2', '#50e3c2', '#f5a623', '#d0021b', '#9013fe'];

const Lighting = () => {
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
    }, 3000);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <LightingWrapper color={currentColor}>
      <LightingText>Lighting Inspired by The Kid LAROI's "STAY"</LightingText>
    </LightingWrapper>
  );
};

export default Lighting;
