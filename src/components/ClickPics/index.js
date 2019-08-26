import React from "react";
import "./style.css";

function ClickPic(props){
    return (
        <div onClick={ () => props.goodClick(props.clicked)} data-clicked={props.clicked}  id={props.id} className="img-container col-3">
            <div className="click-image p-5">
                <img src={props.image} alt={props.name}  />
            </div>
        </div>

    )

}

export default ClickPic;