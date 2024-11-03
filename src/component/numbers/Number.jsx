import React from 'react';
import './style.css';

function Number() {
    const data = [
        {
            title: 'Innovation ',
            description: 'Join our community of aspiring professionals transforming their careers through education.'
        },
        {
            title: 'Innovation ',
            description: 'Explore a wide range of flexible courses designed to fit your learning style and schedule.'
        },
        {
            title: 'Customer Success ',
            description: 'Hear from our graduates who have successfully launched their careers in technology and beyond.'
        },
        {
            title: '24/7 support',
            description: 'Stay ahead in the competitive job market with our training in the latest technologies and trends.'
        },
    ];

    return (
        <section className='container-fluid p-3 p-md-5 counts  py-5 mt-5'>
            <div className="row ">
                {
                    data.map((item, index) => (
                        <div key={index} className="col-md-3 count-container d-flex align-items-center justify-content-center">
                            <div className={`p-3 mb-5 ${index % 2 === 0 ? 'card-solid' : 'count-card'}`}>
                                <h1 className="fs-5 text-main">{item.title}</h1>
                                {/* <p className="fs-6">{item.description}</p> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Number;
