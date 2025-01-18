"use client"

import { useEffect } from "react";

const ParticlesBackground = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // @ts-expect-error particlesjs library is not typed
            import('particlesjs').then((particlesJS) => {
                particlesJS.default.init({
                    selector: ".background",
                    maxParticles: 100,
                    color: ['#ffffff', '#00ff00', "#ff0000"],
                    connectParticles: false,
                });
            }).catch((error) => {
                console.error('Error loading particles.js:', error);
            });
        }
    }, []);

    return <canvas className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none background" />;
};

export default ParticlesBackground;