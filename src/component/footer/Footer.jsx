import React from 'react'
import logo from '../../images/novanex_main_logo.jpg'
import './style.css'

function Footer() {
  return (
    <footer className="p-3 p-md-5">
        <div className="row">
            <div className="col-md-4">
                <img src={logo} alt="" className="logo" />
                <p className="fs-6 mt-4">
                At Novanex Solutions, we specialize in empowering individuals and businesses through our comprehensive consulting services. Our expert career counseling and placement support help professionals identify opportunities and achieve their career goals. With industry-focused software training programs, we equip individuals with the skills needed to excel in a competitive job market.
                </p>
            </div>
            <div className="col-md-2">
                <h3 className="fs-4 fw-bold">Quick Links</h3>
                <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact us</a></li>
                  
                </ul>
            </div>

            <div className="col-md-3">
                <h3 className="fs-4 fw-bold">Our Services</h3>
                <ul>
                    <li><a href="">Software Training Services</a></li>
                    <li><a href="">Career Counseling</a></li>
                    <li><a href="">Placement Counseling</a></li>
                    <li><a href="">Not IT to IT Placement Support</a></li>
                    <li><a href="">Human Resources Consulting</a></li>
                   
                </ul>
            </div>

            <div className="col-md-3">
                <h3 className="fs-4 fw-bold">Follow Us On</h3>
                <ul >
                    <li><a href="" className='text-main'><i className='bi bi-facebook fs-3'></i> Facebook</a></li>
                    <li><a href="" className='text-main'><i className='bi bi-instagram fs-3'></i> Instagram</a></li>
                    <li><a href="" className='text-main'><i className='bi bi-linkedin fs-3'></i> Linkedin</a></li>
                    <li><a href="" className='text-main'><i className='bi bi-youtube fs-3'></i> Youtube</a></li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="fs-6 text-center">
        &copy; 2024 <span className="text-main">Novanex Solutions</span> Inc. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer