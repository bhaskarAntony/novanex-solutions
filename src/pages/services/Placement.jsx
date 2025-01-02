import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'
import Contact from '../../component/contactSection/Contact'

function Placement() {
    const data = {
        title: "Placement Counseling Services",
        icon: "bi bi-briefcase",
        image: 'https://img.freepik.com/premium-photo/indian-business-consultant-advising-clients-bright-modern-office_868783-50197.jpg?semt=ais_hybrid',
        description: "Comprehensive support to help individuals secure the right job opportunities with confidence.",
        heroTitle: "Achieve Career Success with Expert Placement Counseling",
        d2: 'Novanex Solutions offers placement counseling services that prepare individuals to confidently enter the job market. Our programs include tailored guidance, interview preparation, and networking opportunities to match talent with the right opportunities.',
        content: [
            {
                title: "Job Market Orientation",
                icon: "bi bi-geo-alt",
                description: "Understand the current job market trends and demands for better career alignment."
            },
            {
                title: "Skill Enhancement Training",
                icon: "bi bi-gear",
                description: "Develop job-specific skills to increase your employability and success rate."
            },
            {
                title: "Mock Interviews",
                icon: "bi bi-chat-square-text",
                description: "Practice interviews with feedback to improve confidence and communication skills."
            },
            {
                title: "Networking Opportunities",
                icon: "bi bi-people",
                description: "Expand your professional connections through targeted networking events."
            },
            {
                title: "Placement Drives",
                icon: "bi bi-calendar",
                description: "Participate in job fairs and placement events organized with top companies."
            },
            {
                title: "Resume & Cover Letter Writing",
                icon: "bi bi-file-earmark-text",
                description: "Craft professional resumes and cover letters to make a lasting impression."
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

export default Placement