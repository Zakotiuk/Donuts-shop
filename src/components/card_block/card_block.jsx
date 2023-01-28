import React from "react";
import './card_block.css';
import InputMask from 'react-input-mask';

const Card_block = () =>{
    return(
        <div className="card_block_div">
            <span className="fnt_sz_25">Card details</span>
            <img src={require("../../images/card_template.jpg")}/>
            <div className="card_info">
                <span className="fnt_sz_20">Full name</span>
                <input placeholder="Cardholder name" className="fnt_sz_15 input_name"/>
                <span className="fnt_sz_20">Card number</span>
                <InputMask className="fnt_sz_15 input_name" placeholder="1234-1234-1234-1234" mask='9999-9999-9999-9999'></InputMask>
                <div className="add_info">
                    <div className="exp_div">
                        <span className="fnt_sz_17">Expiration date</span>
                        <InputMask className="fnt_sz_15 input_name input_mini" placeholder="01/01" mask='99/99'></InputMask>
                    </div>
                    <div className="cvv_div">
                        <span className="fnt_sz_17">CVV</span>
                        <InputMask className="fnt_sz_15 input_name input_mini" placeholder="123" mask='999'></InputMask>
                    </div>
                </div>
                <div className="btn_check fnt_sz_20">Check out</div>
            </div>
        </div>
    )
}

export default Card_block;