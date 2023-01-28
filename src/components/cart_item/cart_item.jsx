import React from "react";
import "./cart_item.css"

const Cart_item = () =>{
    return(
        <div className="cart_item_div_hr">
        <div className="cart_item_div">
            <img src={require("../../images/cir_right_img.jpg")}/>
            <div className="info">
                <span className="fnt_sz_30">Lorem Ipsum</span>
                <span className="fnt_sz_15">Sweet</span>
            </div>
            <div className="counter">
                <span className="sign fnt_sz_25">—</span>
                <span className="fnt_sz_15">1</span>
                <span className="sign fnt_sz_25">+</span>
            </div>
            <span className="fnt_sz_20">40 UAH</span>
            <span className="cross fnt_sz_35">+</span>
        </div>
            <hr size="1" color="black"/>
        </div>

    )
}

export default Cart_item;