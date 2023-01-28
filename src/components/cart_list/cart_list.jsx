import React from "react";
import Cart_item from "../cart_item/cart_item";
import './cart_list.css'

const Cart_list = () =>{
    return(
        <div className="cart_list_div">
            <Cart_item></Cart_item>
            <Cart_item></Cart_item>
            <Cart_item></Cart_item>
            <Cart_item></Cart_item>
            <div className="subm_div">
                <span className="fnt_sz_20">Submition</span>
                <span className="fnt_sz_30">120 UAH</span>
            </div>
        </div>
    )
}

export default Cart_list;