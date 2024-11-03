import React from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Solutions from './Solutions';
import Your from './Your';

function CloudComputing() {
  const data = {
    title: "Cloud Computing (AWS, Azure, Google Cloud)",
    icon: "bi bi-cloud",
    image: 'https://img.freepik.com/premium-photo/cloud-computing-power-enhance-cloud-strategy-business-faas_31965-626463.jpg?w=1060',
    description: "Leverage cloud solutions for enhanced efficiency and scalability.",
    heroTitle: "Scaling Your Business with Cloud Computing Solutions",
    d2: 'Our cloud computing services help businesses leverage the full potential of AWS, Azure, and Google Cloud. Apexion Global Solutions offers solutions that enhance agility, drive efficiency, and enable seamless scalability for your business.',
    content: [
      {
        title: "Infrastructure as a Service (IaaS)",
        icon: "bi bi-hdd-stack",
        description: "Utilize virtualized computing resources over the internet."
      },
      {
        title: "Platform as a Service (PaaS)",
        icon: "bi bi-box-fill",
        description: "Develop and manage applications without the complexity of infrastructure."
      },
      {
        title: "Software as a Service (SaaS)",
        icon: "bi bi-app",
        description: "Access software applications over the internet on a subscription basis."
      },
      {
        title: "Cloud Storage Solutions",
        icon: "bi bi-cloud-arrow-up",
        description: "Store and manage data in the cloud securely."
      },
      {
        title: "Disaster Recovery",
        icon: "bi bi-shield",
        description: "Ensure business continuity with cloud-based backup solutions."
      },
      {
        title: "Cloud Migration",
        icon: "bi bi-arrow-right-circle",
        description: "Seamlessly transition your existing applications to the cloud."
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

export default CloudComputing;
