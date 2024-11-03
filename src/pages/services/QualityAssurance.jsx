import React from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';

function QualityAssurance() {
  const data = {
    title: "Quality Assurance and Testing",
    icon: "bi bi-check-circle",
    image: 'https://img.freepik.com/premium-photo/inscription-testing-virtual-display-business-medicine-modern-technology-internet-networking-concept_161452-10230.jpg?w=1060',
    description: "Ensure your software meets the highest standards.",
    heroTitle: "Ensuring Excellence Through Rigorous Testing",
    d2: 'Apexion Global Solutions is dedicated to delivering quality through our comprehensive quality assurance and testing services. Our approach ensures that your software products are reliable, secure, and meet the highest standards.',
    content: [
      {
        title: "Automated Testing",
        icon: "bi bi-gear",
        description: "Enhance testing efficiency with automated solutions."
      },
      {
        title: "Manual Testing",
        icon: "bi bi-pencil-square",
        description: "Thorough manual testing for detailed insights."
      },
      {
        title: "Performance Testing",
        icon: "bi bi-speedometer2",
        description: "Evaluate the performance and scalability of your applications."
      },
      {
        title: "Security Testing",
        icon: "bi bi-lock-fill",
        description: "Identify vulnerabilities and ensure software security."
      },
      {
        title: "User Acceptance Testing (UAT)",
        icon: "bi bi-person-check",
        description: "Verify that the software meets user requirements and expectations."
      },
      {
        title: "Test Strategy Development",
        icon: "bi bi-clipboard-check",
        description: "Create tailored testing strategies to fit your needs."
      }
    ]
  };

  return (
    <section className="services-page">
      <Hero data={data} />
      <Desc data={data} />
      <Solutions data={data} />
      <Your />
    </section>
  );
}

export default QualityAssurance;
