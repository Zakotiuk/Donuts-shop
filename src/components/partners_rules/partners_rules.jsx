import React from "react";
import Chapter from "../chapter/chapter";
import List_item from "../list_item/list_item";
import './partners_rules.css';
import { useState } from "react";
import { useEffect } from "react";
import RulesServices from "../services/AditionalServices";

const List = () =>{
    
    const [info, setInfo] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await RulesServices.getRules();
            setInfo(response);
        };
        fetchData();
    }, []);
    return(
        <div id="partners_rules" className="list_div">
            <Chapter></Chapter>
            {
                info?.map((item, index)=>
                    <List_item index={index} key={index} title={item.name} points={item.points}></List_item> 
                )
            }
            <div className="img_text">
                <div className="vertt_line"/>
                <div className="div_img">
                    <img src={require("../../images/bottom_img.jpg")}/> {/*подумати як відсунути її вправо*/}
                    <span className="text fnt_sz_60">The best donuts in our opinion :)</span>
                </div>
            </div>
        </div>
    )
}
export default List;