import React from "react";
import Text_rec_orang from "../text_rec_orang/text_rec_orang";
import Cir_product_left from "../cir_product_left/cir_product_left";
import './product_inf_left.css'
import Button_orang_bord from "../button_orang_bord/button_orang_bord";

const Product_inf_left = () =>{
    return(
        <div className="product_left_div">
            <Cir_product_left></Cir_product_left>
            <div className="description_div">
                <span className="fnt_sz_40">Name of ponchik</span>
                <span className="small_bold_span">Mix with</span>
                <Text_rec_orang></Text_rec_orang>
                <span className="descp_span">Some very interesting light text about smth very interesting</span>
                <Button_orang_bord></Button_orang_bord>
            </div>
        </div>
    )
}

export default Product_inf_left;