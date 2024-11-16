import React from 'react'
import System from '../components/System/System'
import Plugin from '../components/Plugin/Plugin'
import Smooth2 from '../components/Smooth2/Smooth2'

const About = () => {
  return (
    <>
      <Smooth2/>
      <System num='1' title="Branding & Design System" text="Commonly Used In The Graphic, Print & Publishing Industris For Previewing Visual Layout And Mockupsv" img="/system-img.png"/>
      <Plugin num='2' title="Custome & Plugin Development" text="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups" img="/system-img2.png"/>
      <System num='3' title="Lorem ipsum dolor sit." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est molestias, velit placeat aperiam at" img="/system-img.png"/>

    </>
  )
}

export default About
