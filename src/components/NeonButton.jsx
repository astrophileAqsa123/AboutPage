import React from 'react';
import './NeonButton.css';

function NeonButton({ children, onClick, type = "button" }) {
  return (
    <button className="neon-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default NeonButton;
