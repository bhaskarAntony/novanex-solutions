import React from 'react'
import './style.css'

function Hero() {
  return (
   <section className='hero p-3 p-md-5'>
       <div className="row align-items-center text-white">
        <div className="col-md-8">
        <h1 className="display-5 fw-bold">
        Apexion Global Solutions:  <br />
       <span className="text-warning"> Digital Transformation & IT Services</span>
        </h1>
          <h2 className='fs-3'>Empower Your Business with Innovative IT Solutions <br /> and Digital Transformation Services</h2>
       
        <p className="fs-6 text-secondary">
        Welcome to Apexion Global Solutions – your one-stop destination for digital transformation and advanced IT services. From cloud computing to cybersecurity, we deliver innovative solutions that help businesses thrive in the digital era.
        </p>
        <button className="btn btn-light px-5">Explore Our Services</button>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595845.jpg?t=st=1733572958~exp=1733576558~hmac=364ad70b34a011ca5578af2118ffa4c2ea57f23b6c0ad6aee1348b1605b5c53b&w=900" className="w-100 mt-4 mt-md-0" />
       </div>  
       </div>
    
   </section>
  )
}

export default Hero