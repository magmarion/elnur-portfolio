"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "Elnur.Guliyev@medieinstitutet.se",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Metropolitan Gothenburg",
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    return <motion.section
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
    >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:w-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#171212] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60">
                            I'm a passionate front-end developer with experience in creating visually appealing,
                            responsive, and user-friendly websites. Whether you need a simple landing page or a full-fledged web application,
                            I'm here to help turn your ideas into reality.
                            I work closely with clients to ensure that the final product meets your business goals and user needs..
                        </p>
                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="First name" />
                            <Input type="lastname" placeholder="Last name" />
                            <Input type="email" placeholder="Email" />
                            <Input type="phone" placeholder="Phone" />
                        </div>
                        {/* select */}
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="web-development">Web Development</SelectItem>
                                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                    <SelectItem value="logo">Logo Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* text area */}
                        <Textarea
                            className="h-[200px]"
                            placeholder="Your message"
                        />
                        {/* btn */}
                        <Button size="md" className="max-w-40">
                            Send message
                        </Button>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end
                order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item, index) => {
                            return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                                    bg-[#171212] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>

                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>

    </motion.section>;
};

export default Contact;