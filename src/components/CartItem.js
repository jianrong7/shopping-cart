import React, { useState, useEffect } from "react";

function CartItem({ item, quantity }) {
    return (
        <div>
            {item.title}
            {quantity}
        </div>
    );
}

export default CartItem;
