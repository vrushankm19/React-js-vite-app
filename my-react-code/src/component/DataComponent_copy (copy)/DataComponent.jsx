// Using the useState hook to create a simple counter

// Import necessary dependencies from React
import React, { useState } from 'react';

// Functional component definition
const UseStateProgram = () => {
    // State variable 'count' and its setter function 'setCount'
    let [count, setCount] = useState(0);

    // Event handler function to update 'count' state
    const countCall = () => {
        setCount(count + 1);
    }

    // Render the component with JSX
    return (
        <div>
            {/* Display the value of 'count' in an h1 element */}
            <h1>{count}</h1>
            {/* Button triggering the 'countCall' function */}
            <button onClick={countCall}>Click Me</button>
        </div>
    );
}

// Export the component as the default export
export default UseStateProgram;
