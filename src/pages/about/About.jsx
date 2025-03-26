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
     <meta name="keywords" content="business consulting, IT services, digital marketing, web development, corporate training, cloud computing, AI solutions, cybersecurity, project management, software development, strategic planning, data analytics, blockchain, ERP solutions, CRM consulting, mobile app development, eCommerce solutions, UI/UX design, DevOps, SaaS development, SEO, PPC advertising, content marketing, social media marketing, branding, graphic design, HR solutions, recruitment services, career counseling, placement services, HR consulting, IT staffing, startup consulting, enterprise solutions, big data, IoT, machine learning, automation, chatbot development, fintech solutions, banking technology, healthcare IT, education technology, LMS development, AR/VR solutions, augmented reality, virtual reality, cloud migration, AWS consulting, Azure solutions, Google Cloud services, cybersecurity risk assessment, penetration testing, compliance solutions, GDPR, HIPAA compliance, business intelligence, predictive analytics, workflow automation, robotic process automation, smart contract development, IT infrastructure, managed IT services, business process outsourcing, customer support solutions, offshore development, IT outsourcing, tech innovation, software maintenance, QA testing, performance optimization, web hosting solutions, network security, endpoint protection, VPN solutions, ethical hacking, vulnerability assessment, e-learning solutions, LMS platforms, industry 4.0, digital transformation, technology consulting, data privacy, IT governance, agile development, scrum methodology, DevSecOps, SAP consulting, Oracle solutions, Salesforce CRM, AI-driven solutions, custom software development, software companies in Bangalore, IT companies in Bangalore, Bangalore software firms, software outsourcing Bangalore, software training Bangalore, IT services Bangalore, tech startups Bangalore, best IT companies Bangalore, Bangalore digital marketing, software engineers Bangalore, Bangalore web development, Bangalore cloud services, Bangalore cybersecurity solutions, Bangalore app development, Bangalore tech innovation, Bangalore IT staffing, Bangalore business consulting, Bangalore software solutions" />

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
