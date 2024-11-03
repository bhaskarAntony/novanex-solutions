import React from 'react'
import logo from '../../images/apexion logo.png'
import './style.css'

function Footer() {
  return (
    <footer className="p-3 p-md-5">
        <div className="row">
            <div className="col-md-4">
                <img src={logo} alt="" className="logo" />
                <p className="fs-6 mt-4">
                Apexion Global Solutions embodies innovation and excellence. Our team's dedication to delivering cutting-edge technology solutions has propelled us to the forefront of the industry.
                </p>
            </div>
            <div className="col-md-2">
                <h3 className="fs-4 fw-bold">Quick Links</h3>
                <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Our Mission</a></li>
                    <li><a href="">Our Vission</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="col-md-3">
                <h3 className="fs-4 fw-bold">Our Services</h3>
                <ul>
                    <li><a href="">Digital Transformation</a></li>
                    <li><a href="">Application Development (Mobile, Web, Cloud)</a></li>
                    <li><a href="">Enterprise Software Solutions</a></li>
                    <li><a href="">Data Analytics and BI</a></li>
                   
                </ul>
            </div>
            <div className="col-md-3">
                <ul>
                <li><a href="">Artificial Intelligence and Machine Learning</a></li>
                    <li><a href="">Cybersecurity</a></li>
                    <li><a href="">Cloud Computing (AWS, Azure, Google Cloud)</a></li>
                    <li><a href="">IT Consulting</a></li>
                    <li><a href="">DevOps</a></li>
                    <li><a href="">Quality Assurance and Testing</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="fs-6 text-center">
        &copy; 2024 <span className="text-main">Apexion Global solutions</span> Inc. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer