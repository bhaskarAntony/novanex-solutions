import React from 'react'
import './style.css'
import Hero from '../../component/hero/Hero'
import About from '../../component/about/About'
import Services from '../../component/services/Services'
import Why from '../../component/why/Why'
import Number from '../../component/numbers/Number'
import Program from '../../component/program/Program'
import TestimonialSlider from '../../component/testimonials/TestimonialSlider'
import { Helmet } from 'react-helmet'

function Home() {
  return (
  <section className="home">
    <Helmet>
        <title>Apexion Global Solutions: Driving Digital Transformation with Advanced IT Services</title>
        <meta name="description" content="Apexion Global Solutions specializes in digital transformation, AI, cloud computing, application development, enterprise solutions, and IT consulting. Elevate your business with innovative, secure, and scalable technology solutions tailored to your needs." />
        <meta name="keywords" content="digital transformation, IT solutions, AI services, cloud computing, enterprise software, application development, IT consulting, cybersecurity, DevOps, quality assurance" />
        <meta name="author" content="Apexion Global Solutions" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Apexion Global Solutions: Driving Digital Transformation with Advanced IT Services" />
        <meta property="og:description" content="Transform your business with cutting-edge IT solutions from Apexion Global Solutions. We offer expertise in AI, cloud computing, application development, and more." />
        <meta property="og:url" content="https://www.apexionglobalsolutions.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.apexionglobalsolutions.com/images/homepage-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apexion Global Solutions: Transforming Businesses with IT Services" />
        <meta name="twitter:description" content="Explore cutting-edge IT services, including digital transformation, AI, cloud solutions, and enterprise software with Apexion Global Solutions." />
        <meta name="twitter:image" content="https://www.apexionglobalsolutions.com/images/twitter-image-home.jpg" />
      </Helmet>
    <Hero/>
    <About/>
    <Services/>
    <Why/>
    <section className="p-3 p-md-5 text-center  transform text-light">
        <h1 className="fs-1 fw-bold">Contact Us for a Free Consultation</h1>
        <p className="fs-5 mt-2">"Ready to transform your business? Get in touch with Apexion Global Solutions to discuss your IT needs and discover how we can help you achieve your goals."</p>
        <button className="main-btn mt-3">Get Started Today  <i class="bi bi-arrow-right"></i></button>
    </section>
    {/* <Number/> */}
        <Program/>
        <TestimonialSlider/>
  </section>
  )
}

export default Home