import React from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';

function ITConsulting() {
  const data = {
    title: "IT Consulting",
    icon: "bi bi-briefcase",
    image: 'https://img.freepik.com/premium-photo/tech-startup-founder-pitching-ideas_1280275-165350.jpg?w=1060',
    description: "Expert guidance to navigate your IT challenges.",
    heroTitle: "Guiding Your Business Through IT Challenges",
    d2: 'Apexion Global Solutions offers IT consulting services designed to address your unique challenges and support growth. Our consultants bring deep industry knowledge to deliver solutions that drive efficiency and optimize your technology investments.',
    content: [
      {
        title: "IT Strategy Development",
        icon: "bi bi-target",
        description: "Align IT initiatives with your business goals."
      },
      {
        title: "Technology Assessment",
        icon: "bi bi-check-circle",
        description: "Evaluate your current technology landscape for optimization."
      },
      {
        title: "Project Management",
        icon: "bi bi-calendar-check",
        description: "Oversee IT projects to ensure timely and successful delivery."
      },
      {
        title: "Change Management",
        icon: "bi bi-arrow-right-circle",
        description: "Facilitate transitions to new technologies and processes."
      },
      {
        title: "Vendor Management",
        icon: "bi bi-person-badge",
        description: "Manage relationships with technology vendors effectively."
      },
      {
        title: "Risk Management",
        icon: "bi bi-exclamation-triangle",
        description: "Identify and mitigate risks associated with IT investments."
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

export default ITConsulting;
