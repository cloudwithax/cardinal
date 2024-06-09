import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const navRef = useRef(null);

    const observer = useRef(
        new IntersectionObserver(
            ([entry]) => {
                if (entry.boundingClientRect.y < lastScrollY.current) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                lastScrollY.current = entry.boundingClientRect.y;
            },
            { threshold: [0] }
        )
    );

    useEffect(() => {
        const currentObserver = observer.current;
        if (navRef.current) {
            currentObserver.observe(navRef.current);
        }
        return () => {
            if (navRef.current) {
                currentObserver.unobserve(navRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={navRef}
            className={`fixed top-0 w-full bg-gray-800 text-white p-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <h1>Navbar</h1>
        </div>
    );
};

export default Navbar;
