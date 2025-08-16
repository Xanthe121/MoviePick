import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="loginContainer">
            <h2 className="form-title">Login!</h2>
            <form action="#" className="login-form">
                <div className="input-wrapper">
                <label htmlFor="email">Email:</label>
                    <input type="email" placeholder=" Email address" className="input-field" required/>
                </div>
                <div className="input-wrapper">
                <label htmlFor="password">password:</label>
                    <input type="password" placeholder=" Password" className="input-field" required/>
                </div>
                <button className="loginButton" type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login