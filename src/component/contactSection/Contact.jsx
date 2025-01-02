import React from 'react'
import './style.css'
function Contact() {
    const contactData = [
        {
            icon:'bi bi-envelope',
            title:'Email',
            description:'novanexsolutions@gmail.com'
        },
        {
            icon:'bi bi-telephone',
            title:'Call',
            description:'+91960672320'
        },
        {
            icon:'bi bi-geo-alt',
            title:'Address',
            description:'1356 broadway, new york city 10018 USA'
        }
    ]
  return (
    <section className="container-fluid p-3 p-md-5">
        <p className="fs-5 text-center text-main mt-3">Contact us</p>
        <h1 className="fs-1 fw-bold text-center mb-5">Your Growth Starts Here <br /> Get in Touch Today</h1>
        <div className="row">
            <div className="col-md-5">
                <div className="contact-card p-3 py-5 rounded-4 mb-3">
                    <ul>
                       {
                        contactData.map((item, index)=>(
                            <div>

                            <li>
                                <div className="contact-icon">
                                    <i className={`fs-1 ${item.icon}`}></i>
                                </div>
                                <div>
                                    <h1 className="fs-4 fw-bold text-main">{item.title}</h1>
                                    <p className="fs-6">{item.description}</p>
                                </div>
                            </li>
                            <hr />

                            </div>
                        ))
                       }
                    </ul>
                </div>
            </div>
            <div className="col-md-7">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62208.06340445172!2d77.52400322167966!3d12.971598000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167749a11da7%3A0x34f4bf352ec126db!2sRegus%20-%20Bangalore%20UB%20City!5e0!3m2!1sen!2sin!4v1735840491474!5m2!1sen!2sin" width="600" height="450"  className='w-100 rounded-4' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact