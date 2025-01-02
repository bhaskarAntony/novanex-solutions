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
import Contact from '../../component/contactSection/Contact'

function Home() {
  return (
  <section className="home">
    <Helmet>
    <link rel="canonical" href="https://www.apexionglobalsolutions.com/" />
    <title>Novanex Solutions: Comprehensive Business Consulting and IT Services</title>

<meta name="description" content="Novanex Solutions specializes in business consulting, IT services, digital marketing, web development, corporate training, project management, and strategic planning to foster business growth." />
<meta name="keywords" content="business consulting, IT services, digital marketing, web development, corporate training, project management, strategic planning, cloud solutions, cybersecurity" />
<meta name="author" content="Novanex Solutions" />
<meta name="robots" content="index, follow" />

<meta property="og:title" content="Novanex Solutions: Comprehensive Business Consulting and IT Services" />
<meta property="og:description" content="Empowering businesses with tailored solutions in consulting, IT services, digital marketing, web development, and more." />
<meta property="og:url" content="https://www.novanexsolutions.com/" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.novanexsolutions.com/images/og-image.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Novanex Solutions: Comprehensive Business Consulting and IT Services" />
<meta name="twitter:description" content="Discover our expertise in consulting, IT services, digital marketing, web development, and more to accelerate your business." />
<meta name="twitter:image" content="https://www.novanexsolutions.com/images/twitter-image.jpg" />

      </Helmet>
    <Hero/>
    <About/>
    <Services/>
    <Why/>
    <section className="p-3 p-md-5 text-center  transform text-light">
        <h1 className="fs-1 fw-bold" data-aos="fade-up">Contact Us for a Free Consultation</h1>
        <p className="fs-5 mt-2" data-aos="fade-up">"Ready to transform your business? Get in touch with Novanex Solutions to discuss your IT needs and discover how we can help you achieve your goals."</p>
        <button className="main-btn mt-3" data-aos="fade-up">Get Started Today  <i class="bi bi-arrow-right"></i></button>
    </section>
    {/* <Number/> */}
        <Program/>
        <TestimonialSlider/>
      <Contact/>
  </section>
  )
}

export default Home