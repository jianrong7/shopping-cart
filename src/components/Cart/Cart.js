import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cart, shopItems }) {
    useEffect(() => {
        console.log(cart)
        checkQuantity();
    }, [])

    const [quantity, setQuantity] = useState({});

    const checkQuantity = () => {
        var result = cart.reduce( (acc, o) => (acc[o.id] = (acc[o.id] || 0)+1, acc), {} );
        setQuantity(result);
    }

    return (
        <div className="cart">
            {cart.map(item => {
                return (
                    <CartItem item={item} key={item.id} />
                );
            })}
        </div>
    );
}

export default Cart;
