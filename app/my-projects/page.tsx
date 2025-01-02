"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

// swiper install with npm i swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "Frontend",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
        stack: [{ name: "HTML5" }, { name: "CSS3" }],
        image: "/",
        github: "",
        live: "",
    },
    {
        num: "02",
        category: "Frontend",
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
        image: "/",
        github: "",
        live: "",
    },
    {
        num: "03",
        category: "Frontend",
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
        stack: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
        image: "/",
        github: "",
        live: "",
    },
]




const Project = () => {
    const [project, setProject] = useState(projects[0]);
    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            // className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        }}
        >
            <div className="container mx-auto">
                <div>
                    <div>text</div>
                    <div>slider</div>
                </div>
            </div>
        </motion.section>
    );
};

export default Project; 