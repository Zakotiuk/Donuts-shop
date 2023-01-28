import React from "react";
import Header from "../header/header";
import { Link } from "react-router-dom";
import { Link as Link_Scroll} from 'react-scroll/modules';
import './head_part_main.css';


const Head_part = () =>{
    return(
        <div className="head_part">
            <div>
                <img className="head_part_img" src={require("../../images/head_small_img.jpg")}/>
            </div>
            <div>
                <Header></Header>
                <div className="head_menu_img">
                    <div className="head_menu">
                        <span className="head_logo">Dns</span>
                        <div>
                            <ul className="menu fnt_sz_20">
                                <Link className="non_link_style points" to="/catalog">Donuts</Link>
                                <Link_Scroll className="non_link_style points" to="donut_map_div" smooth='true' duration={2000}>Our principles</Link_Scroll>
                                <Link_Scroll className="non_link_style points" to="partners_rules" smooth='true' duration={2000}>Become a partner</Link_Scroll>
                                <Link className="non_link_style points" to="/catalog">Contact</Link>
                                <Link className="non_link_style points" to="/catalog">About</Link>
                            </ul>
                        </div>
                    </div>
                    <img className="menu_img" src={require("../../images/head_big_img.jpg")}/>
                </div>
            </div>
        </div>
    )
}

export default Head_part;