import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'
import Contact from '../../component/contactSection/Contact'

function Hr() {
    const data = {
        title: "Human Resource Consulting Services",
        icon: "bi bi-people-fill",
        image: 'https://img.freepik.com/premium-photo/customer-care-insurance-care-employees-human-resource_220873-5588.jpg?semt=ais_hybrid',
        description: "Strategic HR solutions to optimize workforce management and enhance organizational efficiency.",
        heroTitle: "Transform Your Workforce with Strategic HR Consulting",
        d2: 'Novanex Solutions offers tailored HR consulting services to help organizations attract, retain, and manage top talent effectively. From policy development to employee engagement, we deliver comprehensive HR solutions.',
        content: [
            {
                title: "Recruitment & Talent Acquisition",
                icon: "bi bi-person-plus",
                description: "Streamline hiring processes to find the best talent for your organization."
            },
            {
                title: "Employee Engagement Strategies",
                icon: "bi bi-chat-dots",
                description: "Enhance employee satisfaction and productivity with tailored engagement plans."
            },
            {
                title: "Performance Management",
                icon: "bi bi-graph-up-arrow",
                description: "Implement effective performance appraisal systems to drive results."
            },
            {
                title: "HR Policy Development",
                icon: "bi bi-file-earmark-text",
                description: "Create comprehensive HR policies that align with organizational goals."
            },
            {
                title: "Training & Development",
                icon: "bi bi-mortarboard",
                description: "Upskill your workforce with targeted training programs."
            },
            {
                title: "Workforce Planning",
                icon: "bi bi-calendar-event",
                description: "Optimize workforce resources to align with long-term organizational needs."
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

export default Hr;