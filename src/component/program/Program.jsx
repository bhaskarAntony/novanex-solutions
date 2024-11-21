import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Program({ click }) {
    const data = [
        {
            icon: 'bi bi-laptop', // Bootstrap icon for coding
            title: 'Cloud Computing',
            subtitle: 'Leverage cloud technologies to enhance scalability and flexibility in your business operations.'
        },
        {
            icon: 'bi bi-code-slash', // Bootstrap icon for coding
            title: 'Data Analytics',
            subtitle: 'Transform data into actionable insights to drive informed decision-making.'
        },
        {
            icon: 'bi bi-shield-lock', // Bootstrap icon for security
            title: 'Cybersecurity Solutions',
            subtitle: 'Protect your business from digital threats with robust security frameworks.'
        }
    ];

    return (
        <section className='container-fluid p-4 p-md-5 program bg-light'>
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="program-left">
                        <h1 className="display-3 fw-bold text-dark">Our Commitment to  <span className="text-main">Excellence</span></h1>
                        <p className="fs-6 text-dark mt-4">
                        "We combine innovation, expertise, and a client-first approach to deliver top-notch IT solutions that help businesses thrive in a rapidly evolving digital landscape."
                        </p>
                        <p className="fs-6 text-dark">
                            Join us to explore advanced technologies that will elevate your career and business capabilities.
                        </p>
                        <br />
                        <Link className="main-btn p-3 px-5 fw-bold mt-3" onClick={click}>Know More <i class="bi bi-arrow-right"></i></Link>
                    </div>
                    
                </div>
                <div className="col-md-7 mt-5 m-md-0">
                    <div className="program-right">
                        {data.map((course, index) => (
                            <div key={index} className="program-card gap-3 text-dark">
                                <div className="icon">
                                    <i className={`${course.icon} fs-3`}></i>
                                </div>
                                <div>
                                    <h3 className=" fs-5 fw-bold">{course.title}</h3>
                                    <p className="fs-6 text-secondary">{course.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Program;
