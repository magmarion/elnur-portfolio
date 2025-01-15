"use client"

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
    {
        num: 1,
        text: "Years of Experience"
    },
    {
        num: 5,
        text: "Projects Involved"
    },
    {
        num: 12,
        text: "Techonologies Used"
    },
    {
        num: 250,
        text: "Code Commits"
    },
];

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-12">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }} // Startar osynligt
                    animate={{ opacity: 1 }} // Gör det synligt
                    transition={{
                        delay: 2.4,
                        duration: 0.5,
                        ease: "easeIn"
                    }}
                    className="grid gap-6 mx-auto max-w-[80vw] xl:max-w-none
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
                >
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex-1 flex gap-4 items-center justify-center
                                xl:justify-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={3}
                                    className="text-4xl xl:text-6xl font-extrabold text-accent"
                                />
                                <p className={`${item.text.length > 10 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section >
    );
};


export default Stats;