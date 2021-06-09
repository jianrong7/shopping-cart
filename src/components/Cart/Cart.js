import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import CartFooter from "./CartFooter";

function Cart({ cartItems, changeQuantity, totalCost }) {
    return (
        <div className="cart">
            <div className="cartGrid">
                {cartItems.map(item => {
                    return (
                        <CartItem item={item} key={item.id} changeQuantity={changeQuantity} />
                    );
                })}
            </div>
            <CartFooter cartItems={cartItems} totalCost={totalCost} />
        </div>
    );
}

export default Cart;
