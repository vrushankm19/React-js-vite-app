// Send Data to Parent Component and real time update Parent Component Data
// use single useState() hook

import React,{ useState } from "react";

import ParentComponent from "./ParentComponent/ParentComponent.jsx";

const UseStateProgram = () => {   

  const [input, setInput] = useState("");

  return (
    <div>
      <p><b>Main Component</b> : { input }</p>
      <ParentComponent inputData={input} perentDataGet={setInput} />
    </div>
  );
}

export default UseStateProgram;