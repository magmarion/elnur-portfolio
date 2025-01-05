"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Building responsive, fast, and reliable websites tailored to your needs.",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "Designing user-friendly interfaces that enhance user experiences.",
        href: ""
    },
    {
        num: "03",
        title: "Logo Design",
        description: "LCreating unique and memorable logos that represent your brand identity.",
        href: ""
    },
    {
        num: "04",
        title: "Accessibility Analysis",
        description: "Ensuring your website is accessible to all users, meeting modern standards.",
        href: ""
    },
];

import { motion } from "framer-motion";


const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            // display service
                            <div key={index}
                                className="flex flex-1 flex-col justify-center gap-6 group"
                            >
                                {/* servie num and arrow */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline
                                    text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}</div>

                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
                                    group-hover:bg-accent transition-all duration-500 flex
                                    justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[40px] font-bold leading-none text-white
                                group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                    {/* description */}
                                </h2>
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}

                </motion.div>
            </div>
        </section>

    );

};

export default Services;