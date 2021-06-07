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
        <div className="cart">
            {Object.keys(quantity).map(key => {
                return(
                    <CartItem itemId={key} quantity={quantity[key]} shopItems={shopItems} />
                );
            })}
        </div>
    );
}

export default Cart;
