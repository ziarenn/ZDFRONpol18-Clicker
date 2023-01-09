import { useState } from "react";

const GreetAndGenerate = () => {
  const [message, setMessage] = useState<string>("");
  const greet = () => {
    setMessage(`Hello! Here's your random number: ${Math.random().toFixed(2)}`);
  };

  return (
    <div>
      <button onClick={greet}>Hello!</button>
      <h3>{message}</h3>
    </div>
  );
};

export default GreetAndGenerate;
