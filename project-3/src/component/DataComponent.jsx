import React from 'react';

function DataComponent(props) {
  // Check if showData is true, and render data if it is true
  if (props.showData) {
    return (
      <div>
        {/* Render your data here */}
        <p>This is the data you want to show.</p>
      </div>
    );
  } else {
    // Optionally, you can return null to render nothing when showData is false
    return null;
  }
}

export default DataComponent;
