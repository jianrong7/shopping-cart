import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop({ shopItems }) {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        setItems(shopItems)
    };

    return (
        <div>
            {items.map(item => {
                return (
                    <li key={item.id} >
                        <Link to={`/shop/${item.id}`}>
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </div>
    );
}

export default Shop;
