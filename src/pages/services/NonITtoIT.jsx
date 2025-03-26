import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';
import Contact from '../../component/contactSection/Contact';

function NonITtoIT() {
    const data = {
        title: "Non-IT to IT Career Transition | Placement Support & Training",
        icon: "bi bi-shuffle",
        image: 'https://img.freepik.com/premium-photo/modern-business-men-analyzing-stock-market-data-while-working-office_484651-13180.jpg?semt=ais_hybrid',
        description: "Seamless transition programs to help non-IT professionals enter the IT industry with confidence.",
        heroTitle: "Bridge the Gap from Non-IT to IT with Our Expert Support",
        d2: 'At Novanex Solutions, we provide specialized training and support to help professionals from non-IT backgrounds successfully transition to IT roles. Gain the necessary skills and confidence to excel in the tech industry.',
        content: [
            {
                title: "Skill Gap Analysis",
                icon: "bi bi-binoculars",
                description: "Identify key areas for improvement to prepare for IT roles."
            },
            {
                title: "Technical Training Programs",
                icon: "bi bi-code",
                description: "Learn in-demand IT skills like programming, web development, and data analytics."
            },
            {
                title: "Industry-Specific Guidance",
                icon: "bi bi-compass",
                description: "Understand IT industry expectations and align your skills accordingly."
            },
            {
                title: "Mentorship Programs",
                icon: "bi bi-people",
                description: "Gain insights and advice from experienced IT professionals."
            },
            {
                title: "Placement Assistance",
                icon: "bi bi-briefcase-fill",
                description: "Receive support in securing IT jobs through mock interviews and placement drives."
            },
            {
                title: "Confidence Building Sessions",
                icon: "bi bi-heart",
                description: "Boost your confidence with sessions focused on communication and problem-solving skills."
            }
        ]
    };

    return (
        <section className="services-page">

            {/* Helmet for SEO Meta Tags */}
            <Helmet>
                <title>Non-IT to IT Career Transition | Placement Support & Training</title>
                <meta name="description" content="Looking to switch from a non-IT to an IT career? Our expert training and placement support help professionals transition smoothly into the tech industry." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Non-IT to IT transition, IT training, career switch to IT, technical training, programming courses, IT placement support, career transformation, IT jobs for non-IT professionals" />
                <link rel="canonical" href="https://www.novanexsolutions.co.in/services/transform" />

                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Non-IT to IT Career Transition | Placement Support & Training" />
                <meta property="og:description" content="Transform your career from non-IT to IT with expert training, mentorship, and job placement assistance." />
                <meta property="og:image" content="https://www.novanexsolutions.co.in/assets/nonit-to-it.jpg" />
                <meta property="og:url" content="https://www.novanexsolutions.co.in/services/transform" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Non-IT to IT Career Transition | Placement Support & Training" />
                <meta name="twitter:description" content="Upskill and switch to an IT career with expert training and placement support from Novanex Solutions." />
                <meta name="twitter:image" content="https://www.novanexsolutions.co.in/assets/nonit-to-it.jpg" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">{`
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Novanex Solutions",
                    "url": "https://www.novanexsolutions.co.in/services/transform",
                    "logo": "https://www.novanexsolutions.co.in/logo.png",
                    "description": "Novanex Solutions helps professionals transition from non-IT to IT careers with expert training, industry mentorship, and job placement assistance.",
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

            <section className="nonit-to-it-details">
                <h2>Why Transition from Non-IT to IT?</h2>
                <p>The IT industry offers high-paying jobs, career stability, and endless growth opportunities. If you're from a non-IT background, we can help you make a seamless transition into tech.</p>

                <h3>Key Benefits of Our Program</h3>
                <ul>
                    <li>✔️ **In-Demand IT Training** – Learn programming, web development, data analytics, and more</li>
                    <li>✔️ **Career Guidance & Mentorship** – Get expert advice from IT professionals</li>
                    <li>✔️ **Placement Support** – Mock interviews, resume building, and job referrals</li>
                    <li>✔️ **Hands-On Learning** – Work on real-world projects to build practical experience</li>
                </ul>

                <h3>Our Career Transition Roadmap</h3>
                <p>Our structured program ensures that you gain the right skills and confidence to land an IT job.</p>

                <h4>📌 Step 1: Skill Gap Analysis</h4>
                <p>We evaluate your current skill set and create a customized learning path.</p>

                <h4>📌 Step 2: Technical Training</h4>
                <p>Gain proficiency in IT skills like coding, web development, and databases.</p>

                <h4>📌 Step 3: Industry Guidance</h4>
                <p>Understand the expectations of IT employers and tailor your resume accordingly.</p>

                <h4>📌 Step 4: Mentorship & Networking</h4>
                <p>Receive mentorship from experienced IT professionals and expand your network.</p>

                <h4>📌 Step 5: Placement Support</h4>
                <p>Participate in mock interviews, resume workshops, and job placement drives.</p>
            </section>

            <Your />
            <Contact />
        </section>
    );
}

export default NonITtoIT;
