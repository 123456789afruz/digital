import React from 'react'
import './Card_say.scss'



const Card_say = ({img, name, info, }) => {
  return (
    <>
      <div className="say__card">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <p>{info}</p>
        

      </div>
    </>
  )
}

export default Card_say
