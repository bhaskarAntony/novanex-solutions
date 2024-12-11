import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function About() {
    const coreValues = [
        {
          title: "Integrity",
          icon: "bi bi-shield-lock",
          content: "We adhere to the highest ethical standards, fostering trust and transparency in every client interaction and business decision we make."
        },
        {
          title: "Innovation",
          icon: "bi bi-lightbulb",
          content: "Our team constantly seeks new and creative solutions, staying ahead of technological advancements to offer cutting-edge services."
        },
        {
          title: "Customer Focus",
          icon: "bi bi-people",
          content: "We prioritize our clients' needs, striving to exceed expectations and deliver solutions that genuinely address their unique challenges and goals."
        },
        {
          title: "Excellence",
          icon: "bi bi-star-fill",
          content: "We are committed to the highest standards of quality and performance in everything we do, ensuring reliability and consistency in our work."
        },
        {
          title: "Collaboration",
          icon: "bi bi-people-arrows",
          content: "We believe in teamwork and collaboration, both within our company and with our clients, to achieve the best outcomes together."
        },
        {
          title: "Continuous Learning",
          icon: "bi bi-book",
          content: "We foster a culture of growth and improvement, encouraging our team to continuously learn and adapt to the ever-evolving tech landscape."
        }
      ];
      const testimonials = [
        {
            content:`
            Apexion Global Solutions embodies innovation and excellence. Our team's dedication to delivering cutting-edge technology solutions has propelled us to the forefront of the industry.`,
            by:'Murali Gangappa, CEO, Apexion Global Solutions'
        },
        {
            content:`
            Apexion Global Solutions is driven by a passion for innovation and excellence. Our team's expertise and dedication enable us to deliver exceptional IT solutions.`,
            by:'Sanjay V, Managing Director, Apexion Global Solutions'
        }
      ]
      
  return (
   <section className="about">
    <div className="about-hero p-3 p-md-5">
        <h1 className="display-3 fw-bold text-light">
        <span className="text-warning">Empowering</span> <br /> Innovation
        </h1>
        <p className="fs-4 text-secondary">
        Discover the story behind Apexion Global Solutions and our <br /> commitment to excellence.
        </p>
    </div>
    <h1 className="my-4 text-center text-main fs-1 fw-bold">
    Who We Are
    </h1>
    <div className="container-fluid p-3 p-md-5">
        <div className="row">
            <div className="col-md-6">
                <p className="fs-5 j">
               At, Apexion Global Solutions, we're a team of innovators, technologists, and problem-solvers, passionate about empowering businesses to thrive in the digital age.
                </p>
                <p className="fs-5  j">
                Our comprehensive services span Apexion Global Solutions to optimize internal workflows, Data Analytics and Business Intelligence to leverage insights for growth, and Artificial Intelligence and Machine Learning to unlock new possibilities through automation and predictive analytics. In a world where digital threats are ever-present, our Cybersecurity solutions are designed to protect your data and build resilience into your operations.
                </p>
                <br />
                <Link className='main-btn px-5'>Contact us</Link>
            </div>
            <div className="col-md-6 mt-3">
                <img src="https://img.freepik.com/free-photo/close-up-businesspeople-stacking-hands-meeting-office_23-2147923361.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_siglip" alt="about-us" className="w-100 rounded-4" />
            </div>
        </div>
        <p className="fs-5 mt-3  j">
        Apexion Global Solutions is also a recognized leader in Cloud Computing with expertise across AWS, Azure, and Google Cloud, helping businesses scale and remain agile in dynamic markets. Our IT Consulting services offer strategic guidance to help clients overcome complex technology challenges, while our DevOps solutions foster collaboration and accelerate development cycles, ensuring faster time-to-market and consistent deployment.
        </p>
        <p className="fs-5 j">
        Our Commitment to quality is evident in our Quality Assurance and Testing services, where we rigorously test solutions to ensure they meet the highest standards of functionality, security, and reliability. At Apexion Global Solutions, we are more than just a service provider—we are a partner dedicated to your success, helping you navigate the complexities of digital transformation with confidence and clarity.
        </p>
    </div>

    <div className="bg-light p-md-5 p-3">
        <div className="card bg-light border-0 p-3 shadow-sm">
            <h1 className="fs-1 text-main">Our Mission</h1>
            <p className="fs-5 j">At Apexion Global Solutions, our mission is to empower businesses to thrive in the digital age by delivering innovative, tailored software solutions that drive growth, efficiency, and competitiveness.We strive to build lasting patnerships, foster a culture of innovation, and excelin delivery, ensuring our clients achieve exceptional results.</p>
            <p className="fs-5 ">
            Our focus is on excellence and integrity in every project we undertake. By leveraging our expertise in Digital Transformation, Application Development, Data Analytics, AI & Machine Learning, Cybersecurity, Cloud Computing, IT Consulting, DevOps, and Quality Assurance, we strive to be a catalyst for positive change. Our goal is to equip businesses with the tools and insights they need to thrive, adapt, and succeed in a technology-driven world.
            </p>
        </div>
     
    </div>
    <div className="bg-light p-3 p-md-5">
            <div className="card border-0 p-3 shadow-sm">
                <h1 className="fs-1 text-main">Our Vission</h1>
                <p className="fs-5 j">
                <q>Apexion Global Solutions aims to be a pioneering force in the digital landscape, empowering businesses to achieve unparalleled success through innovative technology solutions. We envision a future where our expertise, passion, and commitment to excellence enable our clients to</q>
                </p>
                <ul typeof='disc'>
                    <li className='fs-5'>Thrive in the digital economy</li>
                    <li className='fs-5'>Harness the power of technology to drive growth</li>
                    <li className='fs-5'>Foster meaningful connections with their customers</li>
                    <li className='fs-5'>Stay ahead of the competition</li>
                    <li className='fs-5'>Create a lasting impact in their industries</li>
                </ul>
                <h1 className="fs-3 mb-4 text-main"><u>Long-term Goals:</u></h1>
                <ul>
                    <li className='fs-5'> Establish Apexion Global Solutions as a top-tier software solutions provider globally.                    </li>
                    <li className='fs-5'>Expand our presence in emerging markets and industries.                   </li>
                    <li className='fs-5'>Develop strategic partnerships with leading technology companies.                    </li>
                    <li className='fs-5'>Continuously innovate and integrate cutting-edge technologies into our solutions.                    </li>
                    <li className='fs-5'>Build a diverse, skilled, and passionate team of experts.</li>
                </ul>
             
            </div>
            <h1 className="fs-1 fw-bold text-main my-4 text-center">We envision a future where:</h1>
                <div className="row about-cards">
                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Digital Transformation enables businesses of all sizes to achieve unprecedented agility and growth.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Application Development integrates seamlessly across mobile, web, and cloud platforms, delivering unmatched user experiences.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Data Analytics and AI & Machine Learning turn insights into impactful strategies, fueling data-driven decision-making.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Cybersecurity protects and fortifies every layer of business, ensuring trust and peace of mind.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Cloud Computing solutions optimize performance, scalability, and cost-efficiency, driving sustainable growth.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            IT Consulting and DevOps practices empower businesses to embrace operational excellence and innovation.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Quality Assurance upholds the highest standards, ensuring that every product and solution is robust, secure, and reliable.
                            </p>
                        </div>
                    </div>
                    
                </div>
        </div>

      <div className="container-fluid p-3 p-md-5 bg-light">
      <h1 className="text-center fs-1 fw-bold text-main fs-1">Our Core Values</h1>
        <div className="row mt-5">
            {
                coreValues.map((item, index)=>(
                    <div className="col-md-4 mb-3">
                        <div className="core-card bg-white p-3 h-100">
                            <div className="service-icon">
                                <i className={item.icon}></i>
                            </div>
                            <h1 className="fs-3 fw-bold">{item.title}</h1>
                            <p className="fs-6">{item.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
      <div className="container-fluid p-3 p-md-5">
      <div className="row">
        {
            testimonials.map((item, index)=>(
                <div className="col-md-6">
                    <div className="service-card testimonial bg-light p-3 h-100 d-flex flex-column justify-content-between">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" alt="" className='mb-4' />
                        <p className="fs-6"><q>
                        {item.content}
                        </q></p>
                        <blockquote><small className='text-main'>-{item.by}</small></blockquote>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
      
   </section>
  )
}

export default About