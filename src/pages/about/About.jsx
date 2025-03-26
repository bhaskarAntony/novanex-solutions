import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import About from '../../component/about/About';
import Why from '../../component/why/Why';
import TestimonialSlider from '../../component/testimonials/TestimonialSlider';
import Contact from '../../component/contactSection/Contact';

function AboutPage() {
  return (
    <section className="about">
      <Helmet>
        <title>About Novanex Solutions | IT Training & Job Placement Experts</title>
        <meta name="description" content="Learn about Novanex Solutions – a top IT training & job placement company in Bangalore. We empower students & professionals with hands-on industry skills." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Novanex Solutions, IT training Bangalore, job placement services, software courses, IT career transition, coding bootcamp, non-IT to IT jobs, career counseling, tech training, software development training, cloud computing courses, AI and ML training, industry expert trainers, HR consulting, placement support, IT jobs in Bangalore, best IT institute, job-oriented courses, career growth solutions, corporate training, software upskilling, IT career guidance" />
        <link rel="canonical" href="https://www.novanexsolutions.co.in/about" />
        
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="About Novanex Solutions | IT Training & Job Placement Experts" />
        <meta property="og:description" content="Discover how Novanex Solutions empowers careers with industry-focused IT training & job placements in Bangalore." />
        <meta property="og:image" content="https://growix.peacefulqode.co.in/wp-content/uploads/2024/10/h4-about-001.webp" />
        <meta property="og:url" content="https://www.novanexsolutions.co.in/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Novanex Solutions | IT Training & Job Placement Experts" />
        <meta name="twitter:description" content="Learn more about Novanex Solutions and how we help professionals build successful IT careers." />
        <meta name="twitter:image" content="https://www.novanexsolutions.co.in/assets/about-banner.jpg" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Novanex Solutions",
            "url": "https://www.novanexsolutions.co.in/aboutus",
            "logo": "https://www.novanexsolutions.co.in/logo.png",
            "description": "Novanex Solutions is a premier IT training and job placement company in Bangalore, providing expert-led courses and career counseling.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Tech Park, Electronic City",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560100",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 9876543210",
              "contactType": "customer service"
            }
          }
        `}</script>
      </Helmet>

      {/* About Page Content */}
      <div className="about-hero p-3 p-md-5">
        <h1 className="display-3 fw-bold text-light">
          <span className="text-main" data-aos="fade-up">Empowering</span> <br /> Innovation
        </h1>
        <p className="fs-4 text-secondary" data-aos="fade-up">
          Discover the story behind Novanex Solutions and our <br /> commitment to excellence.
        </p>
      </div>
      <About />
      <Why />
      <TestimonialSlider />
      <Contact />
    </section>
  );
}

export default AboutPage;
