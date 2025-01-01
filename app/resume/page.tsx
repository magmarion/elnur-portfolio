"use client";

import { title } from "process";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
    info: [
        {
            filedName: "Name",
            fieldvalue: "Elnur Guliyev",
        },
        {
            filedName: "Phone",
            fieldvalue: "(+46) xxxxxxxxx",
        },
        {
            filedName: "Email",
            fieldvalue: "ellnur@example.com",
        },
        {
            filedName: "Experience",
            fieldvalue: "10+ Years",
        },
        {
            filedName: "Nationality",
            fieldvalue: "Azerbaijan",
        },
        {
            filedName: "Languages",
            fieldvalue: "Azerbaijan, Turkish, English, Swedish",
        },
        {
            filedName: "Freelance",
            fieldvalue: "Available",
        },
    ]
};

// experience data
const experience = {
    icon: "/",
    title: "My experience",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
    items: [
        {
            company: "Company Name",
            position: "Position",
            duration: "Duration",
        },
        {
            company: "Company Name",
            position: "Position",
            duration: "Duration",
        },
        {
            company: "Company Name",
            position: "Position",
            duration: "Duration",
        },
        {
            company: "Company Name",
            position: "Position",
            duration: "Duration",
        },
        {
            company: "Company Name",
            position: "Position",
            duration: "Duration",
        },
    ],
};

// education data
const education = {
    icon: "/",
    title: "My education",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
    items: [
        {
            institution: "Institution Name",
            degree: "degree",
            duration: "Duration",
        },
        {
            institution: "Institution Name",
            degree: "degree",
            duration: "Duration",
        },
        {
            institution: "Institution Name",
            degree: "degree",
            duration: "Duration",
        },
        {
            institution: "Institution Name",
            degree: "degree",
            duration: "Duration",
        },

    ],
};

// skills data
const skills = {
    title: "My skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
    skillList: [
        {
            icon: "FaHtml5",
            name: "HTML",
        },

        {
            icon: "FaCss3",
            name: "Css 3",
        },

        {
            icon: "FaJs",
            name: "Javascript",
        },

        {
            icon: "FaReact",
            name: "React",
        },

        {
            icon: "FaFigma",
            name: "Figma",
        },
        {
            icon: "SiNextdotjs",
            name: "Next.js",
        },
        {
            icon: "SiTailwindcss",
            name: "Tailwind",
        },
        {
            icon: "FaNodeJs",
            name: "Node.js",
        },
    ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-16"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;