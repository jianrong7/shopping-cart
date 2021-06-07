import React, { useState, useEffect } from "react";

function CartItem({ item, changeQuantity }) {
    
    return (
        <div className="cartItem">
            <img src={item.image} alt="" className="shopImages" />
            <p>{item.title}</p>
            <div className="priceDetail">
                <span>${item.price}</span>
                <div>
                    <button onClick={() => changeQuantity(item, "-")}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item, "+")}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
