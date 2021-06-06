import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <nav>
            <Link to="/">
                <h3>Logo</h3>
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