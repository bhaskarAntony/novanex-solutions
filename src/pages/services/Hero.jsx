import React from 'react'
import './style.css'

function Hero({data}) {
  return (
   <section className="service-hero p-3 p-md-5" style={{background:` linear-gradient( #03030325, #000000), url(${data.image}) no-repeat center`}}>
        <h1 className="fs-1 fw-bold text-light"><span className="text-main">{data.title}</span> Services</h1>
        <p className="fs-6 text-light">{data.heroTitle}</p>
   </section>
  )
}

export default Hero