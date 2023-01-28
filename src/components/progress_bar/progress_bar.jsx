import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './progress_bar.css'

const Progress_bar = ({click, click2, click3}) =>{ 
    return(
        <div className="progress_bar_div">
            <div className="start_circ circ">{click === true ? "✓" : "1"}</div>
            <hr color="black" className={click == true ? "myColorHr" : ""}/>
            <div className={click !== true ? "avr_circ circ" : "start_circ circ"}>{click2 === true ? "✓" : "2"}</div>
            <hr color="black" className={click2 == true ? "myColorHr" : "sec_hr"}/>
            <div className={click2 !== true ? "avr_circ circ" : "start_circ circ"}>{click3 === true ? "✓" : "3"}</div>
        </div>
    )
}

export default Progress_bar;