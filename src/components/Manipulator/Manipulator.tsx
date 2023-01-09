import React from "react";

interface ManipulatorProps {
  setCount: (value: number) => void;
  count: number;
}

const Manipulator = ({ count, setCount }: ManipulatorProps) => {
  // count
  // setCount()
  return (
    <div>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default Manipulator;
