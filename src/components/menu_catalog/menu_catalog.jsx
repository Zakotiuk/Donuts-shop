import React from "react";
import Menu_btn_catalog from "../menu_btn_catalog/menu_btn_catalog";
import './menu_catalog.css';
import { useState } from "react";
import { useEffect } from "react";
import AditionalServices from "../services/AditionalServices";
const Menu_catalog = ({setUsersSearchQuery, setClickSearch}) =>{
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await AditionalServices.getCategories();
            setCategories(response);
        };
        fetchData();
    }, []);
    const setMyUsersSearchQuery = (query) =>{
        setUsersSearchQuery(query)
    }
    return(
        <div className="menu_catalog">
            <div className="head">
                <span className="fnt_sz_50 text">Welcome to our catalog of the best donuts ever!</span>
                <div className="right_part">
                    <input onChange={ e => setMyUsersSearchQuery(e.target.value)} placeholder="Enter here..." className="fnt_sz_20 input_search"/>
                    <div onClick={setClickSearch} className="btn">
                        <img src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/300/null/external-search-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png"/>
                    </div>
                    <div className="btn cart_btn">
                        <img src="https://img.icons8.com/carbon-copy/300/null/shopping-cart.png"/>                
                    </div>
                </div>
            </div>
            <div className="menu_catalog_btns">
                {
                    categories.map((item, index) => 
                        <Menu_btn_catalog key={index} item={item}></Menu_btn_catalog>
                    )
                }
            </div>
        </div>
    )
}

export default Menu_catalog;