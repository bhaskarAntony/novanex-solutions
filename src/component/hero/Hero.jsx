import React from 'react'
import './style.css'

function Hero() {
  return (
   <section className='hero p-3 p-md-5'>
       <div className="row align-items-center">
        <div className="col-md-8">
        <h1 className="display-5 fw-bold">
        Elevate Your Business with <br />
       <span className="text-main"> Apexion Global Solutions</span>
        </h1>
        <p className="fs-6 text-secondary">
        Transform your operations with our expert solutions in
digital transformation, business consulting, and more.
        </p>
        <button className="main-btn px-5">Explore Our Services</button>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img src="https://img.freepik.com/free-vector/illustration-technology_53876-36915.jpg?t=st=1731908067~exp=1731911667~hmac=59250846d31f6a05dbfe950388585fd14a3503e3febe8df0b3398bb166b4fb85&w=900" alt="" className="w-100 mt-4 mt-md-0" />
       </div>
       </div>
    
   </section>
  )
}

export default Hero