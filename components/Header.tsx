import Link from "next/link";
// import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Photo from "./Photo";
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold flex items-center gap-2">
                        Elnur <Photo /> </h1>
                </Link>

                {/* desktop nav and hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    {/* <Button className="ml-6">Work With Me</Button> */}
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;