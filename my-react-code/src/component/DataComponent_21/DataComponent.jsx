// custom hook 

import React from 'react';
import useCounter from './useCounter';

// Example usage of the custom hook
const MyComponent = () => {
  // Use the custom hook to manage a counter with an initial value of 5
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default MyComponent;
