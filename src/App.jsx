import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './peges/Home'
// import { Route } from 'router'
import Login from './peges/Login'
import Register from './peges/Register'
import AddCart from './peges/AddCart'
import Products from './peges/Products'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/AddCart' element={<AddCart/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path='/paratha' element={<Products/>}/>

      </Routes>
    </Router>

    </>
  )
}

export default App