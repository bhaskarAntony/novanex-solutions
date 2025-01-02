import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import About from '../../component/about/About';
import Why from '../../component/why/Why';
import TestimonialSlider from '../../component/testimonials/TestimonialSlider';
import Contact from '../../component/contactSection/Contact';

function AboutPage() {
   
  return (
   <section className="about">
    <div className="about-hero p-3 p-md-5">
        <h1 className="display-3 fw-bold text-light">
        <span className="text-main">Empowering</span> <br /> Innovation
        </h1>
        <p className="fs-4 text-secondary">
        Discover the story behind Novanex Solutions and our <br /> commitment to excellence.
        </p>
    </div>
    <About/>
    <Why/>
    <TestimonialSlider/>
    <Contact/>
   
      
   </section>
  )
}

export default AboutPage;