import React from 'react'
import './stopwatch.css'
import { useState } from 'react';
import Button from '../Buttons/Button';

export default function Stopwatch(props) {

  const [counterValue, setValue]= useState(0);
  const [timerId, setTimerId]=useState(0);

  const start= function(){

    setTimerId(setInterval(()=>{setValue((counterValue)=>counterValue+1);},1000));

    console.log("Clicked", counterValue);

  }
  const pause= function(){
   clearInterval(timerId);
   setTimerId(0);
   
  }
  const reset= function(){
    pause();
    setValue(0);
    
    console.log("reset");
   
  }
  return (
    <div>
          <div className="cointainer1">
            <div className="facevalus1">
                <span className="facevalue1">{props.face}</span>
            </div>

            <div>
                <button className="circle">
                  {parseInt(counterValue/3600)}:{parseInt((counterValue/60)%60)}:{counterValue%60}
                </button>
            </div>

           
            
            {/* <div className="clocktype1">
                <span className="clocktype1"></span>
            </div> */}
            <Button name="Start" click={start}/>
            <Button name="Pause" click={pause}/>
            <Button name="Reset" click={reset}/>
        </div>
    </div>
  )
}
