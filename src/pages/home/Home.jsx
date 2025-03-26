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
import Companies from '../../component/companies/Companies'

function Home() {
  return (
  <section className="home">
    <Helmet>
    <link rel="canonical" href="https://www.apexionglobalsolutions.com/" />
    <title>Novanex Solutions: Comprehensive Business Consulting and IT Services</title>

<meta name="description" content="Novanex Solutions specializes in business consulting, IT services, digital marketing, web development, corporate training, project management, and strategic planning to foster business growth." />
<meta name="keywords" content="business consulting, IT services, digital marketing, web development, corporate training, cloud computing, AI solutions, cybersecurity, project management, software development, strategic planning, data analytics, blockchain, ERP solutions, CRM consulting, mobile app development, eCommerce solutions, UI/UX design, DevOps, SaaS development, SEO, PPC advertising, content marketing, social media marketing, branding, graphic design, HR solutions, recruitment services, career counseling, placement services, HR consulting, IT staffing, startup consulting, enterprise solutions, big data, IoT, machine learning, automation, chatbot development, fintech solutions, banking technology, healthcare IT, education technology, LMS development, AR/VR solutions, augmented reality, virtual reality, cloud migration, AWS consulting, Azure solutions, Google Cloud services, cybersecurity risk assessment, penetration testing, compliance solutions, GDPR, HIPAA compliance, business intelligence, predictive analytics, workflow automation, robotic process automation, smart contract development, IT infrastructure, managed IT services, business process outsourcing, customer support solutions, offshore development, IT outsourcing, tech innovation, software maintenance, QA testing, performance optimization, web hosting solutions, network security, endpoint protection, VPN solutions, ethical hacking, vulnerability assessment, e-learning solutions, LMS platforms, industry 4.0, digital transformation, technology consulting, data privacy, IT governance, agile development, scrum methodology, DevSecOps, SAP consulting, Oracle solutions, Salesforce CRM, AI-driven solutions, custom software development, software companies in Bangalore, IT companies in Bangalore, Bangalore software firms, software outsourcing Bangalore, software training Bangalore, IT services Bangalore, tech startups Bangalore, best IT companies Bangalore, Bangalore digital marketing, software engineers Bangalore, Bangalore web development, Bangalore cloud services, Bangalore cybersecurity solutions, Bangalore app development, Bangalore tech innovation, Bangalore IT staffing, Bangalore business consulting, Bangalore software solutions" />

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
    <Companies/>
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