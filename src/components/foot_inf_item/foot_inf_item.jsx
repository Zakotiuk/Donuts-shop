import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AditionalServices from "../services/AditionalServices";
import './foot_inf_item.css'

const Footer_info_item = () =>{
    const [info, setInfo] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await AditionalServices.getContatcts();
            setInfo(response);
        };
        fetchData();
    }, []);

    return(
        <div>
        {
            info.map((item, index) => 
                <div key={index} className="footer_info_div">
                    <span className="text fnt_sz_25">{item.name}</span>
                    <span>{item.info}</span>
                    <hr className="hr_line"></hr>
                </div>      
            )
        } {/* переписати вивід інфи*/}  
        </div> 
    )
}

export default Footer_info_item;