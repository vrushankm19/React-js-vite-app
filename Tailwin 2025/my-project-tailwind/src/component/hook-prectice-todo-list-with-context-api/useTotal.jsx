import { useState, useReducer, useMemo } from "react";

/* =====================================================
   🔹 Hook 1: useTotalState (useState practice)
===================================================== */
export const useTotalState = () => {
  const MIN = 0;
  const MAX = 10;

  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < MAX) {
      setCount((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (count > MIN) {
      setCount((prev) => prev - 1);
    }
  };

  return { count, increase, decrease };
};

/* =====================================================
   🔹 Hook 2: useTotalReducer (useReducer practice)
===================================================== */
const initialState = { value: 0 };

const totalReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { value: state.value + 1 };

    case "SUBTRACT":
      return { value: state.value - 1 };

    default:
      return state;
  }
};

export const useTotalReducer = () => {
  const MIN = 0;
  const MAX = 10;

  const expensiveResult = useMemo(() => {
    // Heavy calculation (sirf ek baar chalegi)
    console.log("Running heavy calculation...");

    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += 90000000;
    }

    // Result cache ho jata hai
    return total;
  }, []); // Empty array = no re-run on re-render

  const [state, dispatch] = useReducer(totalReducer, initialState);

  const increase = () => {
    if (state.value < MAX) {
      dispatch({ type: "ADD" });
    }
  };

  const decrease = () => {
    if (state.value > MIN) {
      dispatch({ type: "SUBTRACT" });
    }
  };

  return {
    count: state.value,
    increase,
    decrease,
  };
};

/* =====================================================
   🔹 Default Export (Choose ONE)
===================================================== */

// 👉 Jo practice karni ho usko default bana do
export default useTotalReducer;
// export default useTotalState;
