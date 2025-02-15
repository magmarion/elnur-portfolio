"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

// swiper install: npm i swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Swiper as type for instance
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ProjectSliderBtns";

const projects = [
    {
        num: "01",
        category: "JavaScript Game",
        description: `A text-based adventure game where players explore a cave, interact with characters and objects,
                    and search for a legendary treasure. The game includes an inventory system, dynamic scenes, 
                    and multiple endings based on player decisions.`,
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
        image: "/assets/projectDemo/Frame3.png",
        github: "https://github.com/magmarion/FirstGame",
        demo: "https://magmarion.github.io/FirstGame/",
    },
    {
        num: "02",
        category: "P5.js Game",
        description: `A retro-inspired game drawing inspiration from classics like Snake, Tetris, and Mario,
        designed using p5.js and TypeScript with OOP principles. Developed by a team of four,
        the game is exclusively two-player, offering a progression from easy to challenging levels.
        With its stunning visuals, immersive background music, and dynamic sound effects,
        the experience is elevated to a whole new level.`,
        stack: [{ name: "TypeScript [OOP]" }, { name: "P5.js" }],
        image: "/assets/projectDemo/Frame4.png",
        github: "https://github.com/magmarion/oop_p5_game",
        demo: "https://oop-p5-game.vercel.app",
    },
    {
        num: "03",
        category: "Frontend",
        description: "A sleek and minimalist website designed with responsive HTML5 and CSS3, ensuring a seamless user experience across all devices.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }],
        image: "/assets/projectDemo/Frame1.png",
        github: "https://github.com/magmarion/html-css-website",
        demo: "https://magmarion.github.io/html-css-website/",
    },
    {
        num: "04",
        category: "UX/UI",
        description: "The objective of this project was to redesign an existing website with a focus on enhancing its accessibility.",
        stack: [{ name: "Figma" }, { name: "Lighthouse" }, { name: "Wcag" }],
        image: "/assets/projectDemo/Frame2.png",
        github: null,
        demo: "https://www.figma.com/proto/bHFqC4WRSE4Nospg5A7mVd/Bokus?node-id=177-686&p=f&t=kqq3op6OyOabOhVU-0&scaling=scale-down&content-scaling=fixed&page-id=176%3A12&starting-point-node-id=177%3A686",
    },
]


const Project = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: SwiperType) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                    xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent
                             text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white
                            grouop-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* project stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((stackItem, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {stackItem.name}
                                            {/* add comma and remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.demo} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5
                                            flex justify-center items-center group bg-[#171212]">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Demo project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                {/* Conditional Rendering: The Link component is only rendered if project.github contains a valid URL. If project.github is null, we render a placeholder div instead.
                                    Fallback Element: If project.github is null, we display a gray icon inside a div, which acts as a disabled button and prevents any errors from being thrown.
                                    No Error: Since we only pass a valid URL to the href attribute, the TypeScript error is avoided. */}
                                {project.github ? (
                                    < Link href={project.github} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5
                                            flex justify-center items-center group bg-[#171212]">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                ) : (
                                    <div className="w-[70px] h-[70px] rounded-full bg-gray-700 flex justify-center items-center">
                                        <BsGithub className="text-gray-500 text-3xl" />
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12 rounded-xl"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] rounded-md relative group flex justify-center
                                        items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    alt=""
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <ProjectSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                                w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section >
    );
};

export default Project; 