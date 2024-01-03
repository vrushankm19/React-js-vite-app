import { useState } from 'react';

// Custom hook to manage a counter
const useCounter = (initialValue = 0) => {
  // State to store the counter value
  const [count, setCount] = useState(initialValue);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCount(initialValue);
  };

  // Return the current count value and the functions to manipulate it
  return { count, increment, decrement, reset };
};

export default useCounter;
