import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { realTimeData } from '../../store/counterSlice';

const CounterComponent = () => {
    const newValue2 = useSelector((state) => state.counter.inputValue);
    // console.log(newValue2);
    const dispatch = useDispatch();
    
    const updateData = (e) => {
        const newValueLocal = e.target.value;
        dispatch(realTimeData({inputValue: newValueLocal}))
        console.log(dispatch(realTimeData({inputValue: newValueLocal})));
    }


    return (
        <div>
            <h1>{newValue2}</h1>
            <input type="text" value={newValue2} onChange={updateData} />
        </div>
    )
}

export default CounterComponent