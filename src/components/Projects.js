import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WebsiteImg1 from '../assets/ecommerce-websites.jpg';
import WebsiteImg2 from '../assets/food-ecommerce.jpg';
import WebsiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const config = {
        projects: [
            {
                id: 'hotel-booking-app',
                image: WebsiteImg1,
                title: "Hotel Booking App",
                shortDescription: "A cross-platform hotel booking application built with Flutter and Firebase.",
                link: "https://github.com/ramamoorthy28/hotel-booking-app",
                technologies: ["Flutter", "Firebase", "Dart", "Riverpod"]
            },
            {
                id: 'food-delivery-app',
                image: WebsiteImg2,
                title: "Food Delivery Platform",
                shortDescription: "A food delivery platform offering a seamless way to order meals from local restaurants.",
                link: "https://github.com/ram/ram_Food",
                technologies: ["React", "Node.js", "MongoDB", "Express"]
            },
            {
                id: 'blog-website',
                image: WebsiteImg3,
                title: "Blog Website",
                shortDescription: "A responsive blog website built with Next.js for optimal performance.",
                link: "https://github.com/ram/ram_Blog",
                technologies: ["Next.js", "React", "Tailwind CSS"]
            },
        ]
    };

    const handleCardClick = (index) => {
        if (isTouchDevice) {
            setActiveCard(activeCard === index ? null : index);
        }
    };

    return (
        <section className="flex flex-col py-20 px-4 md:px-10 justify-center bg-primary text-white" id="projects">
            <div className="w-full mb-8">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best Projects. I have built these with React, Flutter, MERN and more. Check them out.</p>
            </div>
            
            <div className="project-container">
                {config.projects.map((project, index) => (
                    <div 
                        className={`project-card ${activeCard === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="project-card-inner">
                            <div className="project-card-front">
                                <img 
                                    className="h-full w-full object-cover"
                                    src={project.image} 
                                    alt={project.title}
                                />
                            </div>
                            <div className="project-card-back">
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <div className="project-content">
                                    <p className="text-gray-300 mb-4">{project.shortDescription}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-buttons">
                                    <a 
                                        className="project-button view-code-btn"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        href={project.link}
                                    >
                                        View Code
                                    </a>
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="project-button view-details-btn"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}