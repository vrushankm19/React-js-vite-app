// Two-way Binding in React provide good example
import React, { useState } from 'react';

import ChildComponent from './ChildComponent/ChildComponent.jsx';

const DataComponent = () => {
  // Parent component state
  const [inputValue, setInputValue] = useState('');

  // Handler to update parent component state
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* Child component with input field */}
      <ChildComponent inputValue={inputValue} onInputChange={handleInputChange} />

      {/* Display parent component state */}
      <p>Parent Component State: {inputValue}</p>
    </div>
  );
};

export default DataComponent;
