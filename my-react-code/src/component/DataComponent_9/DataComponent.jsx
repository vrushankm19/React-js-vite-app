// Click on button to toggle data between 'Hello World' and 'Hello Bharat' using useState hook

import React,{ useState } from 'react';

const DataComponent = () => {
    const [data, setData] = useState('Hello World');

    const toggleData = () => {
        if(data === 'Hello World'){
            setData('Hello Bharat');
        }else{
            setData('Hello World');
        }
    } 


    return(
        <div className='container'>
            <h1>{data}</h1>
            <button onClick={ toggleData }>Toggle {data}</button>
        </div>
    )
}

export default DataComponent;