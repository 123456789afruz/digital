import React from 'react'
import './Hero.scss'

const Hero = ({btn}) => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__info">
              <h1>Building Digital Products, Brands & Experience</h1>
              <p>Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt</p>
              <button>{btn}</button>
            </div>
            <img src="/hero-img.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
