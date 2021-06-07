import React, { useState, useEffect } from "react";

function CartItem({ itemId, quantity, shopItems }) {
    useEffect(() => {
        retrieveItem();
    }, []);

    const [itemDetail, setItemDetail] = useState({});

    const retrieveItem = () => {
        shopItems.map(item => {
            if (item.id === itemId) {
                item.quantity = quantity;
                setItemDetail(
                    item
                )
            }
        })
    }
    return (
        <div>
            {itemId}
            {quantity}
            {itemDetail.id}
            {itemDetail.description}
            {itemDetail.price}
            {itemDetail.quantity}
        </div>
    );
}

export default CartItem;
