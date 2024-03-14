import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const color = count > 0 ? "green" : count < 0 ? "red" : "black";

  return (
    <div className="container">
      <h1>Counter</h1>
      <span id="value" style={{ color }}>
        {count}
      </span>
      <div className="btn-group">
        <button className="btn" onClick={() => setCount(count - 1)}>
          DECREASE
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          RESET
        </button>
        <button className="btn" onClick={() => setCount(count + 1)}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
