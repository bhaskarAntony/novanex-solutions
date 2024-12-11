import React from 'react';
import './style.css';

function Why({click}) {
    const data = [
        {
            icon: 'bi bi-globe', // Bootstrap icon for global reach
            title: 'Expertise Across Industries',
            subtitle: 'Our team brings years of experience in delivering IT solutions for diverse sectors.'
        },
        {
            icon: 'bi bi-tools', // Bootstrap icon for customization
            title: 'Customized Solutions',
            subtitle: 'We tailor every service to meet your unique business needs.'
        },
        {
            icon: 'bi bi-speedometer2', // Bootstrap icon for performance
            title: 'Scalability and Innovation',
            subtitle: 'From startups to enterprises, our solutions grow with your business.'
        },
        {
            icon: 'bi bi-shield-lock', // Bootstrap icon for security
            title: 'End-to-End Support',
            subtitle: 'We provide seamless implementation, support, and consulting services.'
        }
    ];

    return (
        <section className='p-3 p-md-5' id='benefits'>
            <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
                
            <h1 className='fs-3 fw-bold'>Why Choose Apexion Global Solutions?</h1>
                <p className="fs-6  text-main">Benefits Of Apexion Services</p>
            </div>
            <div className="row mt-4">
                {data.map((item, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <div className="card text-center mb-4 h-100 why-card py-3">
                            <div className="card-body d-flex flex-column justify-content-between align-items-center">
                                <i className={`${item.icon} fs-1 text-main`}></i>
                                <div>
                                    <h5 className="card-title text-dark fw-bold">{item.title}</h5>
                                    <p className="card-text text-secondary">{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <center>
                <button className="main-btn mt-5 px-5" onClick={click}>Get Free Consultation</button>
            </center>
        </section>
    );
}

export default Why;
