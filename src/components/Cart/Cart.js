import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import CartFooter from "./CartFooter";

function Cart({ cart }) {

    return (
        <div className="cart">
            <div className="cartGrid">
                {cart.map(item => {
                    return (
                        <CartItem item={item} key={item.id} />
                    );
                })}
            </div>
            <CartFooter cart={cart} />
        </div>
    );
}

export default Cart;
