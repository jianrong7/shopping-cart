import React from "react";
import { Link } from 'react-router-dom';
import logo from "./assets/logo.jpg";

export default function Nav() {
    const style = {
        height: "50px",
        width: "50px"
    };
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="" style={style} />
            </Link>
            <ul className="nav-links">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                <Link to="/shop" style={{ textDecoration: 'none' }}>
                    <li>Shop</li>
                </Link>
                <Link to={{ pathname: "https://github.com/jianrong7" }} target="_blank" style={{ textDecoration: 'none' }}>
                    <li>Social</li>
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <li>
                        hi
                    </li>
                </Link>
            </ul>
        </nav>
    );
};