import React,{ useState } from 'react'
import useCount from './useCount'

const DataComponent = () => {
    
    const [count,increment,decrement,reset] = useCount();

    return (
        <div className='container'>
            <center>
                <h1>Count : {count}</h1>
                <button onClick={increment} className='btn btn-primary'>Increment</button>
                <button onClick={decrement} className='btn btn-primary'>Decremenr</button>
                <button onClick={reset} className='btn btn-primary'>Reset</button>
            </center>
        </div>
    )
}

export default DataComponent