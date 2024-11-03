import React from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';

function Cybersecurity() {
  const data = {
    title: "Cybersecurity",
    icon: "bi bi-shield-lock",
    image: 'https://img.freepik.com/premium-photo/digital-shield-with-padlock-symbol-floating-platform-stylized-as-digital-network-dark-blue-circuit-background-concept-cybersecurity-3d-rendering_670147-110506.jpg?w=1060',
    description: "Protect your business with comprehensive cybersecurity solutions.",
    heroTitle: "Safeguarding Your Business with Advanced Cybersecurity",
    d2: 'Apexion Global Solutions is committed to protecting your business from digital threats. Our cybersecurity solutions are tailored to safeguard your data, prevent breaches, and ensure your business operates securely and with peace of mind.',
    content: [
      {
        title: "Threat Assessment",
        icon: "bi bi-exclamation-circle",
        description: "Identify potential vulnerabilities in your infrastructure."
      },
      {
        title: "Incident Response",
        icon: "bi bi-bug",
        description: "Quickly respond to and mitigate security incidents."
      },
      {
        title: "Network Security",
        icon: "bi bi-network",
        description: "Implement measures to protect your network from intrusions."
      },
      {
        title: "Data Protection",
        icon: "bi bi-lock-fill",
        description: "Secure sensitive information through encryption and access controls."
      },
      {
        title: "Compliance Management",
        icon: "bi bi-file-earmark-check",
        description: "Ensure adherence to industry regulations and standards."
      },
      {
        title: "Employee Training",
        icon: "bi bi-person-badge",
        description: "Educate staff on security best practices and awareness."
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

export default Cybersecurity;
