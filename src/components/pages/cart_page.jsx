import React from "react";
import Card_block from "../card_block/card_block";
import Cart_list from "../cart_list/cart_list";
import Header from "../header/header";
import './cart_page.css'

const Cart_page = () =>{
    return(
        <div>
            <Header></Header>
            <div className="divider">
                <Cart_list></Cart_list>
                <Card_block></Card_block>
            </div>
        </div>
    )
}

export default Cart_page;