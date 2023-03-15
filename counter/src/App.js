import React, { useState } from 'react'
import './App.css'
import Contador from './Componentes/Contador';
import Cabecalho from './Componentes/Cabecalho';
import { ContadorProvider } from './ContadorContexto';


function App(){
  return (
    <div>
      <ContadorProvider>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </ContadorProvider>
    </div>
  )
}

export default App;
