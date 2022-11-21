import React from 'react'
import { Header } from './Componentes/Header'
import { ProductosLista } from './Componentes/Productos/index'
import 'boxicons';

function App() {
  return (
    <div className="App">
      <header>

        <Header />

      </header>
      <ProductosLista />
    </div>
  );
}

export default App;
