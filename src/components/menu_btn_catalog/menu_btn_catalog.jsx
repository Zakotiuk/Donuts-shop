import React from "react";
import './menu_btn_catalog.css'
const Menu_btn_catalog = ({isActive, item}) =>{
    return(
        <div>
            <div className={isActive ? "menu_btn_cat" : "non_active"}>
                    <img src={item.img}/>
                    <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
            </div>
        </div>
    )
}

export default Menu_btn_catalog;