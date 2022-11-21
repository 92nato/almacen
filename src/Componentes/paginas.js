import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./Inicio/Index";
import { ProductosLista } from "./Productos";


export const Paginas = () => {
    return (
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/productos' element={<ProductosLista/>}/>
        </Routes>
    


    )
}