import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

function ItemDetail({ addToCart }) {
    let match = useRouteMatch("/shop/:id")

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <button onClick={() => addToCart(item)} className={item.id}>Add to cart</button>
        </div>
    );
}

export default ItemDetail;
