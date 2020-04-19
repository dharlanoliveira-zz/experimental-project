import React from 'react';
import './Button.css';

const Button = ({ children, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    data-testid='button'
    className={`button ${disabled ? 'button--disabled' : ''}`}
  >
    {children}
  </button>
);

export default Button;