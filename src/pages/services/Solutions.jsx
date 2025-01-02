import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Solutions({data}) {
  return (
    <section className="services-section p-3 p-md-5 container-fluid bg-light">
        <h1 className="fs-3 fw-bold text-center my-5">Our Consulting Solutions</h1>
        <div className="row">
            {
                data.content.map((item,index)=>(
                    <div className="col-md-4 mb-4">
                        <div className="service-card text-center h-100 p-3 d-flex flex-column justify-content-between bg-white" data-aos="zoom-in">
                            <div className="contact-icon m-auto mb-4">
                                <i className={item.icon}></i>
                            </div>
                          <div>
                          <h4 className="fs-4 fw-bold">{item.title}</h4>
                          <p className="fs-6 text-secondary">{item.description}</p>
                          </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Solutions