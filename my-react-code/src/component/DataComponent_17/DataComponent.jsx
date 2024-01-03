// How use React icons in component. Using { npm install react-icons }
// https://react-icons.github.io/react-icons/

import React from 'react'
import { FaCamera } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { BsBrilliance } from "react-icons/bs";

const DataComponent = () => {
  return (
    <div className='container'>
        <FaCamera />
        <FcApproval />  
        <BsBrilliance />
        <h1>hello world</h1>
    </div>
    
  )
}

export default DataComponent