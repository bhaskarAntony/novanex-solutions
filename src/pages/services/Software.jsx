import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';
import Contact from '../../component/contactSection/Contact';

function Software() {
  const data = {
    title: "Software Training Services",
    icon: "bi bi-laptop",
    image: 'https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?semt=ais_hybrid',
    description: "Comprehensive software training programs designed to empower individuals with the latest technical skills.",
    heroTitle: "Master Cutting-Edge Technologies with Expert Training",
    d2: 'At Novanex Solutions, our software training services equip professionals and students with in-demand technical skills. We provide hands-on training in the latest tools and technologies to prepare you for the competitive IT landscape.',
    content: [
      {
        title: "Programming Languages",
        icon: "bi bi-code-slash",
        description: "Learn popular programming languages like Python, Java, JavaScript, and more with practical, project-based sessions."
      },
      {
        title: "Web Development",
        icon: "bi bi-window-desktop",
        description: "Gain expertise in front-end and back-end web development using frameworks like React, Angular, and Node.js."
      },
      {
        title: "Data Science & Analytics",
        icon: "bi bi-graph-up",
        description: "Master data analysis, visualization, and machine learning techniques to unlock career opportunities in data-driven industries."
      },
      {
        title: "Cloud Computing",
        icon: "bi bi-cloud",
        description: "Build proficiency in cloud platforms like AWS, Azure, and Google Cloud for scalable and secure solutions."
      },
      {
        title: "Cybersecurity",
        icon: "bi bi-shield-lock",
        description: "Learn how to secure digital assets with training in cybersecurity best practices and tools."
      },
      {
        title: "DevOps & Agile",
        icon: "bi bi-tools",
        description: "Understand the principles of DevOps and Agile to streamline development and operations processes."
      }
    ]
  };

  return (
    <section className="services-page">
      
      {/* Helmet for SEO Meta Tags */}
      <Helmet>
        <title>Software Training Services | IT Courses & Certification | Novanex Solutions</title>
        <meta name="description" content="Join Novanex Solutions for expert-led software training programs in Python, Java, Web Development, Cloud Computing, Data Science, Cybersecurity, and more. Gain job-ready skills with hands-on learning." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Software training, IT courses, Novanex Solutions, coding bootcamp, Python training, JavaScript courses, AWS certification, data science training, cloud computing, DevOps training, cybersecurity certification, web development training, IT career, job-oriented courses" />
        <link rel="canonical" href="https://www.novanexsolutions.co.in/services/software-training" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Software Training Services | IT Courses & Certification | Novanex Solutions" />
        <meta property="og:description" content="Master software skills with expert training at Novanex Solutions. Courses in programming, data science, cybersecurity, and cloud computing." />
        <meta property="og:image" content="https://www.novanexsolutions.co.in/assets/software-training.jpg" />
        <meta property="og:url" content="https://www.novanexsolutions.co.in/services/software-training" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Training Services | IT Courses & Certification | Novanex Solutions" />
        <meta name="twitter:description" content="Join Novanex Solutions for expert-led software training programs. Learn Python, Java, Cloud Computing, and more." />
        <meta name="twitter:image" content="https://www.novanexsolutions.co.in/assets/software-training.jpg" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Novanex Solutions",
            "url": "https://www.novanexsolutions.co.in/services/software-training",
            "logo": "https://www.novanexsolutions.co.in/logo.png",
            "description": "Novanex Solutions offers industry-relevant software training programs in IT fields like cloud computing, data science, and programming.",
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

      {/* Page Content with SEO-Optimized Headings */}
      <Hero data={data} />
      <Desc data={data} />
      <Solutions data={data} />

      <section className="training-details">
        <h2>Why Choose Our Software Training Services?</h2>
        <p>Our expert-led training programs help professionals and students gain industry-ready skills through hands-on learning.</p>
        
        <h3>Key Features of Our Training Programs</h3>
        <ul>
          <li>✔️ Hands-on Learning with Real-world Projects</li>
          <li>✔️ Expert Instructors with Industry Experience</li>
          <li>✔️ Certification to Boost Your Resume</li>
          <li>✔️ Placement Assistance for Job Readiness</li>
          <li>✔️ Flexible Learning Options – Online & Offline</li>
        </ul>

        <h3>Our Software Training Courses</h3>
        <p>Explore a wide range of software training courses designed to help you succeed in your IT career.</p>
        
        <h4>📌 Programming & Development</h4>
        <p>Gain expertise in <strong>Python, Java, JavaScript, and more</strong> through hands-on training and real-world applications.</p>

        <h4>📌 Web Development</h4>
        <p>Master <strong>React.js, Angular, and Node.js</strong> for building modern web applications.</p>

        <h4>📌 Cloud Computing</h4>
        <p>Get certified in <strong>AWS, Azure, and Google Cloud</strong> with expert training.</p>

        <h4>📌 Cybersecurity</h4>
        <p>Learn how to secure applications and networks with the latest cybersecurity techniques.</p>

        <h4>📌 Data Science & Machine Learning</h4>
        <p>Master <strong>data visualization, machine learning, and analytics</strong> with industry-standard tools.</p>
      </section>

      <Your />
      <Contact />
    </section>
  );
}

export default Software;
