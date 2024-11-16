import React from 'react'
import Hero from '../components/Hero/Hero'
import Companies from '../components/Companies/Companies'
import System from '../components/System/System'
import Plugin from '../components/Plugin/Plugin'
import Smooth from '../components/Smooth/Smooth'


const Home = () => {
  return (
    <>
       <Smooth/>
       <Hero num='1'/>
       <Companies num='2'/>
       <System num='3' title="Lorem ipsum dolor sit." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est molestias, velit placeat aperiam at" img="/system-img.png"/>
       <Plugin num='4' title="Lorem ipsum dolor sit." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est molestias, velit placeat aperiam at" img="/system-img2.png"/>
       <System num='5' title="Lorem ipsum dolor sit." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est molestias, velit placeat aperiam at" img="/system-img.png"/>

    </>
  )
}

export default Home
