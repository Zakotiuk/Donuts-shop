import React from "react";
import './catalog_item.css'

const Catalog_item = ({info}) =>{
    return(
        <div className="catalog_item_div">
            <div className="border_div">
                <img className="catalog_item_img" src={info.img}/>
                <div className="description">
                    <span className="fnt_sz_35 info">{info.name}</span>
                    <span className="fnt_sz_20 info">{info.composition}</span>
                    <div className="prc_btn">
                        <span className="fnt_sz_20">{info.price}</span>
                        <img className="cart_btn" src="https://img.icons8.com/carbon-copy/400/null/shopping-cart.png"/>                
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Catalog_item;