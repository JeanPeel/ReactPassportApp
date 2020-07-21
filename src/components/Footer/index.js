import React from "react";
import "./style.css"

function Footer() {
    return(
        <footer>
        <div className="footer">
            <div className="container">
                <div>
                     <img className="logo3 "src={require("../../Images/HabitNexus.gif")} alt="loading"  />
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;