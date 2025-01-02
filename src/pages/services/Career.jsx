import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'
import Contact from '../../component/contactSection/Contact'

function Career() {
    const data = {
        title: "Career Counseling Services",
        icon: "bi bi-lightbulb",
        image: 'https://img.freepik.com/premium-photo/human-resources-recruitment-people-networking-concept_31965-11229.jpg?semt=ais_hybrid',
        description: "Expert guidance to help individuals navigate their career paths and achieve their professional goals.",
        heroTitle: "Navigate Your Career Path with Confidence",
        d2: 'At Novanex Solutions, our career counseling services provide personalized guidance to help individuals identify their strengths, explore career opportunities, and make informed decisions for a successful future.',
        content: [
            {
                title: "Personalized Career Planning",
                icon: "bi bi-person",
                description: "Receive tailored career plans based on your skills, interests, and aspirations."
            },
            {
                title: "Skill Assessment",
                icon: "bi bi-bar-chart",
                description: "Identify your core strengths and areas for improvement with detailed assessments."
            },
            {
                title: "Educational Guidance",
                icon: "bi bi-book",
                description: "Choose the right courses and certifications to align with your career goals."
            },
            {
                title: "Industry Insights",
                icon: "bi bi-search",
                description: "Stay informed about industry trends and in-demand skills for better career opportunities."
            },
            {
                title: "Mentorship Programs",
                icon: "bi bi-people",
                description: "Connect with experienced professionals to gain valuable insights and advice."
            },
            {
                title: "Resume Building & Interview Prep",
                icon: "bi bi-file-text",
                description: "Enhance your job application with expert resume writing and interview preparation."
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

export default Career