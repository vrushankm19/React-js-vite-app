import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/counterSlice';

const ReduxTodos = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(increment());
    }

    return (
        <div>
            <h1>ReduxTodos { count }</h1>
            <button onClick={handleIncrement}>IN</button>
            <button onClick={handleDecrement}>De</button>
        </div> 
    )
}

export default ReduxTodos