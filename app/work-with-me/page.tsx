"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";


const WorkWithMe = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-accent text-center mb-12">Let's Work Together</h1>

            <div className="space-y-8">
                {/* Why Hire Me Section */}
                <div className="bg-[#27272c] p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl text-accent font-semibold">Why Hire Me?</h3>
                    <p className="list-disc text-white/60 pl-6 mt-4 text-lg">
                        What sets me apart is my attention to detail and commitment to delivering high-quality work.
                        I value clear communication, and I work hard to ensure the project stays within budget and on schedule.
                        I’m passionate about coding, and I constantly strive to stay updated with the latest technologies and trends in the industry.
                    </p>

                </div>

                {/* Process Section */}
                <div className="bg-[#27272c] p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl text-accent font-semibold">My Process</h3>
                    <ul className="list-decimal text-white/60 pl-6 mt-4 text-lg">
                        <li>Initial Consultation – Discuss your project, goals, and vision</li>
                        <li className="ml-6">Proposal and Timeline – I'll provide a detailed proposal and cost estimate</li>
                        <li className="ml-12">Development – I’ll work on your project and keep you updated regularly</li>
                        <li className="ml-20">Launch and Support – I’ll ensure everything runs smoothly post-launch</li>
                    </ul>
                </div>

                {/* Call to Action Section */}
                <div className="text-center mt-8">
                    <p className="text-xl text-white/60 font-extrabold mb-4 animate-pulse">Ready to start your project?</p>
                    <Button className="hover:animate-bounce">
                        <Link href="/contact">
                            Collaborate
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WorkWithMe;
