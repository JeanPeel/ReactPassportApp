import React from "react";
import "./style.css"

function Header() {
    return(
        <div>
            <div className="container">
                <div className="logo">
                     <img src={require("../../Images/habitTracker.gif")} alt="loading"  />
                </div>
            </div>
        </div>
    );
}

export default Header;