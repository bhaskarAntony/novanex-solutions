import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';
import Contact from '../../component/contactSection/Contact';

function Career() {
    const data = {
        title: "Career Counseling Services",
        icon: "bi bi-lightbulb",
        image: 'https://img.freepik.com/premium-photo/human-resources-recruitment-people-networking-concept_31965-11229.jpg?semt=ais_hybrid',
        description: "Expert guidance to help individuals navigate their career paths and achieve their professional goals.",
        heroTitle: "Navigate Your Career Path with Confidence",
        d2: 'At Novanex Solutions, our career counseling services provide personalized guidance to help individuals identify their strengths, explore career opportunities, and make informed decisions for a successful future.',
        content: [
            {
                title: "Personalized Career Planning",
                icon: "bi bi-person",
                description: "Receive tailored career plans based on your skills, interests, and aspirations."
            },
            {
                title: "Skill Assessment",
                icon: "bi bi-bar-chart",
                description: "Identify your core strengths and areas for improvement with detailed assessments."
            },
            {
                title: "Educational Guidance",
                icon: "bi bi-book",
                description: "Choose the right courses and certifications to align with your career goals."
            },
            {
                title: "Industry Insights",
                icon: "bi bi-search",
                description: "Stay informed about industry trends and in-demand skills for better career opportunities."
            },
            {
                title: "Mentorship Programs",
                icon: "bi bi-people",
                description: "Connect with experienced professionals to gain valuable insights and advice."
            },
            {
                title: "Resume Building & Interview Prep",
                icon: "bi bi-file-text",
                description: "Enhance your job application with expert resume writing and interview preparation."
            }
        ]
    };

    return (
        <section className="services-page">

            {/* Helmet for SEO Meta Tags */}
            <Helmet>
                <title>Career Counseling Services | Professional Career Guidance | Novanex Solutions</title>
                <meta name="description" content="Get expert career counseling services at Novanex Solutions. Personalized career planning, skill assessment, mentorship programs, resume building, and interview preparation to help you achieve your dream job." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Career counseling, professional guidance, skill assessment, resume building, interview preparation, mentorship, job opportunities, career planning, educational guidance, industry insights, Novanex Solutions" />
                <link rel="canonical" href="https://www.novanexsolutions.co.in/services/career-councelling" />

                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Career Counseling Services | Professional Career Guidance | Novanex Solutions" />
                <meta property="og:description" content="Navigate your career path with expert guidance. Get personalized career planning, mentorship, resume building, and interview preparation." />
                <meta property="og:image" content="https://www.novanexsolutions.co.in/assets/career-counseling.jpg" />
                <meta property="og:url" content="https://www.novanexsolutions.co.in/services/career-councelling" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Career Counseling Services | Professional Career Guidance | Novanex Solutions" />
                <meta name="twitter:description" content="Get expert career counseling services at Novanex Solutions. Personalized career planning, mentorship, resume building, and interview preparation." />
                <meta name="twitter:image" content="https://www.novanexsolutions.co.in/assets/career-counseling.jpg" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">{`
                  {
                    "@context": "https://schema.org",
                    "@type": "EducationalOrganization",
                    "name": "Novanex Solutions",
                    "url": "https://www.novanexsolutions.co.in/services/career-councelling",
                    "logo": "https://www.novanexsolutions.co.in/logo.png",
                    "description": "Novanex Solutions provides expert career counseling services including personalized career planning, mentorship, resume building, and interview preparation.",
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

            <section className="career-details">
                <h2>Why Choose Our Career Counseling Services?</h2>
                <p>Our expert career guidance helps individuals make informed decisions, develop the right skills, and achieve professional success.</p>

                <h3>Key Benefits of Our Career Counseling</h3>
                <ul>
                    <li>✔️ Personalized career plans based on individual strengths</li>
                    <li>✔️ Skill assessments to identify areas for growth</li>
                    <li>✔️ Guidance on certifications and educational pathways</li>
                    <li>✔️ Industry insights to stay updated with job trends</li>
                    <li>✔️ Mentorship programs with industry professionals</li>
                    <li>✔️ Resume building and interview coaching</li>
                </ul>

                <h3>Our Career Counseling Services</h3>
                <p>We provide a structured approach to help you build a successful career.</p>

                <h4>📌 Personalized Career Planning</h4>
                <p>We offer expert career guidance tailored to your aspirations and skills.</p>

                <h4>📌 Skill Assessment & Career Tests</h4>
                <p>Evaluate your strengths with our skill assessments to identify the best career path.</p>

                <h4>📌 Resume Writing & LinkedIn Profile Optimization</h4>
                <p>Stand out in the job market with a professionally crafted resume and LinkedIn profile.</p>

                <h4>📌 Interview Preparation & Mock Interviews</h4>
                <p>Boost your confidence with expert-led mock interview sessions and coaching.</p>

                <h4>📌 Mentorship & Industry Networking</h4>
                <p>Gain valuable insights from professionals in your field and expand your professional network.</p>
            </section>

            <Your />
            <Contact />
        </section>
    );
}

export default Career;
