// To render ChildComponent conditionally using Short Circuit Evaluation in React and check what happens when we unmount ChildComponent

import React,{ useState } from "react";
import ChildComponent from "./ChildComponent/ChildComponent";


const DataComponent = (props) => {

    const [showData, setShowData] = useState(true);

    const toggleData = () => {
        // this will toggle the value of showData
        setShowData(!showData);
        console.log("toggleData");
    }


    return (
        <div className="container">
            <h1>DataComponent</h1>
            {/* Using Short Circuit Evaluation in React using && and || operator */}
            { showData && <ChildComponent /> }
            <button onClick={ toggleData }>Click to Hide ChildComponent</button>
        </div>
    )
}

export default DataComponent;