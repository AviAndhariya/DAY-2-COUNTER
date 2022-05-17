import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Counter App </h1>
      <div className="counter">
        {count % 2 == 0 ? (
          <h1 style={{ color: "green" }}>{count}</h1>
        ) : (
          <h1 style={{ color: "red" }}>{count}</h1>
        )}
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
    </div>
  );
};

export default Counter;
