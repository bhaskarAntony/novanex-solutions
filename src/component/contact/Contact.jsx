import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import Contact from '../contactSection/Contact';

function ContactPage() {
   
  return (
    <div>
      <div className="section contact p-3 p-md-5">
        <h1 className="fs-1 fw-bold text-light" data-aos="fade-up">Let's Connect</h1>
        <p className="fs-5 text-light" data-aos="fade-up">
          We're here to listen, understand your needs, and provide tailored solutions. Reach out to us and let's start a
          conversation about how we can support your business goals.
        </p>
      </div>
      <Contact/>
    </div>
  );
}

export default ContactPage;
