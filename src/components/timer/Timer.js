const Timer = ({ value }) => {
  return (
    <div>
      <span className="digit">
        {("00" + Math.floor(Math.floor(value / (1000 * 60)))).slice(-2)}
      </span>
      <span className="digit">min. </span>
      <span className="digit">
        {("00" + Math.floor(value / 1000)).slice(-2)}
      </span>
      <span className="digit">sec. </span>
      <span className="digit">{("00" + Math.floor(value / 10)).slice(-2)}</span>
      <span className="digit">msec</span>
    </div>
  );
};

export default Timer;
