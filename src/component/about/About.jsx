import React from 'react'
import './style.css'
function About() {
  return (
    <section className="container-fluid p-3 p-md-5 overflow-hidden">
        <div className="row">
          <div className="col-md-6">
             <div className="left mb-3">
             <img src="https://growix.peacefulqode.co.in/wp-content/uploads/2024/10/h4-about-001.webp" alt="novanex solutions" className="about-img1 w-75 rounded-4" data-aos="zoom-in" />
             <img src="https://growix.peacefulqode.co.in/wp-content/uploads/2024/10/h4-about-002.webp" alt="novanex solutions" className="about-img2 w-50 rounded-4" data-aos="zoom-in"/>
             </div>
          </div>
          <div className="col-md-6">
            <p className="fs-3 text-main" data-aos="fade-up">WHAT ABOUT US</p>
            <h1 className="fs-1 fw-bold" data-aos="fade-up">Empowering Your <br /> Growth with Proven <br /> Strategies</h1>
            <p className="fs-6" data-aos="fade-up">
            We are a team of dedicated professionals with decades of experience across various industries. Our mission is to provide innovative solutions that drive growth, efficiency, and lasting success.
            </p>
            <a href='/about-us' className="btn btn-primary px-5 rounded-pill p-3">Know More</a>
          </div>
        </div>
    </section>
  )
}

export default About