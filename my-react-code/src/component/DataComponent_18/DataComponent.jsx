  // Using useReducer hook to create a simple counter with increment and decrement buttons

  import React, { useReducer } from 'react';
  import Button from './Button/Button';

  // Reducer function
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  // Component using useReducer
  const DataComponent = () => {
    // useReducer returns the current state and a dispatch function
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    // Event handlers that dispatch actions
    const increment = () => {
      dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
      dispatch({ type: 'DECREMENT' });
    };

    return (
      <div className='container'>
        <p>Count: {state.count}</p>
        
        <Button onClick={increment} label="Increment" />
        <Button onClick={decrement} label="Decrement" />
      </div>
    );
  };

  export default DataComponent;
