import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

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
                    <Link to={'/'} href="">home</Link>
                    <Link to={'/about'} href="">about</Link>
                    <Link to={'/testimonials'} href="">testimonials</Link>
                    <Link to={'/contacts'} href="">contact</Link>
                </div>
                <img onClick ={toggleBurger} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" className={`burger ${active ? 'active' : ''}`} />
            </nav>
        </div>
      </header>
    </>
  )
}

export default Header
