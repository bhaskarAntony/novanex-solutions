import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Program({ click }) {
    const data = [
        {
            icon: 'bi bi-person-workspace', // Bootstrap icon for career counseling
            title: 'Career Counseling',
            subtitle: 'Providing personalized career guidance to help individuals achieve their professional aspirations.',
        },
        {
            icon: 'bi bi-briefcase', // Bootstrap icon for placement
            title: 'Placement Counseling',
            subtitle: 'Offering expert support to streamline the job placement process and ensure career success.',
        },
        {
            icon: 'bi bi-laptop', // Bootstrap icon for software training
            title: 'Software Training',
            subtitle: 'Delivering hands-on training in the latest technologies to build industry-ready skills.',
        },
        {
            icon: 'bi bi-people', // Bootstrap icon for HR consulting
            title: 'Human Resource Consulting',
            subtitle: 'Providing strategic HR solutions to optimize workforce management and enhance business growth.',
        },
    ];

    return (
        <section className='container-fluid p-4 p-md-5 program bg-light'>
            <div className="row">
                <div className="col-md-5">
                    <div className="program-left">
                        <h1 className="display-5 fw-bold text-dark">Why Choose <span className="text-main">Novanex Solutions</span></h1>
                        <p className="fs-6 text-dark mt-4">
                            At Novanex Solutions, we bring unparalleled expertise and dedication to empowering careers and businesses. Our services are designed to address the unique challenges of today’s dynamic environment.
                        </p>
                        <p className="fs-6 text-dark">
                            Join us to experience transformative solutions that will elevate your career and business to new heights.
                        </p>
                        <br />
                        <Link className="main-btn p-3 px-5 fw-bold mt-3" onClick={click}>Learn More <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-md-7 mt-5 m-md-0">
                    <div className="program-right">
                        {data.map((service, index) => (
                            <div key={index} className="program-card gap-3 text-dark">
                                <div className="icon">
                                    <i className={`${service.icon} fs-3`}></i>
                                </div>
                                <div>
                                    <h3 className="fs-5 fw-bold">{service.title}</h3>
                                    <p className="fs-6 text-secondary">{service.subtitle}</p>
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
