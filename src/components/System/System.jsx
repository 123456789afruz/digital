import React from 'react'
import './System.scss'

const System = ({title, text, img}) => {
  return (
    <>
      <section className="system">
        <div className="container">
            <div className="system__wrapper">
            <img src={img} alt="" />
                <div className="system__info">
                <h2>{title}</h2>
                <p>{text}</p>
                <button>
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2493 8.70711C23.6398 8.31658 23.6398 7.68342 23.2493 7.29289L16.8853 0.928932C16.4948 0.538408 15.8616 0.538408 15.4711 0.928932C15.0806 1.31946 15.0806 1.95262 15.4711 2.34315L21.1279 8L15.4711 13.6569C15.0806 14.0474 15.0806 14.6805 15.4711 15.0711C15.8616 15.4616 16.4948 15.4616 16.8853 15.0711L23.2493 8.70711ZM0.313232 9H22.5421V7H0.313232V9Z" fill="#272D38"/></svg>
                </button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default System
