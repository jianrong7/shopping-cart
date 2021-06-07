import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetail({ addToCart }) {
    let match = useRouteMatch("/shop/:id")

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const itemData = await fetchItem.json();
        setItem(itemData);
    }
    const handleAdd = () => {
        addToCart(item)
    }

    return (
        <div className="backgroundColor">
            <div className="itemDetail">
                <div className="mainContent">
                    <img src={item.image} alt="" className="itemDetailImage" />
                    <div className="text">
                        <h2>{item.title}</h2>
                        <h3>${item.price}</h3>
                        <button onClick={handleAdd} className={item.id}>Add to cart</button>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
