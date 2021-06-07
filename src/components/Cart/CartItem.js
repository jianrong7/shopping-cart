import React, { useState, useEffect } from "react";

function CartItem({ item }) {
    return (
        <div className="cartItem">
            <img src={item.image} alt="" className="shopImages" />
            <p>{item.title}</p>
            <div className="priceDetail">
                <span>${item.price * item.quantity}</span>
                <span>{item.quantity}</span>
            </div>
        </div>
    );
}

export default CartItem;
