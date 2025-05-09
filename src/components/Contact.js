import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    const config = {
        email: "ramstat.2328@gmail.com",
        phone: "9944132429",
        whatsapp: "https://wa.me/9944132429"
    }

    return <section className="flex flex-col bg-primary px-5 py-32 text-white" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">Contact</h1>
            <p className="pb-5">If you want to discuss more in detail, please contact me.</p>
            <p className="py-2"><span className="font-bold">Email:</span> {config.email}</p>
            <p className="py-2"><span className="font-bold">Phone:</span> {config.phone}</p>
            <div className="mt-5">
                <a 
                    href={config.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
                >
                    <FaWhatsapp size={20} />
                    Chat on WhatsApp
                </a>
            </div>
        </div>
    </section>
}