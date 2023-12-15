// Two-way Binding in React provide good example
import React, { useState } from 'react';

// Child component that receives props for two-way binding
const ChildComponent = ({ inputValue, onInputChange }) => {
  return (
    <div>
      {/* Input field that receives value and onChange from props */}
      <input type="text" value={inputValue} onChange={onInputChange} />

      {/* Display child component state */}
      <p>Child Component State: {inputValue}</p>
    </div>
  );
};

export default ChildComponent;
