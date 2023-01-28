import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const Header = () =>{
    return(
        <div className="header">
            <Link className="fnt_sz_40 non_link_style" to="/">Dns</Link>
        </div>
    )
}

export default Header;