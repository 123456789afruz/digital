import React, { useState } from 'react'
import './Header.css'

const Header = () => {


    const [active, setActive] = useState(false)

    const toggleBurger = () => {
        setActive(!active)
    }
    console.log(active);
    
  return (
    <>
      <header className="header">
        <div className="container">
            <nav className="nav">
                <a href="" className="header__logo">Digital Agency</a>
                <div className={`header__menu ${active ? 'active' : ''}`}>
                    <a href="">home</a>
                    <a href="">about</a>
                    <a href="">testimonials</a>
                    <a href="">contact</a>
                </div>
                <img onClick ={toggleBurger} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" className={`burger ${active ? 'active' : ''}`} />
            </nav>
        </div>
      </header>
    </>
  )
}

export default Header
