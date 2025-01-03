"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { title } from "process";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+46) xxxxxxxxx",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "myemail@gmail.com",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Address",
        description: "Kod Torget 9, Tech City 123 45",
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
                <div className="xl_h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Obcaecati, ut error molestias expedita laborum veritatis a reprehenderit perspiciatis exercitationem praesentium dignissimos.
                            Illum nam magnam quibusdam perferendis dignissimos voluptate nihil optio.
                        </p>
                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="First name"></Input>
                            <Input type="lastname" placeholder="Last name"></Input>
                            <Input type="email" placeholder="Email"></Input>
                            <Input type="phone" placeholder="Phone"></Input>
                        </div>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end
                order-1 xl:order-none mb-8 xl:mb-0">info</div>
            </div>
        </div>

    </motion.section>;
};

export default Contact;