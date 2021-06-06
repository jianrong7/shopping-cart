import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        let fetchItems = await fetch('https://fakestoreapi.com/products');
        let items = await fetchItems.json()
        setItems(items);
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
