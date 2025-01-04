import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/elnurguliy" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/elnur-guliyev-a937631a3/" },
];

const Social = ({ containerStyles, iconStyles }: { containerStyles: string, iconStyles: string }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;