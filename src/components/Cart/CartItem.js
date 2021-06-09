import React, { useState, useEffect } from "react";

function CartItem({ item, changeQuantity }) {
    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(() => {
        changeQuantity(item, quantity);
    }, [quantity])


    return (
        <div className="cartItem">
            <img src={item.image} alt="" className="shopImages" />
            <p>{item.title}</p>
            <div className="priceDetail">
                <span>${item.price}</span>
                <div className="quantity">
                    <button onClick={() => setQuantity(prevQuantity => prevQuantity - 1)} className="quantityBtn">-</button>
                    <div className="quantityTracker">{quantity}</div>
                    <button onClick={() => setQuantity(prevQuantity => prevQuantity + 1)} className="quantityBtn">+</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
