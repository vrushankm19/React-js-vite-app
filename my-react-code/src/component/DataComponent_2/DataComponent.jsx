// Two Way Data Binding with useState

// Import necessary dependencies from React
import React, { useState } from 'react';

// Functional component definition
function UseStateProgram() {
    // State variable 'myName' and its setter function 'setMyName'
    const [myName, setMyName] = useState("New Data");
    
    // State variable 'constName' and its setter function 'setConstName'
    const [constName, setConstName] = useState(myName);
    
    // Event handler function to update 'constName' state
    function countMain(event) {
        setConstName(event);
    }

    // Event handler function to update 'myName' state and trigger 'countMain'
    function iChange(event){
        setMyName(event.target.value);
        countMain(event.target.value);
    }
    
    // Render the component with JSX
    return(
        <div>
            {/* Display the value of 'constName' in an h1 element */}
            <h1>{constName}</h1>
            {/* Input field with value controlled by 'myName' and onChange event */}
            <input type="text" value={myName} onChange={iChange} />
            {/* Button triggering the 'countMain' function */}
            <button onClick={countMain}>Click Me</button>
        </div>
    );
}

// Export the component as the default export
export default UseStateProgram;
