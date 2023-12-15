import React,{ useState } from 'react';

const ChildComponent = (props) => { 

    const inputNewValues = (event) => {
        const newData = (event.target.value);
        props.dataGet(newData);
    }
    
    return (
        <div>
            <p>Hi <b>ChildComponent Here...</b> {props.childDtat} </p>
            <form >
                input: <input type="text" value={props.childDtat} onChange={inputNewValues} name="" id="" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ChildComponent;