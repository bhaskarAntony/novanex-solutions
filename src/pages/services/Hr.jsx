import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';
import Contact from '../../component/contactSection/Contact';

function Hr() {
    const data = {
        title: "Human Resource Consulting Services",
        icon: "bi bi-people-fill",
        image: 'https://img.freepik.com/premium-photo/customer-care-insurance-care-employees-human-resource_220873-5588.jpg?semt=ais_hybrid',
        description: "Strategic HR solutions to optimize workforce management and enhance organizational efficiency.",
        heroTitle: "Transform Your Workforce with Strategic HR Consulting",
        d2: 'Novanex Solutions offers tailored HR consulting services to help organizations attract, retain, and manage top talent effectively. From policy development to employee engagement, we deliver comprehensive HR solutions.',
        content: [
            {
                title: "Recruitment & Talent Acquisition",
                icon: "bi bi-person-plus",
                description: "Streamline hiring processes to find the best talent for your organization."
            },
            {
                title: "Employee Engagement Strategies",
                icon: "bi bi-chat-dots",
                description: "Enhance employee satisfaction and productivity with tailored engagement plans."
            },
            {
                title: "Performance Management",
                icon: "bi bi-graph-up-arrow",
                description: "Implement effective performance appraisal systems to drive results."
            },
            {
                title: "HR Policy Development",
                icon: "bi bi-file-earmark-text",
                description: "Create comprehensive HR policies that align with organizational goals."
            },
            {
                title: "Training & Development",
                icon: "bi bi-mortarboard",
                description: "Upskill your workforce with targeted training programs."
            },
            {
                title: "Workforce Planning",
                icon: "bi bi-calendar-event",
                description: "Optimize workforce resources to align with long-term organizational needs."
            }
        ]
    };

    return (
        <section className="services-page">

            {/* Helmet for SEO Meta Tags */}
            <Helmet>
                <title>HR Consulting Services | Workforce Management & Talent Solutions | Novanex Solutions</title>
                <meta name="description" content="Optimize your workforce with Novanex Solutions' HR consulting services. Get expert guidance on recruitment, employee engagement, performance management, and HR policies." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="HR consulting, human resource services, talent acquisition, employee engagement, HR policy development, workforce planning, performance management, training and development, Novanex Solutions" />
                <link rel="canonical" href="https://www.novanexsolutions.co.in/services/HR" />

                {/* Open Graph for Social Media */}
                <meta property="og:title" content="HR Consulting Services | Workforce Management & Talent Solutions | Novanex Solutions" />
                <meta property="og:description" content="Enhance your workforce with strategic HR consulting services. Get expert guidance on hiring, policies, training, and workforce planning." />
                <meta property="og:image" content="https://www.novanexsolutions.co.in/assets/hr-consulting.jpg" />
                <meta property="og:url" content="https://www.novanexsolutions.co.in/services/HR" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="HR Consulting Services | Workforce Management & Talent Solutions | Novanex Solutions" />
                <meta name="twitter:description" content="Expert HR consulting services to enhance workforce efficiency, recruitment, employee engagement, and performance management." />
                <meta name="twitter:image" content="https://www.novanexsolutions.co.in/assets/hr-consulting.jpg" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">{`
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Novanex Solutions",
                    "url": "https://www.novanexsolutions.co.in/services/HR",
                    "logo": "https://www.novanexsolutions.co.in/logo.png",
                    "description": "Novanex Solutions provides expert HR consulting services including recruitment, workforce planning, employee engagement, and policy development.",
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

            <section className="hr-details">
                <h2>Why Choose Our HR Consulting Services?</h2>
                <p>We provide customized HR solutions to optimize workforce efficiency, improve employee engagement, and enhance talent acquisition strategies.</p>

                <h3>Key Benefits of Our HR Services</h3>
                <ul>
                    <li>✔️ Strategic workforce planning for long-term success</li>
                    <li>✔️ Efficient recruitment and talent acquisition solutions</li>
                    <li>✔️ Employee engagement strategies to boost morale and retention</li>
                    <li>✔️ HR policy development to ensure compliance and efficiency</li>
                    <li>✔️ Performance management frameworks for improved productivity</li>
                    <li>✔️ Training & development programs to upskill employees</li>
                </ul>

                <h3>Our Comprehensive HR Solutions</h3>
                <p>Our structured HR services cater to businesses of all sizes, helping them build a strong and efficient workforce.</p>

                <h4>📌 Talent Acquisition & Recruitment</h4>
                <p>Identify and hire the best talent to meet your business needs effectively.</p>

                <h4>📌 Employee Training & Skill Development</h4>
                <p>Enhance employee competencies with targeted training and development programs.</p>

                <h4>📌 Performance & Workforce Management</h4>
                <p>Implement strategies to improve employee productivity and organizational growth.</p>

                <h4>📌 HR Policy & Compliance Management</h4>
                <p>Develop and implement HR policies that align with industry standards and legal compliance.</p>

                <h4>📌 Employee Engagement & Retention</h4>
                <p>Boost workplace satisfaction with effective engagement initiatives and feedback mechanisms.</p>
            </section>

            <Your />
            <Contact />
        </section>
    );
}

export default Hr;
