import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Services() {
    const servicesData = [
        {
          title: "Digital Transformation",
          subtitle:'Drive Efficiency with Expert Digital Transformation Services',
          description: "Empowering businesses to embrace digital technologies and drive operational efficiency with Apexion Global Solutions.",
          icon: "bi bi-lightbulb",
          image:"https://img.freepik.com/free-vector/polygonal-wireframe-image-human-hand-touch-electronic-display-abstract-vector-illustration_1284-30756.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "Application Development (Mobile, Web, Cloud)",
          subtitle:'Custom Application Development: Mobile, Web, and Cloud',
          description: "Building innovative applications for mobile, web, and cloud platforms to meet modern demands, crafted by Apexion Global Solutions.",
          icon: "bi bi-phone",
          image:"https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038900.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "Enterprise Software Solutions",
          subtitle:'Enterprise Software Tailored to Your Business Needs',
          description: "Delivering scalable enterprise software solutions tailored by Apexion Global Solutions to improve productivity and streamline processes.",
          icon: "bi bi-building",
          image:"https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "Data Analytics and BI",
          subtitle:'Leverage Data Analytics for Smarter Business Decisions',
          description: "Providing actionable insights through data analytics and business intelligence tools, powered by Apexion Global Solutions.",
          icon: "bi bi-graph-up-arrow",
          image:"https://img.freepik.com/free-photo/office-workers-using-finance-graphs_23-2150408669.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "Artificial Intelligence and Machine Learning",
          subtitle:'AI and Machine Learning Solutions for Enhanced Automation',
          description: "Implementing AI and ML solutions to automate tasks and enhance decision-making, guided by Apexion Global Solutions expertise.",
          icon: "bi bi-cpu",
          image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901780.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "Cybersecurity",
          subtitle:'Comprehensive Cybersecurity to Protect Your Digital Assets',
          description: "Ensuring comprehensive security solutions to protect data and mitigate risks, secured by Apexion Global Solutions.",
          icon: "bi bi-shield-lock",
          image:"https://img.freepik.com/free-photo/ai-cybersecurity-virus-protection-machine-learning_53876-129788.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "Cloud Computing (AWS, Azure, Google Cloud)",
          subtitle:'Optimize Operations with Scalable Cloud Computing Solutions',
          description: "Enabling efficient cloud solutions on AWS, Azure, and Google Cloud with Apexion Global Solutions.",
          icon: "bi bi-cloud",
          image:"https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "IT Consulting",
          subtitle:'Expert IT Consulting for Streamlined Technology Integration',
          description: "Providing expert IT consulting services to help businesses optimize their tech infrastructure, driven by Apexion Global Solutions.",
          icon: "bi bi-people",
          image:"https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241261.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "DevOps",
          subtitle:'DevOps Practices for Seamless Development and Deployment',
          description: "Streamlining development and operations with efficient DevOps practices by Apexion Global Solutions.",
          icon: "bi bi-tools",
          image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901769.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        },
        {
          title: "Quality Assurance and Testing",
          subtitle:'Ensure Quality with Advanced Testing and QA Services',
          description: "Ensuring quality and reliability through comprehensive testing services, maintained by Apexion Global Solutions.",
          icon: "bi bi-check2-square",
          image:"https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631023.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        }
      ];
      
  return (
    <section className="services-section p-3 p-md-5 container-fluid bg-light">
        <h1 className="fs-3 fw-bold text-center my-5">Our Services</h1>
        <div className="row">
            {
                servicesData.map((item,index)=>(
                    <div className="col-md-4 mb-4">
                        <div className="service-card h-100 d-flex flex-column justify-content-between bg-white">
                            {/* <div className="service-icon mb-4">
                                <i className={item.icon}></i>
                               
                            </div> */}
                            <img src={item.image} alt={item.title} className='w-100' />
                          <div className='p-3'>
                          <h4 className="fs-4 fw-bold">{item.title}</h4>
                          <p className="fs-6 text-secondary">{item.description}</p>
                          <Link className='nav-link text-main fw-bold'>Learn More <i class="bi bi-arrow-right"></i></Link>
                          </div>
                        
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Services