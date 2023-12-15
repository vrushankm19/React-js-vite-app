// Send Data to Parent Component

import React from "react";

import ParentComponent from "./ParentComponent/ParentComponent.jsx";

const UseStateProgram = () => {
  const perentData = (data) => {
    console.log("Main File Get ParentComponent Data :" + " " + data);
  }
  
  return (
    <div>
      <h1>useState</h1>
      <ParentComponent perentDataGet={perentData} />
    </div>
  );
}

export default UseStateProgram;