import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'

function Artificial() {
    const data =
    {
        title: "Artificial Intelligence and Machine Learning",
        icon: "bi bi-brain",
        image:'https://img.freepik.com/premium-photo/business-man-using-app-mobile-chat-artificial-intelligence-designed-prompt-ai-process-by-algorothm-making-choice-fot-business_40313-907.jpg?w=1060',
        description: "Implement AI and ML solutions to automate tasks, enhance decision-making, and personalize customer experiences.",
        heroTitle: "Intelligent Solutions for a Smarter Business",
        d2:' Harness the power of AI and machine learning with Apexion Global Solutions. We develop intelligent solutions that automate processes, enhance decision-making, and drive innovation, propelling your business into the future.',
        content: [
          {
            title: "Machine Learning Models",
            icon: "bi bi-graph-up-arrow",
            description: "Develop machine learning models to uncover patterns and predict outcomes."
          },
          {
            title: "Natural Language Processing",
            icon: "bi bi-chat-right-dots",
            description: "Enable your systems to understand and respond to human language effectively."
          },
          {
            title: "Computer Vision",
            icon: "bi bi-eye-fill",
            description: "Utilize computer vision for image and video recognition tasks."
          },
          {
            title: "Predictive Analytics",
            icon: "bi bi-graph-down",
            description: "Forecast future trends and behaviors with predictive analytics."
          },
          {
            title: "Robotic Process Automation",
            icon: "bi bi-robot",
            description: "Automate repetitive tasks using intelligent RPA solutions."
          },
          {
            title: "AI-powered Personalization",
            icon: "bi bi-person-lines-fill",
            description: "Deliver personalized experiences to customers using AI algorithms."
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

export default Artificial