import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'

function Software() {
    const data =
    {
        title: "Enterprise Software Solutions",
        icon: "bi bi-building",
        image:'https://img.freepik.com/premium-photo/automation-software-technology-process-system-business-concept_628331-749.jpg?w=1060',
        description: "Scalable and reliable software solutions designed to optimize enterprise operations and productivity.",
        heroTitle: "Enhance Enterprise Efficiency with Robust Software",
        d2:'Our enterprise software solutions are designed to optimize operations, enhance productivity, and provide seamless integration across your business. Apexion Global Solutions delivers solutions that are efficient, reliable, and scalable to meet your evolving needs.',
        content: [
          {
            title: "ERP Systems",
            icon: "bi bi-clipboard-data",
            description: "Implement enterprise resource planning systems to manage resources effectively."
          },
          {
            title: "CRM Solutions",
            icon: "bi bi-people",
            description: "Manage customer relationships with tailored CRM software solutions."
          },
          {
            title: "Supply Chain Management",
            icon: "bi bi-truck",
            description: "Optimize supply chain operations for better efficiency and reduced costs."
          },
          {
            title: "Data Management",
            icon: "bi bi-folder-fill",
            description: "Organize and manage data securely for enhanced insights and decision-making."
          },
          {
            title: "HR Management Software",
            icon: "bi bi-person-badge-fill",
            description: "Automate HR tasks to streamline employee management and payroll processing."
          },
          {
            title: "Business Process Automation",
            icon: "bi bi-robot",
            description: "Automate routine tasks to improve productivity and accuracy."
          }
        ]
      }
  return (
    <section className="services-page">
    <Hero data={data}/>
    <Desc data={data}/>
    <Solutions data={data}/>
    <Your/>

</section>
  )
}

export default Software