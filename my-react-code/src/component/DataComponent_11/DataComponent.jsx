// Short Circuit Evaluation in React using && and || operator

import React,{ useState } from 'react';
import './DataComponent.scss';

const DataComponent = () => {
    const [name, setName] = useState('Left')

    return (
        <div className='containers'>
            <h1>UseState Program</h1>
            <p><b>1</b> { name || "Right" }</p>
            <p><b>2</b> { name && "Right" }</p>
        </div>
    )
}

export default DataComponent