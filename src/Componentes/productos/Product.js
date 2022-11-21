import React from 'react'
import image from '../../images/article001.jpg'


export const Product = (product) => {
    return (
        <div className='producto'>
            <a href='#'>
                <div className='producto__img'>
                    <img src={image} alt=''></img>
                </div>
            </a>
            <div className='producto__footer'>
                <h1>
                    {product.title}
                </h1>
                <p> {product.category}</p>
                <p className='price'>${product.price}</p>
            </div>

            <div className='buttom'>
                <button className='btn'>
                    añadir al carrito
                </button>
                <div>
                    <a  className='btn'>Vista</a>
                </div>
            </div>
        </div>
    )
}
