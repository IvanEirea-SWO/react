import React from 'react'
import Button from './components/Button'
import Link from './components/Link'
import Navbar from './components/Navbar'
import MyCard from './components/MyCard'
import './App.css'

//Esto es un componente. Un componente es una función que retorna algo y se exporta
//En las llaves de interpolacion { } podemos meter codigo JS, son una llave a cada lado no dos {{ }} como en Angular

//En React es mejor poner las variables y las funciones fuera de los componentes, como hacemos aquí
//A no ser que estemos usando events

/*let name = "Ivan"
let names = ["Oda", "Hiro", "Akira"]

let objectOne = {
  'name': 'Ivan',
  'tel': 123123123
}

function sum(a, b) {
  return a+b
}

const getName = (name) => {
  return name
}*/

function App() {
  return (
    <> 
      <Navbar></Navbar>

      <div className="box">
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
      </div>

      <div className="box">
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
      </div>

      {/*<h1>Rendering JS in HTML</h1>

      <h1>The sum of 5 and 5 is { 5 + 5 } and your name is { name }</h1>

      <h1>{ sum(10, 15) }</h1>

      <h1>{ getName('Oda') }</h1>

      <div>
        { names + ',' }
      </div>
      <br />

      <div>
        {
          <>
            <h3>{'Name: ' + objectOne.name}</h3>
            <h3>{'Tel: ' + objectOne.tel}</h3>
          </>
        }
      </div>
      <br />

      <Button></Button>

      <Link></Link>*/}
    </>
  )
}

export default App
