import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Contact() {
    const [isLoading, setIsLoading] = useState(false);
  const contactData = [
    {
      icon: 'bi-geo-alt',
      title: 'Our Office',
      content: 'WJ88+69V BMTC Complex, Old Madiwala, Kuvempu Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560068',
    },
    {
      icon: 'bi-telephone',
      title: 'Phone',
      content: '+91 7411969213',
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      content: 'info@apexionglobalsolutions.com',
    },
  ];

  const services = [
    'Digital Transformation',
    'Application Development (Mobile, Web, Cloud)',
    'Enterprise Software Solutions',
    'Data Analytics and BI',
    'Artificial Intelligence and Machine Learning',
    'Cybersecurity',
    'Cloud Computing (AWS, Azure, Google Cloud)',
    'DevOps',
    'Quality Assurance and Testing',
  ];

  // Form state
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phonenumber: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://contacts-backend-k7yi.onrender.com/api/new/contact', formData);
      setFormStatus('Message sent successfully!');
      setIsLoading(false);
      setFormData({
        service: '',
        name: '',
        phonenumber: '',
        email: '',
        message: '',
      });
    } catch (error) {
        setIsLoading(false);
      setFormStatus('Failed to send message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="section contact p-3 p-md-5">
        <h1 className="fs-1 fw-bold text-light">Let's Connect</h1>
        <p className="fs-5 text-light">
          We're here to listen, understand your needs, and provide tailored solutions. Reach out to us and let's start a
          conversation about how we can support your business goals.
        </p>
      </div>
      <div className="container-fluid p-3 p-md-5 bg-light">
        <div className="row">
          {contactData.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="service-card h-100 p-3 d-flex flex-column justify-content-between bg-white">
                <div className="service-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h1 className="fs-3 fw-bold">{item.title}</h1>
                <p className="fs-6 text-secondary">{item.content}</p>
              </div>
            </div>
          ))}

          <div className="col-md-6 mb-4 mb-md-0">
            <div className="contact-card bg-white p-3">
              <h1 className="fs-2 fw-bold">Send Us a Message</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label htmlFor="services" className="form-label">
                    Business Sector
                  </label>
                  <select
                    name="service"
                    id="services"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="phonenumber" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phonenumber"
                    placeholder="Your phone number"
                    className="form-control"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    cols="30"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="main-btn w-100 mt-3">
                  {
                    isLoading?'Please wait...':(
                        <span>Send Message <i className="bi bi-arrow-right"></i></span>
                    )
                  } 
                </button>
              </form>
              {formStatus && <p className="mt-3 text-success">{formStatus}</p>}
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.871093476412!2d77.61333287358805!3d12.916005616097706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153359368a11%3A0x9e90b641d18c84ae!2sGaruda%20BHIVE%20Workspace%2C%20BTM%20Layout%20Campus!5e0!3m2!1sen!2sin!4v1731909514276!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-100 rounded-4"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
