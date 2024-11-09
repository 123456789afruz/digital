import React from 'react'
import './Companies.scss'

const Companies = () => {
  return (
    <>
      <section className="companies">
        <div className="container">
            <p>Trusted by 4,000+ companies</p>
            <div className="companies__box">
                <img src="/spotify.png" alt="" />
                <img src="/slack.png" alt="" />
                <img src="/dropbox.png" alt="" />
                <img src="/zoom.png" alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default Companies
