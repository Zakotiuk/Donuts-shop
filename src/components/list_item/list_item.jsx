import React from "react";
import './list_item.css'
const List_item = ({title, points, index}) =>{
    return(
        <div>
        <div className="list_item_div">
            <div className="indicator_div">
                <div className="vert_line"/>
                <div className="circle fnt_sz_20">
                    {index+1}
                </div>
            </div>
            <div className="info">
                <span className="fnt_sz_60 title">{title}</span>
                <ul className="list fnt_sz_20">
                    {
                        points.map((item, index) =>
                                <li key={index}>{item}</li>
                            )
                    }
                </ul>
            </div>
            </div>
            <hr color="black" size="1" className="hr_line"/>
        </div>

    )
}

export default List_item;