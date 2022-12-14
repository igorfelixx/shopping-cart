import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header({cartItems}) {    
    
    return (
        <>
            <header id='header' className='header'>
                <div>
                    <h1>
                        <Link to="/" className="logo">Electronics Shop</Link>
                    </h1>
                </div>
                <div className='header-links'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/signup">SignUp</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/cart" className='cart'>
                                <i class="fas fa-shopping-cart" />
                                <span className='cart-length'>{cartItems.length === 0 ? "" : cartItems.length}</span>
                            </Link>
                            
                        </li>
                    </ul>
                </div>

                
            </header>

            <div className='added-cart'>
                    Product added to cart
                </div>
           
        </>
    )

}