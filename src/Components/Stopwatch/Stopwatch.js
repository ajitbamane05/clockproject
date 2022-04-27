import React, { useEffect } from 'react'
import './stopwatch.css'
import { useState } from 'react';
import Button from '../Buttons/Button';

export default function Stopwatch(props) {

  const [time, setTime]= useState(0);
  const [timerOn, setTimerOn]=useState(false);

  useEffect( ()=>{

    let interval = null;
    timerOn ?
    (interval=setInterval(()=>{setTime(counterValue=>counterValue+10)},10)):
    (clearInterval(interval));
    return ()=> clearInterval(interval)
     
  },[timerOn])

  // const start= function(){

  //   setTimerId(setInterval(()=>{setValue((counterValue)=>counterValue+1);},1000));

  //   console.log("Clicked", counterValue);

  // }
  const start= ()=>{
    setTimerOn(true);
   }
  const pause= ()=>{
    setTimerOn(false);
  }
  const reset= ()=>{
    setTimerOn(false);
    setTime(0);
   
  }
  return (
    <div>
          <div className="cointainer1">
            <div className="facevalus1">
                <span><h1>{props.face}</h1></span>
                
            </div>
            <div className="facevalus2">
               <Button className="reset" name="Reset" click={reset}/>
            </div>
            
            
            <div >
                <button className="circle">
                  <h1 className="facename">
                    {/* {parseInt(counterValue/3600)}:{parseInt((counterValue/60)%60)}:{counterValue%60} */}
                    <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
                    <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
                    <span>{("0"+((time/10)%100)).slice(-2)}</span>
                    {/* <span>{time}</span> */}
                  </h1>
                </button>
            </div>
            <div className="startb">
              { !timerOn &&(
               <Button className="start" name="Start" click={start}/>
              )}
               {timerOn &&(
                 <Button className="pause" name="Pause" click={pause}/>
               )}

            </div> 
           
            
           
            
            {/* <div className="clocktype1">
                <span className="clocktype1"></span>
            </div> */}
            
            {/* <Button name="Pause" click={pause}/> */}
            
            
        </div>
    </div>
  )
}
