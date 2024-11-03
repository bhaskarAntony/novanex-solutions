import React from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';

function DevOps() {
  const data = {
    title: "DevOps",
    icon: "bi bi-code-slash",
    image: 'https://img.freepik.com/premium-photo/devops-methodology-development-operations-programming_220873-61166.jpg?w=1060',
    description: "Streamline your development and operations.",
    heroTitle: "Accelerating Development with DevOps Expertise",
    d2: 'Streamline development and operations with Apexion Global Solutions\' DevOps services. Our expertise in DevOps promotes collaboration, accelerates time-to-market, and ensures continuous integration and deployment across your organization.',
    content: [
      {
        title: "Continuous Integration/Continuous Deployment (CI/CD)",
        icon: "bi bi-arrow-up-right",
        description: "Automate the software delivery process to improve efficiency."
      },
      {
        title: "Infrastructure as Code (IaC)",
        icon: "bi bi-laptop-fill",
        description: "Manage and provision infrastructure through code."
      },
      {
        title: "Collaboration Tools",
        icon: "bi bi-people-fill",
        description: "Implement tools that enhance team collaboration and communication."
      },
      {
        title: "Monitoring and Logging",
        icon: "bi bi-bar-chart",
        description: "Ensure system performance and reliability with proactive monitoring."
      },
      {
        title: "Containerization",
        icon: "bi bi-box",
        description: "Utilize containers for consistent application deployment."
      },
      {
        title: "Security Integration",
        icon: "bi bi-shield-fill",
        description: "Integrate security practices throughout the DevOps lifecycle."
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

export default DevOps;
