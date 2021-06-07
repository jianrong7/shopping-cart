import React from "react";
import { Link } from 'react-router-dom';
import logo from "./assets/logo.jpg";

export default function Nav() {
    const style = {
        height: "30px",
        width: "30px"
    };
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="" style={style} />
            </Link>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to={{ pathname: "https://github.com/jianrong7" }} target="_blank">
                    <li>Social</li>
                </Link>
                <Link to="/cart">
                    <li>
                        hi
                    </li>
                </Link>
            </ul>
        </nav>
    );
};