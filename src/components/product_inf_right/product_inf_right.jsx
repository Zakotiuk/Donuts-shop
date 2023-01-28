import React from "react";
import Text_rec_orang from "../text_rec_orang/text_rec_orang";
import './product_inf_right.css'
import Button_orang_bord from "../button_orang_bord/button_orang_bord";
import Cir_product_right from "../cir_product_right/cir_product_right";

const Product_inf_right = () =>{
    return(
        <div className="product_right_div">
            <div className="description_div">
                <span className="fnt_sz_40">Name of ponchik</span>
                <span className="small_bold_span">Mix with</span>
                <Text_rec_orang></Text_rec_orang>
                <span className="descp_span">Some very interesting light text about smth very interesting</span>
                <Button_orang_bord></Button_orang_bord>
            </div>
            <Cir_product_right></Cir_product_right>
        </div>
    )
}

export default Product_inf_right;