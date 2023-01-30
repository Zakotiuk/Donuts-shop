import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import './menu_btn_catalog.css'

let lastActive = 0;
const Menu_btn_catalog = ({item, index, setSortQueryFunc}) =>{
    const btn = useRef(null);
    const lastBtn = useRef(null);
    const changeActive = () =>{
        //доопрацювати
        document.getElementById(lastActive).className = "non_active";
        console.log(document.getElementById(lastActive).classList);
        btn.current.className = "menu_btn_cat";
        lastActive =  btn.current.id;
        // end доопрацювати
        setUserSort();
    }
    const setUserSort = () =>{
        setSortQueryFunc(btn.current.innerText.toLowerCase());
    }
    return(
        <div>
            <div ref={btn} id={index} onClick={()=> changeActive()} className={index == 0 ? "menu_btn_cat" : "non_active"}>
                    <img src={item.img}/>
                    <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
            </div>
        </div>
    )
}

export default Menu_btn_catalog;