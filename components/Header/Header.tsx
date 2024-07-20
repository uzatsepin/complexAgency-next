import React from "react";
import Image from "next/image";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";

export default function Header() {
    const links = [
        {
            name: "Головна",
            link: "/",
            icon: "lucide:home"
        },
        {
            name: "Чому саме мы?",
            link: "/",
            icon: "lucide:shield-question"
        },
        {
            name: "Контакти",
            link: "/",
            icon: "lucide:phone-call"
        }
    ];

    return (
        <div className="flex items-center justify-between relative px-2 md:px-0">
            <div>
                <Image
                    src="./logo.svg"
                    width={131}
                    height={65}
                    alt="logo"
                />
            </div>
            <div>
                <ul className="gap-10 border border-[#FFFFFF30] px-6 py-2 rounded-full hidden md:flex">
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="flex items-center border border-transparent gap-2 py-2 px-4 rounded-full hover:bg-[#21232C] transition-all duration-300 cursor-pointer">
                            {/* <Icon icon={link.icon} /> */}
                            <a
                                href={link.link}
                                className="text-lg">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Button
                    borderRadius="9999px"
                    className="border-[#2EECC5] bg-[#2EECC5]/10 text-lg font-bold">
                    Замовити
                </Button>
            </div>
        </div>
    );
}
