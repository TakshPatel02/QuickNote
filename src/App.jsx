import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Notes from './Pages/Notes'
import Wishlist from './Pages/Wishlist'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </div>
  )
}

export default App