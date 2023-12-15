import React from "react";

import ChildComponent from "../ChildComponent/ChildComponent.jsx";

const ParentComponent = (props) => {
  const childData = (data) => {
    console.log("ParentComponent Get ChildComponent Data :" + " " + data);
    props.perentDataGet(data);
  }

  return (
    <div>
      <h1>Hi ParentComponent Here...</h1>
      <ChildComponent dataGet={childData} />
    </div>
  );
}

export default ParentComponent;