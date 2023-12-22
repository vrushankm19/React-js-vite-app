// Using useEffect to update the document title

import React,{ useState, useEffect } from 'react'

const DataComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("I am Inside useEffect");
        if(count >= 1){
            document.title = `Chats ${count} times`
        } else {
            document.title = `Chats`
        }
    },[count]);
    
    const increment = () => {
        setCount(count + 1);
        console.log("I am Inside Increment");
    }
    console.log("I am Outside useEffect");
    return (
        <div className='container'>
            <h1>DataComponent { count }</h1>
            <button className='btn btn-primary' onClick={increment}>Click To Count</button>
        </div>
    )
}

export default DataComponent