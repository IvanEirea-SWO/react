import React from 'react'
import ComponenteUno from './components/ComponenteUno'
import ComponenteDos from './components/ComponenteDos'

let tlfn = 981123123

function App() {

  return (
    <>
      <ComponenteUno telefono={ 981123123 }></ComponenteUno>
      <ComponenteDos telefono={ 981999999 }></ComponenteDos>
    </>
  )
}

export default App
