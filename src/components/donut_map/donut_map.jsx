import React from "react";
import './donut_map.css';
import '../../main_styles.css'
import { useState } from "react";

const Donut_map = () =>{
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return(
        <div id="donut_map_div" className="donut_map_div">
            <div className="donut_map">
                <img className="map_img" src={require("../../images/map_img.jpg")}/>
                <img onClick={()=> {setOpen1(true); setOpen2(false); setOpen3(false)}} className="play_btn left" src="https://img.icons8.com/color-glass/500/000000/play-button-circled--v1.png"/>
                <img onClick={()=> {setOpen2(true); setOpen3(false); setOpen1(false)}} className="play_btn botom" src="https://img.icons8.com/color-glass/500/000000/play-button-circled--v1.png"/>
                <img onClick={()=> {setOpen3(true); setOpen2(false); setOpen1(false)}} className="play_btn right" src="https://img.icons8.com/color-glass/500/000000/play-button-circled--v1.png"/>
            </div>
            <div className="overley">
                <span className="title">The best donuts is</span>
            <div className={`info ${open1 ? "show" : "hide"}`}>
                <span className="text fnt_sz_30">Only natural ingrediants</span>
                <img src={require("../../images/natural_img.jpg")}/>
            </div>
            <div className={`info ${open2 ? "show" : "hide"}`}>
                <span className="text fnt_sz_30">Always sweet donuts</span>
                <img src={require("../../images/alw_sweet.jpg")}/>
            </div>
            <div className={`info ${open3 ? "show" : "hide"}`}>
                <span className="text fnt_sz_30">Only a unique taste</span>
                <img src={require("../../images/unq_taste.jpg")}/>
            </div>
            </div>
        </div>
    )
}

export default Donut_map;