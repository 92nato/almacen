import React from 'react'
import image from "../../images/article001.jpg"

export const ProductosLista = () => {
    return (
        <>
            <h1 className='title'>PRODUCTOS</h1>
            <div className='productos'>
                <div className='producto'>
                    <a href='#'>
                        <div className='producto__img'>
                            <img src={image} alt=''></img>
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>
                            Title
                        </h1>
                        <p> categoria</p>
                        <p className='price'>$320</p>
                    </div>

                    <div className='buttom'>
                        <button className='btn'>
                            añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}