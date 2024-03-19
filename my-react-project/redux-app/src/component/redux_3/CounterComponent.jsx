import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateList } from '../../store/counterSlice';

const CounterComponent = () => {
    const newValue2 = useSelector((state) => state.counter.listData);
    const newValueList = useSelector((state) => state.counter.newData);
    // console.log(newValue2);
    const dispatch = useDispatch();
    
    const updateData = (e) => {
        const newValueLocal = e.target.value;
        dispatch(updateList({newValueList: newValueLocal}))
    }

    const addData = () =>{

    }


    return (
        <div className='container pt-5'>
            {/* <h1>{newValue2}</h1> */}
            <input type="text" value={newValue2} onChange={updateData} />
            <button className='' onChange={addData}>Add</button>
            {
                newValueList.map((e) => {
                    <div>
                        <p>{e}</p>
                    </div>
                })
            }
        </div>
    )
}

export default CounterComponent