import React from "react";
import { useState } from "react";
import './menu_btn_catalog.css'
const Menu_btn_catalog = ({item}) =>{
    const [isActive, setIsActive] = useState([]);
    return(
        <div>
            <div onClick={()=> setIsActive(!isActive)} className={isActive ? "menu_btn_cat" : "non_active"}>
                    <img src={item.img}/>
                    <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
            </div>
        </div>
    )
}

export default Menu_btn_catalog;