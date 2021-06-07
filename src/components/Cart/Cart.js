import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import CartFooter from "./CartFooter";

function Cart({ cartItems, changeQuantity }) {
    useEffect(() => {
        setCart(cartItems)
    }, [cartItems])

    const [cart, setCart] = useState(cartItems);

    return (
        <div className="cart">
            <div className="cartGrid">
                {cart.map(item => {
                    return (
                        <CartItem item={item} key={item.id} changeQuantity={changeQuantity} />
                    );
                })}
            </div>
            <CartFooter cart={cart} />
        </div>
    );
}

export default Cart;
