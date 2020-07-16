import React, { Component } from "./node_modules/react";
import "./style.css";

class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form action="/login" method="POST">
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                            <button type="submit">Login</button>
                </form>
                <a href="/register">Register</a>
                </div>
        );
    }
}

export default Login;