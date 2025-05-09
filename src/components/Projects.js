import { useState } from 'react';
import { Link } from 'react-router-dom';
import WebsiteImg1 from '../assets/ecommerce-websites.jpg';
import WebsiteImg2 from '../assets/food-ecommerce.jpg';
import WebsiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    
    // Detect touch devices
    useState(() => {
        setIsTouchDevice('ontouchstart' in window);
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

    const handleCardClick = (e) => {
        if (isTouchDevice) {
            e.currentTarget.classList.toggle('active');
        }
    };

    return (
        <section className={`flex flex-col py-20 px-5 justify-center bg-primary text-white ${isTouchDevice ? 'touch' : ''}`} id="projects">
            <div className="w-full">
                <div className="flex flex-col px-4 md:px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best Projects. I have built these with React, Flutter, MERN and more. Check them out.</p>
                </div>
            </div>
            <div className="w-full px-4 md:px-10">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {config.projects.map((project, index) => (
                        <div 
                            className="project-card"
                            key={index}
                            onClick={handleCardClick}
                        >
                            <div className="project-card-inner">
                                <div className="project-card-front">
                                    <img 
                                        className='h-full w-full object-cover'
                                        src={project.image} 
                                        alt={project.title || "Project screenshot"}
                                    />
                                </div>
                                <div className="project-card-back">
                                    <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                                    <p className='text-gray-300 mb-4 flex-grow'>
                                        {project.shortDescription}
                                    </p>
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className='tech-tag'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className='project-buttons flex flex-col sm:flex-row justify-between gap-2 mt-auto'>
                                        <a 
                                            className='project-button view-code-btn'
                                            target='_blank' 
                                            rel="noopener noreferrer"
                                            href={project.link}
                                        >
                                            View Code
                                        </a>
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className='project-button view-details-btn'
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}