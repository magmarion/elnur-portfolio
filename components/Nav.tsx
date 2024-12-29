"use client"

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";


const links = [
   {
      name: "Home",
      path: "/",
   },
   {
      name: "About",
      path: "/about",
   },
   {
      name: "Projects",
      path: "/my-projects",
   },
   {
      name: "Contact",
      path: "/contact",
   },
]

const Nav = () => {
   const pathName = usePathname();
   return (
      <nav className="flex gap-8">
         {links.map((link, index) => {
            return (
               <Link href={link.path}
                  key={index}
                  className={`${link.path === pathName && "text-accent border-b-2 border-accent"
                     } capitalize font-medium hover:text-accent transition-all`}
               >
                  {link.name}
               </Link>
            );
         })}
      </nav>
   );
};

export default Nav;