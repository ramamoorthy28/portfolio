import WebsiteImg1 from '../assets/ecommerce-websites.jpg'
import WebsiteImg2 from '../assets/food-ecommerce.jpg'
import WebsiteImg3 from '../assets/website-blog.jpg'

export default function Projects() {
    const config = {
        projects : [
        {
            image: WebsiteImg1,
            description: "An eCommerce platform built with the MERN stack, offering a smooth shopping experience with scalability and performance.",
            link: "https://github.com/ramamoorthy28/Projects"
        },
        {
            image: WebsiteImg2,
            description: "A food delivery platform offering a seamless, fast, and user-friendly way to order meals from local restaurants, similar to Swiggy.",
            link: "https//github.com/ram/ram_Food"
        },
        {
            image: WebsiteImg3,
            description: "A simple and responsive blog website to share posts and articles. Built with Next.js for server-side rendering and optimal performance.",
            link: "https//github.com/ram/ram_Blog"
        },
    ]
} 



    return  <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="projects">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
        <p>These are some of My best Projects. I have built these with React, MERN and Vanilla CSS. Check them out.</p>

        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            
            {config.projects.map((project) => (
             <div className='relative'>
            <img className='h-[200px] w-[500px]'  src= {project.image}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'> {project.description}</p>
                <div className='flex justify-center'>
                <a className='button' target='_blank' href={project.link}>View Project</a>
            </div>
            </div>
           </div>
           
        ))}
            
        
          </div>
        </div>
        
    </section>
}