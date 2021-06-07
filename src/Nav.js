import React from "react";
import { Link } from 'react-router-dom';
import logo from "./assets/logo.jpg";
import cart from "./assets/cart.png";

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
                    <li className="nav">Home</li>
                </Link>
                <Link to="/shop" style={{ textDecoration: 'none' }}>
                    <li className="nav">Shop</li>
                </Link>
                <Link to={{ pathname: "https://github.com/jianrong7" }} target="_blank" style={{ textDecoration: 'none' }}>
                    <li className="nav">Social</li>
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <li>
                        <img src={cart} alt="" className="cartIcon" />
                    </li>
                </Link>
            </ul>
        </nav>
    );
};