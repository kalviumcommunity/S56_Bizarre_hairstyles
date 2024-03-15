import React from 'react'
import Landing from './Components/Landing.jsx'
import Explore from './Components/Explore.jsx'
import Add from './Components/Add.jsx'
import Update from './Components/Update.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login.jsx'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:_id' element={<Update/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
