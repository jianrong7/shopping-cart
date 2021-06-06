import React, { useState, useEffect } from "react";

function Cart({ cart }) {
    useEffect(() => {
        console.log(cart)
    }, [])

    return (
        <div>
            <ul>
                {cart.map(item => {
                    return (
                        <li>
                            {item.title}
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default Cart;
