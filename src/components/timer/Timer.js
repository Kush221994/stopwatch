import React from "react";

const Timer=({ value })=>{
    return (
        <>
         
            <div>
            <div>
              <span className="digit">{Math.floor(Math.floor(value/1000)/60)}</span>
              <span className="digit">min. </span>
              <span className="digit">{Math.floor(value/1000)}</span>
              <span className="digit">sec. </span>
              <span className="digit">{value}</span>
              <span className="digit">msec</span>
              </div>
            </div>
        
            
        </>
    )
}

export default Timer;
