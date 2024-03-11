import React from 'react'
import Landing from './Components/Landing.jsx'
import Explore from './Components/Explore.jsx'
import Add from './Components/Add.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
