
import './App.css';

import data from './components/back/Data/Data'

import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';

import { BrowserRouter } from 'react-router-dom'
import React, { useState } from 'react';

function App() {

  const { productItems } = data;

  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)

    if (productExist) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id
          ? { ...productExist, quantity: productExist.quantity + 1 }
          : item))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item)
      )
    }
  }

  const handleCartClearance = () => {
    setCartItems([])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;