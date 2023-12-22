import React,{ useState } from "react";
import ChildComponent from "./ChildComponent/ChildComponent";


const DataComponent = (props) => {

    const [showData, setShowData] = useState(true);

    const toggleData = () => {
        setShowData(!showData);
        console.log("toggleData");
    }


    return (
        <div>
            <h1>DataComponent</h1>
            { showData && <ChildComponent /> }
            <button onClick={ toggleData }>Click to Hide ChildComponent</button>
        </div>
    )
}

export default DataComponent;