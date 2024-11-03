import React from 'react'
import './style.css'

function Hero() {
  return (
   <section className='hero p-3 p-md-5'>
        <h1 className="display-3 fw-bold">
        Elevate Your Business with <br />
       <span className="text-main"> Apexion Global Solutions</span>
        </h1>
        <p className="fs-5 text-secondary">
        Transform your operations with our expert solutions in
digital transformation, business consulting, and more.
        </p>
        <button className="main-btn px-5">Explore Our Servcies</button>
   </section>
  )
}

export default Hero