import './App.scss'
import React from 'react'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/Companies/Companies'
import System from './components/System/System'
import Plugin from './components/Plugin/Plugin'
import Say from './components/Say/Say'
import Be from './components/Be/Be'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contacts from './pages/Contacts'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App

