import React from 'react';
import Products from '../products/Products';
import Signup from '../Singup/Signup';
import Cart from '../Cart/Cart';
import { Route, Switch } from 'react-router-dom';

export default function Routes({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) {

    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct} />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}
                    handleCartClearance={handleCartClearance} />
                </Route>
            </Switch>
        </>
    )

}