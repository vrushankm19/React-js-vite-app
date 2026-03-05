import React, { useEffect } from "react";

export function useCount(initialValue: number = 0) {
  const [count, setCount] = React.useState(initialValue);
  useEffect(() => {
    if(localStorage.getItem("count")) {
      setCount(parseInt(localStorage.getItem("count") || "0", 10));
    }
}, []);
  const increment = () => {
    setCount(count + 1)
    localStorage.setItem("count", (count + 1).toString());
};
  const decrement = () => {
    setCount(count - 1);
    localStorage.setItem("count", (count - 1).toString());
  };
    return { count, increment, decrement };
}