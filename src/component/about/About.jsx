import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about container-fluid p-3 p-md-5 bg-light">
        <div className="row">
            <div className="col-md-6 mb-3">
                    <h1 className="fs-1 fw-bold">About Apexion Global Solutions</h1>
                    <p className="fs-6 text-secondary mt-3">
                    At Apexion Global Solutions, we're more than just a technology company. We're your partners in innovation, dedicated to transforming your business through cutting-edge solutions and expert consultation.
                    </p>
                    <br />
                    <Link className="main-btn">Learn More About Us <i class="bi bi-arrow-right"></i></Link>
            </div>
            <div className="col-md-6 mt-4">
                <img src="https://highbrowtechnology.com/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7433851%2Fpexels-photo-7433851.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&w=1200&q=75" alt="about us" className="w-100 rounded-4" />
            </div>
        </div>
    </section>
  )
}

export default About