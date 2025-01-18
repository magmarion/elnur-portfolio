"use client"

import { useEffect } from "react";

const ParticlesBackground = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const particlesJS = require('particlesjs');
            
            particlesJS.init({
                selector: ".background",
                maxParticles: 100,
                color: ['#ffffff', '#00ff00', "#ff0000"], // Multicolor particles
                connectParticles: false,
            });
        }
    }, []);

    return <canvas className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none background" />;
};

export default ParticlesBackground;