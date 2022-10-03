import React from 'react'
import Home from './Home'
import About from './About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'

const Index = () => {
  return (
    <>
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about/*' element={<About />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index