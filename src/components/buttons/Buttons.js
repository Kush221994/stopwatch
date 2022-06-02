import React from "react";

const Buttons=({ handleStart, handleStop, handleReset })=>{
    return(
        <>
            <div>
            <div className="buttoncontained">
            <button className="btn" onClick={handleStart}>
              Start
            </button>
            <button className="btn" onClick={handleStop}>
              Stop
            </button>
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
            </div>
        </>
    )
}

export default Buttons;