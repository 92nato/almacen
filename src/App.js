import React from 'react'
import {Header} from './Componentes/Header'
import {ProductosLista} from './Componentes/productos'
import 'boxicons';

function App() {
  return (
    <div className="App">
      <header>
      
      <Header />
      <ProductosLista />
      </header>
    </div>
  );
}

export default App;
