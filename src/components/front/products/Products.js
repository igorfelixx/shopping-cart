import React from 'react'
import "./Products.css"

export default function Products({productItems, handleAddProduct}) {    

    function addedCart() {       

        const addedCart = document.querySelector(".added-cart")
        
        addedCart.style.visibility = "visible";
    
        setTimeout(() => {
           addedCart.style.visibility = "hidden";
        }, 3000);
        
    }    
    
    return( 
        <div className='products'>
            {productItems.map((productItem) => (
                <div className='card'>
                    <div>
                        <img className='product-image' src={productItem.image} alt={productItem.name} />
                    </div>

                    <div>
                        <h3 className='product-name'>
                            {productItem.name}
                        </h3>
                    </div>
                    <div className='product-price'>
                        ${productItem.price}
                    </div>
                    <div className='buttonClick'>
                        <button className='product-add-button' onClick={() => {handleAddProduct(productItem, addedCart())}}>
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}