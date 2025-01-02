import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'
import Contact from '../../component/contactSection/Contact'

function Software() {
  const data = {
    title: "Software Training Services",
    icon: "bi bi-laptop",
    image: 'https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?semt=ais_hybrid',
    description: "Comprehensive software training programs designed to empower individuals with the latest technical skills.",
    heroTitle: "Master Cutting-Edge Technologies with Expert Training",
    d2: 'At Novanex Solutions, our software training services equip professionals and students with in-demand technical skills. We provide hands-on training in the latest tools and technologies to prepare you for the competitive IT landscape.',
    content: [
        {
            title: "Programming Languages",
            icon: "bi bi-code-slash",
            description: "Learn popular programming languages like Python, Java, JavaScript, and more with practical, project-based sessions."
        },
        {
            title: "Web Development",
            icon: "bi bi-window-desktop",
            description: "Gain expertise in front-end and back-end web development using frameworks like React, Angular, and Node.js."
        },
        {
            title: "Data Science & Analytics",
            icon: "bi bi-graph-up",
            description: "Master data analysis, visualization, and machine learning techniques to unlock career opportunities in data-driven industries."
        },
        {
            title: "Cloud Computing",
            icon: "bi bi-cloud",
            description: "Build proficiency in cloud platforms like AWS, Azure, and Google Cloud for scalable and secure solutions."
        },
        {
            title: "Cybersecurity",
            icon: "bi bi-shield-lock",
            description: "Learn how to secure digital assets with training in cybersecurity best practices and tools."
        },
        {
            title: "DevOps & Agile",
            icon: "bi bi-tools",
            description: "Understand the principles of DevOps and Agile to streamline development and operations processes."
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

export default Software