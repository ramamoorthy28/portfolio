import { useNavigate } from 'react-router-dom';
import WebsiteImg1 from '../assets/ecommerce-websites.jpg';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function HotelBookingApp() {
    const navigate = useNavigate();
    
    const projectDetails = {
        title: "Hotel Booking App",
        image: WebsiteImg1,
        description: "A full-featured cross-platform hotel booking application developed with Flutter and Firebase.",
        features: [
            "User authentication (Email/Password & Google Sign-In)",
            "Comprehensive hotel search with filters (price range, location, amenities)",
            "Real-time booking system with calendar integration",
            "Secure payment processing via Razorpay integration",
            "Interactive reviews and ratings system",
            "Admin dashboard for property management",
            "Push notifications for booking confirmations",
            "Responsive design for all device sizes"
        ],
        technologies: [
            { name: "Flutter", purpose: "Cross-platform UI development" },
            { name: "Dart", purpose: "Application logic" },
            { name: "Firebase Auth", purpose: "User authentication" },
            { name: "Firestore", purpose: "Real-time database" },
            { name: "Riverpod", purpose: "State management" },
            { name: "Google Maps API", purpose: "Location services" },
            { name: "Razorpay", purpose: "Payment processing" }
        ],
        challenges: [
            "Implemented complex date-range selection for bookings",
            "Optimized image loading for property galleries",
            "Solved real-time availability synchronization issues",
            "Enhanced security for payment processing"
        ],
        githubLink: "https://github.com/ramamoorthy28/hotel-booking-app",
        liveDemo: "#" // Add your live demo link if available
    };

    return (
        <div className="min-h-screen bg-gray-100">
           

            {/* Project Header */}
            <div className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{projectDetails.title}</h1>
                    <p className="text-xl text-gray-600 mb-8">{projectDetails.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a 
                            href={projectDetails.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            <FaGithub className="mr-2" />
                            View Source Code
                        </a>
                        {projectDetails.liveDemo && (
                            <a 
                                href={projectDetails.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                <FiExternalLink className="mr-2" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Project Screenshot */}
                <div className="mb-6">
                    <img 
                        src={projectDetails.image} 
                        alt={projectDetails.title}
                        className="w-full rounded-xl shadow-xl border border-gray-200"
                    />
                </div>

                {/* Features Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-primary pb-2">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projectDetails.features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-blue-600 font-bold mb-2">Feature #{index + 1}</div>
                                <p className="text-gray-700">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-primary pb-2">Technologies Used</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projectDetails.technologies.map((tech, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.name}</h3>
                                <p className="text-gray-600">{tech.purpose}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-primary pb-2">Challenges & Solutions</h2>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <ul className="space-y-6">
                            {projectDetails.challenges.map((challenge, index) => (
                                <li key={index} className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <p className="text-gray-700">{challenge}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interested in this project?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Feel free to explore the code or contact me if you'd like to discuss this project further.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a 
                            href={projectDetails.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            <FaGithub className="mr-2" />
                            View on GitHub
                        </a>
                        <a 
                            href="#contact"
                            className="flex items-center bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}