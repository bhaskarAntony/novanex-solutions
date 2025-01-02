import React, { useRef, useState } from 'react';
import './style.css';





function TestimonialSlider() {
    const testimonial = [
        {
            icon: 'bi bi-person-badge', // Career counseling icon
            title: 'Career Counseling',
            content: 'Providing personalized guidance to help individuals identify their strengths, set career goals, and choose the right educational or professional path.',
            image: 'https://img.freepik.com/free-photo/team-working-together-project_23-2149273735.jpg?semt=ais_hybrid', // Add your image URL here
        },
        {
            icon: 'bi bi-briefcase', // Placement counseling icon
            title: 'Placement Counseling',
            content: 'Helping students and job seekers prepare for successful placements with resume building, interview training, and job matching services.',
            image: 'https://img.freepik.com/free-photo/conversation-designers_1098-15277.jpg?semt=ais_hybrid', // Add your image URL here
        },
        {
            icon: 'bi bi-laptop', // Software training icon
            title: 'Software Training',
            content: 'Offering hands-on training programs in the latest software technologies to empower individuals with in-demand technical skills.',
            image: 'https://img.freepik.com/free-photo/executive-communication-together-modern-workplace_1170-1850.jpg?semt=ais_hybrid', // Add your image URL here
        },
        {
            icon: 'bi bi-people', // Human resource consulting icon
            title: 'Human Resource Consulting',
            content: 'Providing expert HR consulting services to streamline recruitment processes, enhance employee engagement, and optimize workforce strategies.',
            image: 'https://img.freepik.com/free-photo/close-up-colleagues-working-together_23-2149300687.jpg?semt=ais_hybrid', // Add your image URL here
        },
        {
            icon: 'bi bi-lightbulb', // Innovation icon
            title: 'Leadership Development Programs',
            content: 'Helping individuals and teams develop strong leadership skills through tailored workshops and mentoring programs.',
            image: 'https://img.freepik.com/free-photo/business-success-concept-with-chessboard-side-view-man-placing-figure-pyramid-blocks_176474-9274.jpg?semt=ais_hybrid', // Add your image URL here
        },
        {
            icon: 'bi bi-graph-up-arrow', // Professional growth icon
            title: 'Professional Growth Workshops',
            content: 'Conducting interactive workshops to boost communication skills, teamwork, and problem-solving abilities.',
            image: 'https://img.freepik.com/free-photo/close-up-people-working-office_329181-16053.jpg?semt=ais_hybrid', // Add your image URL here
        },
        {
            icon: 'bi bi-calendar-event', // Training icon
            title: 'Customized Corporate Training',
            content: 'Designing and delivering training programs to meet the specific needs of organizations and their employees.',
            image: 'https://img.freepik.com/free-photo/focused-man-leader-explaining-management-project-using-monitor-working-company-meeting-office-roo_482257-2924.jpg?semt=ais_hybrid', // Add your image URL here
        },
        {
            icon: 'bi bi-chat-square-dots', // Consultation icon
            title: 'One-on-One Consultations',
            content: 'Providing personalized consultations to address specific career, training, or HR-related concerns.',
            image: 'https://img.freepik.com/free-photo/young-person-intership_23-2149315582.jpg?semt=ais_hybrid', // Add your image URL here
        }
    ];
    const [currentVideo, setCurrentVideo] = useState(null);
    const containerRef = useRef(null);

    const handlePlayClick = (video) => {
        setCurrentVideo(video);
    };

    const handleCloseVideo = () => {
        setCurrentVideo(null);
    };

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <section className='mt-5' id='stories'>
            <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
              
            
              
            </div>
            <div className="testimonial-slider py-5 mt-5">
            <div className="text-center">
               <h1 className="fs-1 fw-bold text-main ">Elevate Your Business <br /> with<span className="text-white text-center"> Novanex  Solutions</span> </h1>
               {/* <p className="fs-6">Innovative Technology Solutions</p> */}
               </div>
                <div className="testimonial-container" ref={containerRef}>
                    {testimonial.map((testimonial, index) => (
                        <div className="testimonial-card mt-5 d-flex flex-column justify-content-between" style={{background:`url(${testimonial.image})`}} key={index}>
                            <div className="content p-3 ">
                            <div className="icon bg-white">
                                <i className={`${testimonial.icon} fs-3 text-main`}></i>
                            </div>
                            <div>
                            <h2 className='fs-3 text-white fw-bold'>{testimonial.title}</h2>
                            <p className="fs-6">{testimonial.content}</p>
                            <button className="btn btn-light btn-sm rounded px-4 text-main mx-0 rounded-pill">more</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="buttons d-flex gap-3">
                    <button className="tg-btn" onClick={scrollLeft}>
                        <i className="bi bi-chevron-left text-main"></i>
                    </button>
                    <button className="tg-btn" onClick={scrollRight}>
                        <i className="bi bi-chevron-right text-main"></i>
                    </button>
                </div>

                {currentVideo && (
                    <div className="video-overlay" onClick={handleCloseVideo}>
                        <video className="video-player" controls src={currentVideo} autoPlay />
                    </div>
                )}
            </div>
        </section>
    );
}

export default TestimonialSlider;
