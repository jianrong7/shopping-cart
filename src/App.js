import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart/Cart";
import ItemDetail from "./components/Items/ItemDetail";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [dummyItems, setDummyItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const fetchItems = async () => {
        let fetchItems = await fetch('https://fakestoreapi.com/products');
        let items = await fetchItems.json()
        setDummyItems(items);
    };

    const addToCart = (item) => {
        let itemTemp = item;
        let cartItemsTemp = cartItems;
        let index = cartItemsTemp.indexOf(itemTemp);

        if (index < 0) {
            itemTemp['quantity'] = 1;
            setCartItems(cartItemsTemp.concat([itemTemp]));
        } else {
            itemTemp = cartItemsTemp[index];
            itemTemp['quantity'] += 1;
            cartItemsTemp.splice(index, 1);
            setCartItems(cartItemsTemp.concat([itemTemp]));
        }
    };
    
    const changeQuantity = (item, sign) => {
        let itemTemp = item;
        let cartItemsTemp = cartItems;
        let index = cartItemsTemp.indexOf(itemTemp);

        if (sign === "+") {
            itemTemp['quantity'] += 1;
        } else {
            itemTemp['quantity'] -= 1;
        }
        cartItemsTemp.splice(index, 1, itemTemp);
        setCartItems(cartItemsTemp);
        console.log(cartItems)
    };

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact>
                        <Shop shopItems={dummyItems} />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart cartItems={cartItems} changeQuantity={changeQuantity} />
                    </Route>
                    <Route path="/shop/:id">
                        <ItemDetail addToCart={addToCart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
