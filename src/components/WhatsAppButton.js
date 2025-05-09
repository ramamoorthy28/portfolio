import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    const phoneNumber = "9944132429"; // Your phone number from Contact.js
    const message = "Hello Ram, I came across your portfolio and wanted to connect with you.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return (
        <div className="fixed bottom-5 right-5 z-50">
            <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300"
                style={{ width: '60px', height: '60px' }}
            >
                <FaWhatsapp size={30} />
            </a>
        </div>
    );
}