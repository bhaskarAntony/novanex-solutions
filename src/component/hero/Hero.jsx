import React from 'react'
import './style.css'

function Hero() {
  return (
   <section className='hero p-3 p-md-5'>
       <div className="row align-items-center">
        <div className="col-md-8">
        <h1 className="display-5 fw-bold">
        Apexion Global Solutions:  <br />
       <span className="text-main"> Digital Transformation & IT Services</span>
        </h1>
          <h2 className='fs-3'>Empower Your Business with Innovative IT Solutions <br /> and Digital Transformation Services</h2>
       
        <p className="fs-6 text-secondary">
        Welcome to Apexion Global Solutions – your one-stop destination for digital transformation and advanced IT services. From cloud computing to cybersecurity, we deliver innovative solutions that help businesses thrive in the digital era.
        </p>
        <button className="main-btn px-5">Explore Our Services</button>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img src="https://img.freepik.com/free-vector/illustration-technology_53876-36915.jpg?t=st=1731908067~exp=1731911667~hmac=59250846d31f6a05dbfe950388585fd14a3503e3febe8df0b3398bb166b4fb85&w=900" alt="apexion global solutions hero section image" className="w-100 mt-4 mt-md-0" />
       </div>  
       </div>
    
   </section>
  )
}

export default Hero