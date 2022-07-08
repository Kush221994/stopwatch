import * as React from "react";

import Timer from "../timer/Timer";
import Button from "../buttons/button";
import Lap from "../lap/lap";

import StartIcon from "../../assets/start.png";
import LapIcon from "../../assets/lap.jpg";
import StopIcon from "../../assets/stop.png";
import ResetIcon from "../../assets/reset.png";

const INTERVAL = 10;

const Stopwatch = () => {
  const [counter, setCounter] = React.useState(0);
  const [laps, setLaps] = React.useState([]);
  const [inProgress, setInProgress] = React.useState(false);

  const interval = React.useRef();

  const start = () => {
    setInProgress(true);
    interval.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + INTERVAL);
    }, INTERVAL);
  };

  const lap = () => {
    setLaps((prevState) => [counter, ...prevState]);
  };

  const pause = () => {
    setInProgress(false);
    clearInterval(interval.current);
  };

  const reset = () => {
    setInProgress(false);
    clearInterval(interval.current);
    setCounter(0);
    setLaps([]);
  };

  return (
    <div className="swatch">
      <Timer value={counter} />
      <div className="buttonsWrapper">
        <Button
          onClick={inProgress ? pause : start}
          icon={inProgress ? StopIcon : StartIcon}
        >
          {inProgress ? "Pause" : "Start"}
        </Button>
        <Button onClick={lap} icon={LapIcon}>
          Lap
        </Button>
        <Button onClick={reset} icon={ResetIcon}>
          Reset
        </Button>
      </div>
      <div className="lapsWrapper">
        {laps.map((lap, i) => (
          <Lap key={i} value={lap} index={laps.length - i} />
        ))}
      </div>
    </div>
  );
};

export default Stopwatch;
