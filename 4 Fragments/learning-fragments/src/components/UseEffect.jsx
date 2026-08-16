import React, { useState } from "react";
import { useState, useEffect } from "react";

const useEffect = () => {
  const [counter, setCounter] = useState(0);

  document.title = counter;

  useEffect(() => {
    console.log("UseEffect is Running...!")
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>

    </>
  );
}


export default useEffect;