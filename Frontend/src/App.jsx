import React from 'react'
import Landing from './Components/Landing.jsx'
import Explore from './Components/Explore.jsx'
import Add from './Components/Add.jsx'
import Update from './Components/Update.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
