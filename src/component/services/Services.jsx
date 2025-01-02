import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Services() {
  const servicesData = [
    {
      title: "Software Training Services",
      subtitle: "Master Technology with Comprehensive Training",
      description: "Delivering hands-on training in software development, data analysis, cloud computing, and other in-demand technologies.",
      icon: "bi bi-laptop",
      image: "https://img.freepik.com/premium-photo/startup-business-people-group-working-everyday-job-modern-office_530697-16020.jpg?semt=ais_hybrid"
    },
    {
      title: "Career Counseling",
      subtitle: "Empower Your Future with Professional Career Guidance",
      description: "Providing personalized career counseling to help individuals make informed decisions about their professional journey.",
      icon: "bi bi-compass",
      image: "https://img.freepik.com/premium-photo/happy-business-partners-smiling-while-talking-about-work-meeting-office-female-colleague-sitting-sofa-speaking-her-male-boss_662251-316.jpg?semt=ais_hybrid"
    },
    {
      title: "Placement Counseling",
      subtitle: "Achieve Career Success with Expert Placement Advice",
      description: "Helping candidates navigate job opportunities and prepare for successful placements in their desired fields.",
      icon: "bi bi-briefcase",
      image: "https://img.freepik.com/premium-photo/diverse-group-women-men-joining-alcoholic-anonymous-meeting-young-people-with-mental-health-problems-attending-group-counseling_662251-1050.jpg?semt=ais_hybrid"
    },
    {
      title: "Not IT to IT Placement Support",
      subtitle: "Transition Seamlessly into the IT Industry",
      description: "Guiding professionals from non-IT backgrounds to secure rewarding roles in the IT industry with targeted support and training.",
      icon: "bi bi-arrow-right-square",
      image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901765.jpg?semt=ais_hybrid"
    },
    {
      title: "Human Resources Consulting",
      subtitle: "Enhance Workforce Management with HR Expertise",
      description: "Providing HR solutions to streamline recruitment, training, and employee management processes for businesses.",
      icon: "bi bi-people",
      image: "https://img.freepik.com/premium-photo/side-view-handsome-boss-talking-about-work-deal-business-contract-with-woman-coworker-office_662251-203.jpg?semt=ais_hybrid"
    },
    
    // {
    //   title: "Resume Building and Interview Preparation",
    //   subtitle: "Stand Out with a Winning Resume and Confidence",
    //   description: "Equipping candidates with skills to create impressive resumes and prepare effectively for interviews.",
    //   icon: "bi bi-file-earmark-text",
    //   image: "https://img.freepik.com/free-photo/resume-job-interview-preparation_23-2149124334.jpg"
    // },
    // {
    //   title: "Soft Skills and Personality Development",
    //   subtitle: "Refine Your Communication and Leadership Skills",
    //   description: "Training individuals in communication, leadership, and interpersonal skills to enhance workplace performance.",
    //   icon: "bi bi-person-badge",
    //   image: "https://img.freepik.com/free-photo/soft-skills-personality-training-session_23-2149215376.jpg"
    // },
    // {
    //   title: "Corporate Training Programs",
    //   subtitle: "Upskill Teams for Greater Organizational Success",
    //   description: "Providing specialized corporate training programs to empower employees with industry-relevant knowledge and skills.",
    //   icon: "bi bi-building",
    //   image: "https://img.freepik.com/free-photo/corporate-training-classroom-workshop_23-2149437685.jpg"
    // },
    // {
    //   title: "Industry Readiness Workshops",
    //   subtitle: "Prepare for Real-World Challenges with Practical Training",
    //   description: "Conducting workshops that bridge the gap between academic knowledge and industry requirements.",
    //   icon: "bi bi-gear",
    //   image: "https://img.freepik.com/free-photo/industry-readiness-workshop-seminar_23-2149438957.jpg"
    // }
  ];
  
      
  return (
    <section className="services-section p-3 p-md-5 container-fluid bg-light mt-4" id='services'>
        <h1 className="fs-1 fw-bold text-center" data-aos="fade-up">Our Services</h1>
        {/* <h1 className="fs-1 fw-bold text-center">Empower your business <br />
        with our services.</h1> */}
        <div className="row mt-5 justify-content-center">
            {
                servicesData.map((item,index)=>(
                    <div className="col-md-4 mb-4">
                        <div className="service-card h-100 d-flex flex-column justify-content-between bg-white" data-aos="zoom-in">
                            {/* <div className="service-icon mb-4">
                                <i className={item.icon}></i>
                               
                            </div> */}
                            <img src={item.image} alt={item.title} className='w-100' />
                          <div className='p-3'>
                          <h4 className="fs-4 fw-bold" data-aos="fade-up">{item.title}</h4>
                          <p className="fs-6 text-secondary" data-aos="fade-up">{item.description}</p>
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