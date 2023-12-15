import React,{ useState } from "react";

import ChildComponent from "../ChildComponent/ChildComponent.jsx";

const ParentComponent = (props) => {

  const [input, setInput] = useState("");

  const childData = (data) => {
    // console.log("ParentComponent Get ChildComponent Data :" + " " + data);
    props.perentDataGet(data);
    setInput(data);
  }

  return (
    <div>
      <p>Hi <b>ParentComponent Here...</b> { input }</p>
      <ChildComponent dataGet={childData} />
    </div>
  );
}

export default ParentComponent;