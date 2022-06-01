import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 100);
  });

 

  return (
    <>
      <div className="container">
        <div className="timer">
          <h1 className="time">
          <div className="timetext">
          <span className="digit">00</span>
            <span className="digit">Hr</span>
            <span className="digit">00</span>
            <span className="digit">Min</span>
            <span className="digit">00</span>
            <span className="digit">Sec</span>
            <div className="digit">{count}</div>
          </div>
          </h1>
          
          <div className="buttoncontained">
            <button className="btn">Start</button>
            <button className="btn" value="stop">
              Stop
            </button>
            <button className="btn">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
