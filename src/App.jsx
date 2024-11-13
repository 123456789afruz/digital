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


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/' element={<Testimonials/>}/>
        <Route path='/' element={<Contacts/>}/>
      </Routes>
      <Hero btn="Contact Us"/>
      <Companies/>
      <System title="Branding & Design System" text="Commonly Used In The Graphic, Print & Publishing Industris For Previewing Visual Layout And Mockupsv" img="/system-img.png"/> 
      <Plugin title="Custome & Plugin Development" text="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups" img="/system-img2.png"/>
      <Say/>
      <Be title="Be a part of the next big thing" text="We work with Brans, Startups, to SMEs. Colaborate for more impact and growt" img="/be-img.png" btn="Contact Us"/>

    </>
  )
}

export default App

