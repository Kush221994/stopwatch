import * as React from "react";
import Timer from "../timer/Timer";
import Buttons from "../buttons/Buttons";

const INTERVAL = 10;

const Stopwatch = () => {
  const [counter, setCounter] = React.useState(0);
  const interval = React.useRef();

  const start = () => {
    interval.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + INTERVAL);
    }, INTERVAL);
  };

  const stop = () => {
    clearInterval(interval.current);
  };

  const reset = () => {
    clearInterval(interval.current);
    setCounter(0);
  };

  console.log(counter);
  return (
    <>
      <div className="swatch">
        <Timer value={counter}/>
        <Buttons 
            handleStart={start}
            handleStop={stop}
            handleReset={reset}
        />
      </div>
    </>
  );
};

export default Stopwatch;
