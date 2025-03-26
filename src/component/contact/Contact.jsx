import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../contactSection/Contact';
import './style.css';

function ContactPage() {
  return (
    <div>
      {/* Helmet for SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Novanex Solutions - Get in Touch Today</title>
        <meta
          name="description"
          content="Have questions? Contact Novanex Solutions today. We are here to assist you with IT consulting, business solutions, and digital transformation."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="contact Novanex Solutions, IT consulting, business solutions, digital transformation, get in touch" />
        <link rel="canonical" href="https://www.novanexsolutions.co.in/contact-us" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Contact Us | Novanex Solutions - Get in Touch Today" />
        <meta property="og:description" content="Reach out to Novanex Solutions for expert IT consulting, business solutions, and digital transformation support." />
        <meta property="og:image" content="https://www.novanexsolutions.co.in/assets/contact-us.jpg" />
        <meta property="og:url" content="https://www.novanexsolutions.co.in/contact-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Novanex Solutions - Get in Touch Today" />
        <meta name="twitter:description" content="Contact Novanex Solutions for expert IT consulting, business solutions, and more." />
        <meta name="twitter:image" content="https://www.novanexsolutions.co.in/assets/contact-us.jpg" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Novanex Solutions",
            "url": "https://www.novanexsolutions.co.in/contact-us",
            "logo": "https://www.novanexsolutions.co.in/logo.png",
            "description": "Contact Novanex Solutions for IT consulting, business solutions, and digital transformation.",
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

      {/* Contact Section */}
      <div className="section contact p-3 p-md-5 text-center">
        <h1 className="fs-1 fw-bold text-light" data-aos="fade-up">Let's Connect</h1>
        <p className="fs-5 text-light" data-aos="fade-up">
          We're here to listen, understand your needs, and provide tailored solutions. Reach out to us and let's start a
          conversation about how we can support your business goals.
        </p>
      </div>

      {/* Contact Form Component */}
      <Contact />

      {/* Google Maps Section for Location & SEO */}
      <div className="map-container my-5">
        <iframe
          title="Novanex Solutions Location"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=Electronic+City+Bangalore&key=YOUR_GOOGLE_MAPS_API_KEY"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
