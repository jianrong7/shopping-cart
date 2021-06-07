import React, { useState, useEffect } from "react";

function CartItem({ item }) {
    return (
        <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>${item.quantity}</p>
            
        </div>
    );
}

export default CartItem;
