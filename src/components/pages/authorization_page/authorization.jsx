import React from "react";
import { useState } from "react";
import Header from "../../header/header";
import Progress_bar from "../../progress_bar/progress_bar";
import './authorization.css';
const Authorization_page = () =>{
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    return(
        <div className="auth_div">
            <div className="left_img">
            </div>
            <div>
                <Header></Header>
                <div className="progress_info_div">
                    <Progress_bar click3={click3} click2={click2} click={click}></Progress_bar>
                    {
                        click == false ?
                        <div>
                            <div className="info_div">
                                <span className="text fnt_sz_25">Your name</span>
                                <input placeholder="Entony Brong" className="fnt_sz_17"/>
                                <hr color="black" size="1" className="hr_line"></hr>
                                <span className="text fnt_sz_25">Your phone</span>
                                <input placeholder="+380982473924" className="fnt_sz_17"/>
                                <hr color="black" size="1" className="hr_line"></hr>
                            </div> 
                            <div onClick={()=> setClick(!click)} className="btn_div">Check out</div>
                        </div>
                        :   
                        <div className={click2 === true ? "hide_div" : ""}>
                        <div className="info_div">
                                <span className="text fnt_sz_25">Create password</span>
                                <input type="password" placeholder="qwerty123" className="fnt_sz_17"/>
                                <hr color="black" size="1" className="hr_line"></hr>
                                <span className="text fnt_sz_25">Repeat your password</span>
                                <input type="password" placeholder="qwerty123" className="fnt_sz_17"/>
                                <hr color="black" size="1" className="hr_line"></hr>
                            </div>
                            <div onClick={()=> setClick2(!click2)} className="btn_div">Check out</div>
                        </div>
                    }
                    {
                        click2 == true ?
                        <div>
                            <h1>Yeeaaap, you are in our system!</h1>
                            <div onClick={()=> setClick3(!click3)} className="btn_div">Check out</div>
                        </div> : <div/>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Authorization_page;