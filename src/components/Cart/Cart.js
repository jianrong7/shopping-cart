import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cart, shopItems }) {
    useEffect(() => {
        checkQuantity();
    }, [])

    const [quantity, setQuantity] = useState({});

    const checkQuantity = () => {
        var result = cart.reduce( (acc, o) => (acc[o.id] = (acc[o.id] || 0)+1, acc), {} );
        setQuantity(result);
    }

    return (
        <div>
            <ul>
                {cart.map(item => {
                    return (
                        <li>
                            <CartItem item={item} quantity={quantity[item.id]} />
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default Cart;
