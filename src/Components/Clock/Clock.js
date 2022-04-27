import React from 'react'
import './clock.css'

export default function Clock(props) {
    
  return (
    <div>
        
        <div className="cointainer">
            <div className="facevalus">
                <span className="facevalue"><h1 >{props.face}</h1></span>
            </div>
            
            <div className="clocktype">
                <span className="clocktype"><h1 className="facename">{props.clocktype}</h1></span>
            </div>
            
        </div>

    </div>
  )
}
