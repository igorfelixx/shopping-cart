import React from 'react'
import "./Cart.css"

export default function Cart({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div className='cart-body'>
            <div className='cart-items'>
                <div className='cart-items-header'>
                    <h2 className='cart-items-header'>Cart Items</h2>
                    <div className='clear-cart'>
                        {cartItems.length >= 1 && (
                            <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
                        )}
                    </div>
                </div>
                {cartItems.length === 0 && (<div className='cart-items-empty'> No items area added</div>)}
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item-list">
                            <img
                                className='cart-items-image'
                                src={item.image}
                                alt={item.name}
                            />
                            <div className='cart-items-name'>{item.name}</div>
                            <div className='cart-items-functions'>
                                <button
                                    className='cart-items-add'
                                    onClick={() => { handleAddProduct(item) }}
                                >
                                    +
                                </button>
                                <button className='cart-items-remove' onClick={() => { handleRemoveProduct(item) }}
                                >
                                    -
                                </button>
                            </div>
                            <div className='cart-items-price'>
                                {item.quantity} * ${item.price}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='cart-items-total-price-name'>
                    Total price
                    <div className='cart-items-total-price'>
                        ${totalPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}