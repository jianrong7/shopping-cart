import React from "react";

function CartFooter({ cartItems, totalCost }) {
    return (
        <div className="cartFooter">
            <p>${totalCost}</p>
            <button className="completeOrderBtn">COMPLETE ORDER</button>
        </div>
    );
}

export default CartFooter;
