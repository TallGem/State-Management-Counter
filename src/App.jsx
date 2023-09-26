import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counting from './Components/Counting'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Counting/>}/>
    </Routes>
    </>
  )
}

export default App