import React from "react";
import { useState } from "react";
const Way = () => {
  const stateResult = useState(50);
  const oneStap = stateResult[0];
  const twoStep = stateResult[1];
  function plus() {
    twoStep(oneStap + 1);
  }
  function minus() {
    twoStep(oneStap - 1);
  }
  function reset() {
    twoStep(50);
  }

  return (
    <>
      <p>The Way is {oneStap} staps </p>
      <button onClick={plus}>UP</button>
      <button onClick={minus}>DO</button>
      <button onClick={reset}>RE</button>
    </>
  );
};

export default Way;
