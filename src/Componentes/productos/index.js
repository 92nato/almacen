import React from 'react'
import {Product} from '../Productos/Product'


export const ProductosLista = () => {
    let products = [
        {
            title: "Title",
            category: "Category",
            price: 320.0,
        },
        {
            title: "Title",
            category: "Category",
            price: 320.0,
        },
        {
            title: "Title",
            category: "Category",
            price: 320.0,
        }
    ]
    return (
        <>
            <h1 className='title'>PRODUCTOS</h1>
            <div className='productos'>
                {products.map(i => Product(i))}
            </div>
        </>
    )
}