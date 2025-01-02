import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero p-3 p-md-5">
      <div>
      <h1 className="display-5 fw-bold text-white">
            Novanex Solutions: <br />
            <span className="text-white" data-aos="fade-up">Innovative Business & IT Solutions</span>
          </h1>
          <h2 className="fs-4 text-main" data-aos="fade-up">
            Transform Your Business with Expert Consulting <br /> and IT Services
          </h2>
          <p className="fs-6 text-secondary" data-aos="fade-up">
            Welcome to Novanex Solutions – your trusted partner for business consulting, digital marketing, web development, corporate training, and strategic IT services. Let's innovate together.
          </p>
          <br />
          <a href="#services" className="btn btn-primary px-5 p-3 btn-100" data-aos="fade-up">
            Discover Our Expertise
          </a>
      </div>
    </section>
  );
}

export default Hero;
