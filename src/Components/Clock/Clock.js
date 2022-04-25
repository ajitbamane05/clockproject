import React from 'react'
import './clock.css'

export default function Clock(props) {
    
  return (
    <div>
        
        <div className="cointainer">
            <div className="facevalus">
                <span className="facevalue">{props.face}</span>
            </div>
            
            <div className="clocktype">
                <span className="clocktype">{props.clocktype}</span>
            </div>
            
        </div>

    </div>
  )
}
