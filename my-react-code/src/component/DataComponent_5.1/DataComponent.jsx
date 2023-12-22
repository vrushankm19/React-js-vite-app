// Send Data to Parent Component and real time update Parent Component Data from Child Component in React using Multiple(Individual) useState

import React,{ useState } from "react";

import ParentComponent from "./ParentComponent/ParentComponent.jsx";

const UseStateProgram = () => {   

  const [input, setInput] = useState("");

  const perentData = (data) => {
    // console.log("Main File Get ParentComponent Data :" + " " + data);
    setInput(data);
  }
  
  return (
    <div>
      <p><b>Main Component</b> : { input }</p>
      <ParentComponent perentDataGet={perentData} />
    </div>
  );
}

export default UseStateProgram;