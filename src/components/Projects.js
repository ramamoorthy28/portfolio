import WebsiteImg1 from '../assets/ecommerce-websites.jpg';
import WebsiteImg2 from '../assets/food-ecommerce.jpg';
import WebsiteImg3 from '../assets/website-blog.jpg';
import { Link } from 'react-router-dom';

export default function Projects() {
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

    return (
        <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="projects">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best Projects. I have built these with React, Flutter, MERN and more. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <div className='relative group' key={index}>
                            <img 
                                className='h-[200px] w-[500px] object-cover rounded-t-lg' 
                                src={project.image} 
                                alt={project.title || "Project screenshot"}
                            />
                            <div className='project-desc bg-secondary p-5 rounded-b-lg'>
                                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                                <p className='text-gray-300 mb-4'>
                                    {project.shortDescription}
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className='bg-gray-800 px-2 py-1 rounded text-sm'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-between items-center mt-4'>
                                    <a 
                                        className='button bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors'
                                        target='_blank' 
                                        rel="noopener noreferrer"
                                        href={project.link}
                                    >
                                        View Code
                                    </a>
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className='button bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors'
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}