import React, { Component } from "react";
import "./style.css";

class Account extends Component {

    render() {
        return (
            <div>
                <h1>Hi</h1>
                <form method="POST">
                    <button type="submit">Log Out</button>
                </form>
            </div>
        );
    }
}

export default Account;
