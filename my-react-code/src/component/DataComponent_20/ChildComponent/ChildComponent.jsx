import React,{ useContext } from 'react';
import { FistData,SecondData } from '../DataComponent';

const ChildComponent = () => {

    const fname = useContext(FistData);
    const lname = useContext(SecondData);
  return (
    <div>
        <p>ChildComponent 3</p>
        <h1>My name is <u>{fname}</u> <u>{lname}</u></h1>
    </div>
  )
}

export default ChildComponent