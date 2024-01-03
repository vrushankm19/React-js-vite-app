// Button.js
import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
