import React from "react";

interface ManipulatorProps {
  setCount: (value: number) => void;
  count: number;
}

const Manipulator = ({ setCount, count }: ManipulatorProps) => {
  
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default Manipulator;
