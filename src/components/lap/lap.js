const Lap = ({ index, value }) => {
  return (
    <div className="lapWrapper">
      <div>{index}.</div>
      <div className="lap">
        <div>
          {("00" + Math.floor(Math.floor(value / (1000 * 60)))).slice(-2)}
        </div>
        <div>:</div>
        <div>{("00" + Math.floor(value / 1000)).slice(-2)}</div>
        <div>:</div>
        <div>{("00" + Math.floor(value / 10)).slice(-2)}</div>
      </div>
    </div>
  );
};

export default Lap;
