// useRef Hook foucs on input field when the component mounts

import React, { useRef, useEffect } from 'react';

const DataComponent = () => {
  // Creating a ref
  const inputRef = useRef(null);

  // useEffect to focus on the input when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []); // empty dependency array ensures this effect runs only once after the initial render

  // Event handler function that uses the ref to get the input value
  const handleButtonClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div className='container'>
      {/* Input element with the ref */}
      <input className='form-control' ref={inputRef} type="text" placeholder="Type something" />

      {/* Button that triggers the event handler */}
      <button className='btn btn-primary' onClick={handleButtonClick}>Alert Input Value</button>
    </div>
  );
};

export default DataComponent;

