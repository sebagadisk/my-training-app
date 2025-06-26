import React, { useState } from 'react';
import './colorbutton.css';

function ColorButton() {
  
  const [color, setColor] = useState('blue');

  const toggleColor = () => {
    setColor(prevColor => (prevColor === 'blue' ? 'green' : 'blue'));
  };

  return (
    <button 
      onClick={toggleColor}
      style={{ backgroundColor: color,}}
    >
      Click me!
    </button>
  );
}

export default ColorButton;