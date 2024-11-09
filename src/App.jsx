import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/Companies/Companies'
import System from './components/System/System'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Companies/>
      <System title="Branding & Design System" text="Commonly Used In The Graphic, Print & Publishing Industris For Previewing Visual Layout And Mockupsv" img="/system-img.png"/> 
      <System title="Custome & Plugin Development" text="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups" img="/system-img2.png"/> 
    </>
  )
}

export default App

