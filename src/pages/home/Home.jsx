import React from 'react'
import './style.css'
import Hero from '../../component/hero/Hero'
import About from '../../component/about/About'
import Services from '../../component/services/Services'
import Why from '../../component/why/Why'
import Number from '../../component/numbers/Number'
import Program from '../../component/program/Program'
import TestimonialSlider from '../../component/testimonials/TestimonialSlider'

function Home() {
  return (
  <section className="home">
    <Hero/>
    <About/>
    <Services/>
    <Why/>
    <section className="p-3 p-md-5 text-center  transform text-light">
        <h1 className="fs-1 fw-bold">Ready to Transform Your Business?</h1>
        <p className="fs-5 mt-2">Discover how our innovative solutions and expert team can help you navigate the <br /> digital landscape and achieve your business goals.</p>
        <button className="main-btn mt-3">Get Started Today  <i class="bi bi-arrow-right"></i></button>
    </section>
    {/* <Number/> */}
        <Program/>
        <TestimonialSlider/>
  </section>
  )
}

export default Home