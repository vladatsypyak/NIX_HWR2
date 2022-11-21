import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from 'react';

function Clock(){
    const [time, setTime] = useState(new Date());
    const [timerOn, setTimerOn] = useState(true);
  const clickHandler=()=>{
        if(timerOn){
            setTimerOn(false)
        }
        else {
            setTimerOn(true)
        }
  } 
   useEffect(() => {
      let timer = null;
  
      if (timerOn) {
        timer = setInterval(() => {
          setTime(new Date());
        }, 1000);
      } else if (!timerOn) {
        clearInterval(timer);
      }
  
      return () => clearInterval(timer);
    }, [timerOn]);
  
    return (
      <div className="clock">
        <div className="time">
          {time.toLocaleTimeString()}
        </div>
            <button onClick={clickHandler}>{timerOn ? "stop": "start"}</button>
      </div>
    );
}
export default Clock