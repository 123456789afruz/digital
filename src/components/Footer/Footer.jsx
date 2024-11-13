import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__agency">
                            <h4>Digital Agency</h4>
                            <p>Building digital products, brands & experience</p>
                        </div>
                        <div className="footer__info">
                            <h4>Resources</h4>
                            <p>Guides</p>
                            <p>Blog</p>
                            <p>Cuistomer Stories</p>
                            <p>Glossery</p>
                        </div>
                        <div className="footer__info">
                            <h4>Company</h4>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Partners</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="footer__info">
                            <h4>Social Media</h4>
                            <p>LinkedIn</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                        </div>
                    </div>
                    <p className='text'>© Matheus. Todos os direitos reservados</p>
                </div>
            </section>
        </>
    )
}

export default Footer
