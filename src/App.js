
import './App.css';
import { useState} from 'react'
import Button from './Components/Buttons/Button';
import Clock from './Components/Clock/Clock';
import Stopwatch from './Components/Stopwatch/Stopwatch';
import React from 'react';
// import Stopwatch from './Components/Stopwatch/stopwatch';
function App() {
     let time = new Date().toLocaleTimeString();
     const [ timer, setTimer ] = useState(time);
     const updateTime = ()=> {
            time = new Date().toLocaleTimeString();
             setTimer(time);
     }
     setInterval(updateTime,1000);
     const [clock,setClock]=useState(true);
     
     const clock1 =()=>{
      setClock(true);
    }
     const watch =()=>{
       setClock(false);
     }

  return (
    <div className="App-header">
      { clock ?
      <Clock face="Clock" clocktype={timer} />:
       
      <Stopwatch className="stopwatch" face="Stop Watch"/>
      }
      <br/>
       <div className="buttons">
          <div>
            <Button className="clock" name="Clock" click={clock1}/>
          </div>
          <div>
          <Button className="clock" name="Stop Watch" click={watch} />
          </div>
       </div>
    </div>
  );
};

export default App;
