"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { FaLaptopCode, FaFileAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";



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

const Nav = () => {
   const pathName = usePathname();
   return (
      <nav className="flex gap-8">
         {links.map((link, index) => {
            return (
               <Link href={link.path}
                  key={index}
                  className={`${link.path === pathName && "text-accent border-b-2 border-accent"
                     } capitalize font-medium hover:text-accent transition-all flex items-center gap-2`}
               >
                  {link.icon}
                  {link.name}
               </Link>
            );
         })}
      </nav>
   );
};

export default Nav;