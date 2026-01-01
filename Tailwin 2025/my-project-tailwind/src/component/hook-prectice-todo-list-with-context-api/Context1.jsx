import React from "react";
import Context2 from "./Context2";

const Context1 = () => {
    return (
        <>
        <div className="border border-red-600 p-5">
            <h1>Context1</h1>
            <Context2 />
        </div>
        </>
    );
}

export default Context1;