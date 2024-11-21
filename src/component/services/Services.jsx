import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Services() {
    const servicesData = [
        {
          title: "Digital Transformation",
          subtitle:'Drive Efficiency with Expert Digital Transformation Services',
          description: "Empowering businesses to embrace digital technologies and drive operational efficiency with Apexion Global Solutions.",
          icon: "bi bi-lightbulb"
        },
        {
          title: "Application Development (Mobile, Web, Cloud)",
          subtitle:'Custom Application Development: Mobile, Web, and Cloud',
          description: "Building innovative applications for mobile, web, and cloud platforms to meet modern demands, crafted by Apexion Global Solutions.",
          icon: "bi bi-phone"
        },
        {
          title: "Enterprise Software Solutions",
          subtitle:'Enterprise Software Tailored to Your Business Needs',
          description: "Delivering scalable enterprise software solutions tailored by Apexion Global Solutions to improve productivity and streamline processes.",
          icon: "bi bi-building"
        },
        {
          title: "Data Analytics and BI",
          subtitle:'Leverage Data Analytics for Smarter Business Decisions',
          description: "Providing actionable insights through data analytics and business intelligence tools, powered by Apexion Global Solutions.",
          icon: "bi bi-graph-up-arrow"
        },
        {
          title: "Artificial Intelligence and Machine Learning",
          subtitle:'AI and Machine Learning Solutions for Enhanced Automation',
          description: "Implementing AI and ML solutions to automate tasks and enhance decision-making, guided by Apexion Global Solutions expertise.",
          icon: "bi bi-cpu"
        },
        {
          title: "Cybersecurity",
          subtitle:'Comprehensive Cybersecurity to Protect Your Digital Assets',
          description: "Ensuring comprehensive security solutions to protect data and mitigate risks, secured by Apexion Global Solutions.",
          icon: "bi bi-shield-lock"
        },
        {
          title: "Cloud Computing (AWS, Azure, Google Cloud)",
          subtitle:'Optimize Operations with Scalable Cloud Computing Solutions',
          description: "Enabling efficient cloud solutions on AWS, Azure, and Google Cloud with Apexion Global Solutions.",
          icon: "bi bi-cloud"
        },
        {
          title: "IT Consulting",
          subtitle:'Expert IT Consulting for Streamlined Technology Integration',
          description: "Providing expert IT consulting services to help businesses optimize their tech infrastructure, driven by Apexion Global Solutions.",
          icon: "bi bi-people"
        },
        {
          title: "DevOps",
          subtitle:'DevOps Practices for Seamless Development and Deployment',
          description: "Streamlining development and operations with efficient DevOps practices by Apexion Global Solutions.",
          icon: "bi bi-tools"
        },
        {
          title: "Quality Assurance and Testing",
          subtitle:'Ensure Quality with Advanced Testing and QA Services',
          description: "Ensuring quality and reliability through comprehensive testing services, maintained by Apexion Global Solutions.",
          icon: "bi bi-check2-square"
        }
      ];
      
  return (
    <section className="services-section p-3 p-md-5 container-fluid bg-light">
        <h1 className="fs-3 fw-bold text-center my-5">Our Services</h1>
        <div className="row">
            {
                servicesData.map((item,index)=>(
                    <div className="col-md-4 mb-4">
                        <div className="service-card h-100 p-3 d-flex flex-column justify-content-between bg-white">
                            <div className="service-icon mb-4">
                                <i className={item.icon}></i>
                               
                            </div>
                          <div>
                          <h4 className="fs-4 fw-bold">{item.title}</h4>
                          <p className="fs-6 text-secondary">{item.description}</p>
                          </div>
                           <Link className='nav-link text-main fw-bold'>Learn More <i class="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Services