import React from "react";
import "./style.css";


function Navbar(props){
    return(
      
     <nav class="navbar navbar-expand-lg bg-danger">
  <h1 className="nav text-light">Clicky Game!</h1>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto text-light">
      <li className="nav-item active">
        <h1 className="nav-link"> Count: {props.count} </h1>
      </li>
      <li className="nav-item">
        <h1 className="nav-link"> High Score: {props.highScore}</h1>
      </li>
    </ul>
  </div>
</nav>

    )
}
export default Navbar;