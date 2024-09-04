import { useState } from "react";

export default function SecondComponent() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  function handleIncrementBy3() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrementBy3}>Increment by 3</button>
    </div>
  );
}
