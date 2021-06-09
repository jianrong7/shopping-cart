import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart/Cart";
import ItemDetail from "./components/Items/ItemDetail";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [dummyItems, setDummyItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetchItems();
    }, []);

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
    
    const changeQuantity = (item, quantity) => {
        let itemTemp = item;
        let cartItemsTemp = cartItems;
        let index = cartItemsTemp.indexOf(itemTemp);

        if (quantity < 1) {
            cartItemsTemp.splice(index, 1);
        } else {
            itemTemp['quantity'] = quantity;
            cartItemsTemp[index] = itemTemp;
        }

        setCartItems(cartItemsTemp);
        calculateTotalCost(cartItemsTemp)
    };

    const calculateTotalCost = (cart) => {
        let sum = cart.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.price * currentValue.quantity)
        }, 0);
        sum = Math.round(sum * 100) / 100
        setTotalCost(sum);
    };

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact>
                        <Shop />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart
                        cartItems={cartItems}
                        changeQuantity={changeQuantity}
                        totalCost={totalCost}
                        />
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
