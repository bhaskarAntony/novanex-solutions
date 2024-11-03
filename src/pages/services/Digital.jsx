import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'

function Digital() {
    const data = 
        {
            title: "Digital Transformation",
            image:'https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid',
            icon: "bi bi-lightbulb",
            description: "Empowering organizations to embrace the digital era with tailored strategies that drive operational efficiency and growth.",
            heroTitle: "Transform Your Business with Digital Innovation",
            d2:'At Apexion Global Solutions, we help businesses embrace the power of digital transformation, streamlining operations and enhancing customer experiences. Our strategies are tailored to empower growth and adaptability in an ever-evolving digital landscape.',
            content: [
              {
                title: "Process Optimization",
                icon: "bi bi-gear-fill",
                description: "Streamline and enhance business operations to improve efficiency and reduce costs."
              },
              {
                title: "Digital Strategy",
                icon: "bi bi-compass",
                description: "Develop a comprehensive roadmap for digital transformation to ensure future readiness."
              },
              {
                title: "Customer Experience",
                icon: "bi bi-people-fill",
                description: "Improve customer engagement with innovative digital experiences and personalization."
              },
              {
                title: "Technology Integration",
                icon: "bi bi-link",
                description: "Integrate cutting-edge technologies to boost productivity and adaptability."
              },
              {
                title: "Data-Driven Insights",
                icon: "bi bi-bar-chart-fill",
                description: "Utilize data analytics to make informed business decisions."
              },
              {
                title: "Workforce Enablement",
                icon: "bi bi-briefcase-fill",
                description: "Equip employees with digital tools to improve productivity and collaboration."
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

export default Digital