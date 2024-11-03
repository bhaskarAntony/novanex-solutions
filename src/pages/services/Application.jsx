import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'

function Application() {
    const data =
    {
        title: "Application Development (Mobile, Web, Cloud)",
        icon: "bi bi-phone",
        image:'https://img.freepik.com/premium-photo/panorama-banner-startup-company-employee-planning-user-interface-prototype-mobile-application-website-office-ux-ui-designer-brainstorm-user-friendly-interface-plan-synergic_31965-255236.jpg?w=1060',
        description: "Develop custom mobile, web, and cloud applications tailored to your business needs.",
        heroTitle: "Build Applications for a Connected World",
        d2:'Apexion Global Solutions specializes in developing robust mobile, web, and cloud applications tailored to your unique needs. Our expertise in application development brings agility and scalability, driving your business forward in today’s digital ecosystem.',
        content: [
          {
            title: "Mobile App Development",
            icon: "bi bi-phone-fill",
            description: "Create engaging and user-friendly mobile apps for iOS and Android platforms."
          },
          {
            title: "Web Application Development",
            icon: "bi bi-laptop-fill",
            description: "Develop responsive, feature-rich web applications with a focus on user experience."
          },
          {
            title: "Cloud Solutions",
            icon: "bi bi-cloud-fill",
            description: "Implement cloud-based solutions for scalability, reliability, and accessibility."
          },
          {
            title: "Custom Software",
            icon: "bi bi-pencil-square",
            description: "Design software specifically tailored to meet your unique business requirements."
          },
          {
            title: "UI/UX Design",
            icon: "bi bi-palette-fill",
            description: "Create visually appealing and user-centered interfaces for better engagement."
          },
          {
            title: "Agile Development",
            icon: "bi bi-speedometer2",
            description: "Employ agile methodologies to ensure timely delivery and adaptability."
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

export default Application