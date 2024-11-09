import React from 'react'
import './Be.scss'

const Be = ({title, img, text, btn}) => {
  return (
    <>
       <section className="be">
        <div className="container">
            <div className="be__wrapper">
            <img src={img} alt="" />
                <div className="be__info">
                <h2>{title}</h2>
                <p>{text}</p>
                <button>{btn}</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Be
