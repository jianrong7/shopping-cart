import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ItemDetail from "./components/items/ItemDetail";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(cartItems.concat([item]))
    };

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/cart" exact>
                        <Cart cart={cartItems} />
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
