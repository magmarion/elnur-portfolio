"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma, FaNpm } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const icons = [
    { icon: <FaHtml5 className="text-red-500 text-3xl" />, position: 0 },
    { icon: <FaCss3 className="text-blue-500 text-3xl" />, position: 1 },
    { icon: <FaJs className="text-yellow-500 text-3xl" />, position: 2 },
    { icon: <FaReact className="text-blue-400 text-3xl" />, position: 3 },
    { icon: <FaNodeJs className="text-green-500 text-3xl" />, position: 4 },
    { icon: <FaGithub className="text-white text-3xl" />, position: 5 },
    { icon: <FaGitAlt className="text-white text-3xl" />, position: 6 },
    { icon: <SiTypescript className="text-blue-500 text-3xl" />, position: 7 },
    { icon: <SiTailwindcss className="text-sky-400 text-3xl" />, position: 8 },
    { icon: <SiNextdotjs className="text-white text-3xl" />, position: 9 },
    { icon: <FaFigma className="text-purple-600 text-3xl" />, position: 10 },
    { icon: <FaNpm className="text-orange-500 text-3xl" />, position: 11 }
];
const SpinningIcons = () => {

    // Calculate the position of each icon around the circle
    const radius = 80; // Radius of the circle
    const center = 100; // Center point of the container (half of the width/height of the container)

    return (
        <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
                opacity: { delay: 2.4, duration: 0.5 }, 
                rotate: {
                    delay: 2.4,
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity
                }, // Start the rotation after 2.4s
            }}
            className="relative w-[120px] h-[120px] mx-auto 
            xl:w-[200px] xl:h-[200px] mb-12 mt-28 xl:mb-0 xl:mt-0"
        >
            {/* Image placed in the center */}
            <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: '120%',  // Responsive size to fit inside the rotating circle
                    height: '120%', // Responsive size for the height
                    maxWidth: "270px",
                    maxHeight: "278px",
                    transformOrigin: "center",
                }}
            >
                <Image
                    src="/assets/white-curved-text.png"
                    width={270}
                    height={278}
                    alt=""
                    className="w-full h-full animate-spin-slow"
                />
            </div>

            {/* Individual icons positioned in a circle */}
            {icons.map((item, index) => {
                const angle = (index / icons.length) * 2 * Math.PI;
                const x = center + radius * Math.cos(angle) - 50; // Subtract 50 to center the icons
                const y = center + radius * Math.sin(angle) - 50; // Subtract 50 to center the icons

                return (
                    <div
                        key={index}
                        className="absolute"
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        {item.icon}
                    </div>
                );
            })}
        </motion.div>
    );
};

export default SpinningIcons;