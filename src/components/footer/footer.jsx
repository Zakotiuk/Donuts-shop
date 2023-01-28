import React from "react";
import Footer_info_item from "../foot_inf_item/foot_inf_item";
import './footer.css';

const Footer = () =>{
    return(
        <div className="footer_div">
            <hr color="black" size="1"/>
            <div className="info">
                <div className="about_div">
                    <span className="fnt_sz_40">What is Lorem Ipsum?</span>
                    <span className="fnt_sz_20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span>
                </div>
                    
                <div>
                    <Footer_info_item></Footer_info_item>
                </div>
                <div className="net_div">
                    <span className="fnt_sz_25">We are also in</span>
                    <div className="net_btn">
                        <button className="btn_wh">In</button>
                        <button className="btn_or">Tg</button>
                        <button className="btn_wh">Yo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;