"use client";

// Components to build a mobile navigation menu
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { FaGlideG } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaLaptopCode, FaFileAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

// installed hamburger menu icon from react-icons using "npm i react-icons"
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "Home",
        path: "/",
        icon: <AiFillHome />,
    },
    {
        name: "Services",
        path: "/services",
        icon: <FaLaptopCode />,

    },
    {
        name: "Resume",
        path: "/resume",
        icon: <FaFileAlt />,
    },
    {
        name: "Projects",
        path: "/my-projects",
        icon: <FaProjectDiagram />,
    },
    {
        name: "Contact",
        path: "/contact",
        icon: <FaEnvelope />,
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // onOpenChange is used to open and close the menu using X button and clicking anywhere outside of the Sheet
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger onClick={toggleMenu} className="flex justify-center items-center" aria-label="mobile-menu">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

                <div className="mt-20 mb-20 text-center text-2xl">
                    {/* by using preventDefault(), the menu will be closed when the logo is clicked, 
                    but the link will not be followed. */}
                    <Link href="/" onClick={(e) => {
                        e.preventDefault();
                        toggleMenu()
                    }}>
                        <h1 className="text-4xl font-semibold flex justify-center gap-2">
                            Elnur. <FaGlideG className="text-accent ml-[-10px] mt-2" />
                        </h1>
                    </Link>
                </div>

                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path}
                                key={index}
                                onClick={toggleMenu}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all flex items-center gap-2`}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>

    );
};

export default MobileNav;