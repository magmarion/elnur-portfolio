"use client";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

import SpinningIcons from "@/components/SpinningIcons";
import { useEffect } from "react";


const Home = () => {
    useEffect(() => {
        const handleCopy = (event: ClipboardEvent) => {
            event.preventDefault();
            alert("Stop stealing my content!");
        };

        document.addEventListener("copy", handleCopy);

        return () => {
            document.removeEventListener("copy", handleCopy);
        };
    }, []);

    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center
		            justify-between xl:pt-8 xl:pb-16">

                    {/* text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span>Front-End Developer</span>
                        <h1 className="h1 mb-6 text-5xl">
                            Hello, It's  <span className="text-accent">Elnur</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I’m a Front-End Developer with a strong focus on Backend development,
                            passionate about creating seamless and intuitive user experiences.
                            Skilled in HTML, CSS, JavaScript, React, and Next.js,
                            I specialize in turning designs into clean, efficient, and scalable code.
                            I thrive on learning, solving complex problems,
                            and building web solutions that resonate with users.
                            <span className="block mt-4">Let’s build something amazing together!</span>
                        </p>
                        {/* btn and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">

                            {/* download cv btn */}
                            {/* <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button> */}

                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
				                    text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                    {/* <div
                        className="w-[120px] h-[120px] xl:w-[350px] xl:h-[350px]
                        relative bottom-10 xl:bottom-auto xl:right-24 flex justify-center items-center"
                    >
                        <SiCodingninjas className="w-full h-full text-accent" />
                    </div> */}

                    <div className="relative bottom-10 xl:bottom-auto xl:right-32 flex justify-center items-center">
                        <SpinningIcons />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    )
};

export default Home;