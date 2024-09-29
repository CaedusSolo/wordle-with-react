import { useState } from 'react'
import './App.css'
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Board />
      <Keyboard />
    </>
  )
}

export default App