import React from "react";
import { useState } from "react";

const Count = () => {
  const stateResult = useState(0);
  const count = stateResult[0];
  const setCount = stateResult[1];
  function plus() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <p>The count is {count} </p>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Count;
