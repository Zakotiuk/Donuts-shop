import React, { useContext } from "react";
import './cir_product_right.css';

const Cir_product_right = ()=>{
    const desc = ["text", "text", "text", "text", "text", "text", "text"]

    return(
        <div className="cir_right_div">
            
            <div className="img_text">
                <svg className="textt" width="165" height="550" xmlns="http://www.w3.org/2000/svg">
                <path id="right_textPath" d="M0,60 a75,140 0 1,1 -60,450" />
                    <text><textPath href="#right_textPath" startOffset="12"><tspan dy=".4em">Lorem Ipsum is simply dummy text of</tspan></textPath></text>
                </svg>

                <img src={require("../../images/cir_right_img.jpg")}/>
            </div>
        </div>
    )
}

export default Cir_product_right;