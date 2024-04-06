import React, { useState, useRef, useEffect } from 'react';

const SocialMedia = () => {
    const [isOpen, setIsOpen] = useState(false);
    const collapseRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const sendWhatsAppMessage = () => {
        const phoneNumber = '+212653843557'; 
        const message = `hello,`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };
    const goInstagram = () => {
        const instagramUsername = 'oussama.haddach'; 
        const instagramURL = `https://www.instagram.com/${instagramUsername}/?hl=en`;
        window.open(instagramURL, '_blank');
    };
    const callPhoneNumber = () => {
        const phoneNumber = '+212653843557'; 
        window.location.href = `tel:${phoneNumber}`;
    };


    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (collapseRef.current && !collapseRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="absolute -top-12  right-0">
            {isVisible && (
                <div
                    aria-label="scroll to top"
                    className="hover:shadow-signUp flex h-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
                >
                    <div className='flex justify-center' ref={collapseRef}>
                       
                        {isOpen && 
                            <div className='w-35 flex justify-around text-primary bg-white/80 py-1 rounded-xl mx-3'>
                            <button onClick={sendWhatsAppMessage}>
                            <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            </button>
                            <button onClick={goInstagram }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            </button>
                            <button onClick={callPhoneNumber}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                            </button>
                        </div>
                        }
                    
                        <button className='px-2 ' onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
                        </button>
                    </div>
                    <span className="sr-only">Social media</span>
                </div>
            )}
        </div>
    );

}

export default SocialMedia
