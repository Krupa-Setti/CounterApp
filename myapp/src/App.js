import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [count, setState] = useState(0);

  const onIncrement = () => {
    setState(count + 3);
  };

  const onDecrement = () => {
    setState(count - 3);
  };

  return (
    <center>
      <h1>Counter</h1>
      <center>
        <button className="btn" onClick={onDecrement}>
          _
        </button>
        <p>{count}</p>
        <button className="btn" onClick={onIncrement}>
          +
        </button>
      </center>
    </center>
  );
};

export default App;
