"use client";

import { FaCss3, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { SiExpress, SiFramer, SiMongodb, SiNextdotjs, SiPrisma, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";

// experience data
const experience = {
    icon: "/",
    title: "My experience",
    description:
        `Collaborated with cross-functional teams on various projects,
    contributing to effective communication, task coordination, and achieving shared objectives.`,
    items: [
        {
            company: "Volvo Cars",
            position: "Operator",
            duration: "2019 - present",
        },
        {
            company: "BK Häcken/Gothia Cup",
            position: "Team Leader",
            duration: "2023",
        },
        {
            company: "BK Häcken/Gothia Cup",
            position: "Official",
            duration: "2022",
        },
        {
            company: "4-gott AB",
            position: "Salesperson",
            duration: "2018",
        },
        {
            company: "Johnssens Konditori",
            position: "Package Handler",
            duration: "2017",
        },
    ],
};

// education data
const education = {
    icon: "/",
    title: "My education",
    description:
        `Currently studying Front-End Development and Web Programming at Medieinstitutet,
    with prior studies in Information Technology at Jönköping University and IT-focused high school education.`,
    items: [
        {
            institution: "Medieinstitutet",
            degree: "Front-End Development and Web Programming",
            duration: "2024 - present",
        },
        {
            institution: "Jönköping University",
            degree: "Science in Information Technology",
            duration: "2022 - 2023",
        },
        {
            institution: "Online Course Platform",
            degree: "C++ Course Certification",
            duration: "2023",
        },
        {
            institution: "International IT College of Sweden",
            degree: "High School Diploma",
            duration: "2017 - 2019",
        },

    ],
};

// skills data
const skills = {
    title: "My skills",
    description:
        `Skilled in foundational technologies to build modern, user-focused websites,
    including HTML, CSS, and JavaScript. Committed to continuous learning and improvement,
    exploring new tools and frameworks to stay aligned with advancements in the field.`,
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaSript",
        },
        {
            icon: <SiTypescript />,
            name: "TypeSript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiPrisma />,
            name: "Priisma",
        },
        {
            icon: <SiExpress />,
            name: "Express.js",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiFramer />,
            name: "Framer Motion",
        },
        {
            icon: <SiShadcnui />,
            name: "Shadcn UI",
        },
        {
            icon: <FaGitAlt />,
            name: "Git",
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
    ],
};

// about data
const about = {
    title: "About Me",
    description:
        `Feel free to reach out for collaboration or inquiries.
        Below are my contact details. Most easily reached by email.
        Also, you can find me on LinkedIn and GitHub.`,
    info: [
        {
            filedName: "Name",
            fieldvalue: "Elnur Guliyev",
        },
        {
            filedName: "Email",
            fieldvalue: "Elnur.Guliyev@medieinstitutet.se ",
        },
        {
            filedName: "Experience",
            fieldvalue: "Emerging...",
        },
        {
            filedName: "Nationality",
            fieldvalue: "Azerbaijani/Swedish",
        },
        {
            filedName: "Languages",
            fieldvalue: "Azerbaijani, Turkish, English, Swedish",
        },
        {
            filedName: "Freelance",
            fieldvalue: "Available",
        },
    ]
};

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
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
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#171212] h-[184px] py-6 px-10 rounded-xl 
                                                    flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                    text-center lg:text-left">{item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#171212] h-[184px] py-2 px-10 rounded-xl 
                                                    flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[360px] min-h-[60px]
                                                    text-center lg:text-left">{item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>

                                                {/* Provides context for the tooltip, managing its behavior and settings like delay before showing the tooltip. */}
                                                <TooltipProvider delayDuration={100}>
                                                    {/* The container for the tooltip logic. Wraps the trigger and content components. */}
                                                    <Tooltip>
                                                        {/* The element that triggers the tooltip to show when hovered or focused. */}
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#171212] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        {/* Defines the content that appears in the tooltip when triggered. */}
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-16 max-w-3xl mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="flex flex-col gap-2 w-full md:flex-row md:gap-4 items-start">

                                                    <span className="text-white/60 flex-shrink-0">{item.filedName}</span>
                                                    <div className="md:flex md:flex-wrap gap-2">
                                                        {item.fieldvalue.split(",").map((value, i) => (
                                                            <span key={i} className="text-md block md:inline">{value}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;