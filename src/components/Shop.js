import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

function Shop({ shopItems }) {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([])

    const fetchItems = () => {
        setItems(shopItems)
    };

    return (
        <div className="shopItems">
            {items.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={`/shop/${item.id}`} className="shopItem" style={{ textDecoration: 'none' }}>
                            <img src={item.image} alt="" className="shopImages" />
                            <span>{item.title}</span>
                            <span>${item.price}</span>
                        </Link>
                    </li>
                );
            })}
        </div>
    );
}

export default Shop;
