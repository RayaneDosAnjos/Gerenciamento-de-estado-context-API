import React, { useState } from 'react'
import './App.css'
import Contador from './Componentes/Contador';
import Cabecalho from './Componentes/Cabecalho';


function App(){
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Contador></Contador>
    </div>
  )
}

export default App;
