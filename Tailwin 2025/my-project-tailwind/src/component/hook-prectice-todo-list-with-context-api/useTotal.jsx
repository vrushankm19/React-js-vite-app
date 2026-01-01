import React, {useReducer, useState} from "react";

const useTotal = () => {
  // const [count, setCount] = useState(0);
  // const minValues = 0;
  // const maxValues = 10;
  // const increase = () => {
  //     if (count < maxValues) setCount(count + 1);
  // }
  // const decrease = () => {
  //     if (count > minValues) setCount(count - 1);
  // }

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { countobj: state.countobj + 1 };
      case "DECREMENT":
        return { countobj: state.countobj - 1 };
    default : return state;
    }
  };
  const [state, dispatchCount] = useReducer(reducer, { countobj: 0 });
  const minValues = 0;
  const maxValues = 10;
  
  const increase = () => {
      if (state.countobj < maxValues) dispatchCount({ type: "INCREMENT" });
  }
  const decrease = () => {
      if (state.countobj > minValues) dispatchCount({ type: "DECREMENT" });
  }
  return { count: state.countobj, increase, decrease };
}

export default useTotal;