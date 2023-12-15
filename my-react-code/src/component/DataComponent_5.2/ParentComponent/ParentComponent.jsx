import React,{ useState } from "react";

import ChildComponent from "../ChildComponent/ChildComponent.jsx";

const ParentComponent = (props) => {


  return (
    <div>
      <p>Hi <b>ParentComponent Here...</b> { props.inputData }</p>
      <ChildComponent childDtat={ props.inputData } dataGet={props.perentDataGet} />    
    </div>
  );
}

export default ParentComponent;