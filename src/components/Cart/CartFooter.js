import React, { useState, useEffect } from "react";

function CartFooter({ cart }) {
    useEffect(() => {
        calculateTotalCost();
    })

    const [totalCost, setTotalCost] = useState(0);

    const calculateTotalCost = () => {
        let sum = cart.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.price * currentValue.quantity)
        }, 0)
        setTotalCost(sum);
    }

    return (
        <div className="cartFooter">
            <p>${totalCost}</p>
            <button className="completeOrderBtn">COMPLETE ORDER</button>
        </div>
    );
}

export default CartFooter;
