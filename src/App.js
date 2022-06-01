import * as React from "react";

const INTERVAL = 10;

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const interval = React.useRef();

  const handleStart = () => {
    interval.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + INTERVAL);
    }, INTERVAL);
  };

  const handleStop = () => {
    clearInterval(interval.current);
  };

  const handleReset = () => {
    clearInterval(interval.current);
    setCounter(0);
  };

  console.log(counter);

  // counter --> milli seconds
  // minutes => (counter / 60000) / 60
  // seconds => (counter / 60000)

  // slice values before showing them (value.slice(-2))
  // calculation ==> Math.ceil / Math.floor

  return (
    <>
      <div className="container">
        <div className="timer">
          <h1 className="time">
            <div className="timetext">
              <span className="digit">00</span>
              <span className="digit">m. </span>
              <span className="digit">00</span>
              <span className="digit">s. </span>
              <div className="digit">00</div>
              <span className="digit">ms</span>
            </div>
          </h1>

          <div className="buttoncontained">
            <button className="btn" onClick={handleStart}>
              Start
            </button>
            <button className="btn" value="stop" onClick={handleStop}>
              Stop
            </button>
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
