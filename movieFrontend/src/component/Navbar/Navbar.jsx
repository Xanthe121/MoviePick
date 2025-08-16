import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import MovieLandLogo from "../../assets/MovieLandLogo.png";
import searchicon from "../../assets/searchicon.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={MovieLandLogo} alt="" className="logo" />

            <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src={searchicon} alt="" />
            </div>

        <Link to="/login"><button>Login</button></Link>
        </div>
    )
}

export default Navbar