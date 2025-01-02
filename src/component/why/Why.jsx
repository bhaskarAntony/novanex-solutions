import React from 'react'
import './style.css'

function Why() {
    const whyChooseUs = [
        {
          title: "Expert Career Counseling",
          description:
            "Our seasoned counselors help you identify your strengths, explore career paths, and make informed decisions to achieve your professional goals.",
          icon: "fa-solid fa-user-graduate", // FontAwesome icon class for a graduation cap
        },
        {
          title: "Dedicated Placement Support",
          description:
            "We offer end-to-end placement services, from resume building to interview preparation, ensuring you land your dream job with confidence.",
          icon: "fa-solid fa-briefcase", // FontAwesome icon class for a briefcase
        },
        {
          title: "Industry-Relevant Software Training",
          description:
            "Our cutting-edge software training programs are designed to meet industry demands, providing hands-on learning experiences for real-world applications.",
          icon: "fa-solid fa-laptop-code", // FontAwesome icon class for a laptop with code
        },
        {
          title: "Comprehensive HR Consulting",
          description:
            "Our HR consulting services streamline recruitment, training, and workforce management, helping businesses build and retain top talent.",
          icon: "fa-solid fa-users", // FontAwesome icon class for users
        },
      ];
      
  return (
   <section className="container-fluid p-3 p-md-5">
        <div className="row">
            <div className="col-md-5 mb-3">
                <p className="fs-4 text-main" data-aos="fade-up">Why Choose Us</p>
                <h1 className="fs-1 fw-bold" data-aos="fade-up">Empowering Businesses: Our Success Stories</h1>
                <p className="fs-6" data-aos="fade-up">
                At Novanex Solutions, we specialize in empowering individuals and businesses through our comprehensive consulting services. Our expert career counseling and placement support help professionals identify opportunities and achieve their career goals. With industry-focused software training programs, we equip individuals with the skills needed to excel in a competitive job market.
                </p>
                <a href='/' className="btn btn-primary p-3 px-5 rounded-pill m-0">Know More</a>
            </div>
            <div className="col-md-7">
                <div className="row align-items-center">
                {
                    whyChooseUs.map((item, index)=>(
                        <div className="col-md-6 mb-3">
                            <div className={`p-3 rounded h-100 why-card ${index%2 == 0? 'highlight':index==1?'first-why-card text-white':null}`} data-aos="zoom-in">
                               
                                <i className={`fs-1 ${item.icon} ${index != 1?'text-main h-icon':null}`}></i>
                                <h1 className="fs-3 mt-3 fw-bold">{item.title}</h1>
                                <p className="fs-6 mt-3">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
   </section>
  )
}

export default Why