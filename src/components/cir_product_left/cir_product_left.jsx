import React, { useContext } from "react";
import './cir_product_left.css';

const Cir_product_left = ()=>{
    const desc = ["text", "text", "text", "text", "text", "text", "text"]

    return(
        <div className="cir_div">
            {/* <svg width="800" height="58" xmlns="http://www.w3.org/2000/svg">
                    <path id="textPathh" d="M10,15 a80,4 0 1,1 0,64" />
                    <text><textPath href="#textPathh" startOffset="12"><tspan dy=".4em">Lorem Ipsum is simply dummy text of dummy text</tspan></textPath></text>
            </svg> переписати */}
            {/* <span className="cir_span">Lorem Ipsum is simply dummy text of simply dummy</span> */}
            <div className="img_text">
                <img src={require("../../images/cir_left_img.jpg")}/>
                <svg className="textt" width="120" height="550" xmlns="http://www.w3.org/2000/svg">
                    <path id="textPath" d="M0,20 a75,140 0 1,1 -60,450" />
                    <text><textPath href="#textPath" startOffset="12"><tspan dy=".4em">Lorem Ipsum is simply dummy text of</tspan></textPath></text>
                </svg>
            </div>
        </div>
    )
}

export default Cir_product_left;