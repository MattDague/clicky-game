import React from "react";
import "./style.css";

function clickPic(props){
    return (
        <div className="container">
            <div className="click-image">
                <img src={props.image} alt={props.name} />
            </div>
        </div>

    )

}

export default clickPic;