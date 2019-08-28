import React from "react";
import "./style.css";

const ClickPic = props => {
    return (
        <div onClick={props.clickEvent} data-clicked={props.clicked} id={props.id} className="img-container col-3">
            <div className="click-image p-5">
                <img src={props.image} alt={props.name} id={props.id} />
            </div>
        </div>

    )

}

export default ClickPic