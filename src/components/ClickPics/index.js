import React from "react";
import "./style.css";

function ClickPic(props){
    return (
        <div className="img-container col-4">
            <div className="click-image">
                <img src={props.image} alt={props.name} />
            </div>
        </div>

    )

}

export default ClickPic;