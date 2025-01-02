import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'
import Contact from '../../component/contactSection/Contact'

function NonITtoIT() {
    const data = {
        title: "Not IT to IT Placement Support",
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
    <Hero data={data}/>
    <Desc data={data}/>
    <Solutions data={data}/>
    <Your/>
    <Contact/>

</section>
  )
}

export default NonITtoIT;