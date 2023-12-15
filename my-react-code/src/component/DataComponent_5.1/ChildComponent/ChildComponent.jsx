import React,{ useState } from 'react';

const ChildComponent = (props) => {
    const [input, setInput] = useState("");

    const inputNewValues = (event) => {
        setInput(event.target.value);
        // props.childData(input);
        props.dataGet(input);
    }

    const childSubmit = (event) => {
        event.preventDefault();
        // props.dataGet(input);
    }
    
    return (
        <div>
            <p>Hi <b>ChildComponent Here...</b> input values:{input} </p>
            <form onSubmit={childSubmit}>
                input: <input type="text" value={input} onChange={inputNewValues} name="" id="" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ChildComponent;