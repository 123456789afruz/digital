import React from 'react'
import './System.scss'

const System = ({title, text, img, num}) => {
  return (
    <>
      <section className="system">
        <div className="container">
            <div className="system__wrapper" id={`hero${num}`}>
            <img src={img} alt="" />
                <div className="system__info">
                <h2>{title}</h2>
                <p>{text}</p>
                <button>
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.936 8.70711C23.3265 8.31658 23.3265 7.68342 22.936 7.29289L16.5721 0.928932C16.1815 0.538408 15.5484 0.538408 15.1578 0.928932C14.7673 1.31946 14.7673 1.95262 15.1578 2.34315L20.8147 8L15.1578 13.6569C14.7673 14.0474 14.7673 14.6805 15.1578 15.0711C15.5484 15.4616 16.1815 15.4616 16.5721 15.0711L22.936 8.70711ZM0 9H22.2289V7H0V9Z" fill="#272D38"/></svg>
                </button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default System
