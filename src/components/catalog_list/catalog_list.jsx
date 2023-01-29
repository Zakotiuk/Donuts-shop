import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Catalog_item from "../catalog_item/catalog_item";
import DonutsServices from "../services/DonutsServices";
import './catalog_list.css'

const Catalog_list = ({donuts}) =>{
    // const [donuts, setDonuts] = useState([]);
    // useEffect(() => {
    //     async function fetchData(){
    //         const response = await DonutsServices.getDonuts();
    //         setDonuts(response);
    //     };
    //     fetchData();
    // }, []);
    
    return(
        <div className="catalog_list_div">
            {
                donuts.map((item, index) => 
                    <Catalog_item key={index} info={item}></Catalog_item>
                )
            }
        </div>
    )
}

export default Catalog_list;