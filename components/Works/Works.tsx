"use client";

import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";
export default function Works() {
    const portfolio = [
        {
            id: 1,
            image: "/projects/phoenix-auto.png",
            title: "Phoenix Auto",
            descr: "Дизайн сайту автопідбору Pheonix Auto",
            type: "#Design",
            technologiesIcons: ["devicon:figma"],
            hoverText: "Розробка коштувала 5 000 грн"
        },
        {
            id: 2,
            image: "/projects/sprintech.png",
            title: "SprtiTech",
            descr: "Дизайн і розробка сайту SprtiTech",
            type: "#Project",
            technologiesIcons: ["devicon:figma", "devicon:html5", "logos:react", "devicon:css3"],
            hoverText: "Розробка коштувала 7 000 грн"
        },
        {
            id: 3,
            image: "/projects/starlab.png",
            title: "StarLab",
            descr: "Дизайн і розробка сайту StarLab",
            type: "#Project",
            technologiesIcons: ["devicon:figma", "devicon:html5", "devicon:vuejs", "devicon:css3"],
            hoverText: "Розробка коштувала 12 000 грн"
        },
        {
            id: 4,
            image: "/projects/blog.png",
            title: "Personal Blog",
            descr: "Дизайн персонального блогу для ментора",
            type: "#Design",
            technologiesIcons: ["devicon:figma"],
            hoverText: "Розробка коштувала 4 000 грн"
        },
        {
            id: 5,
            image: "/projects/market-making.png",
            title: "Айдентика Market-Making",
            descr: "Айдентика/логотип Market-Making",
            type: "#Design",
            technologiesIcons: ["devicon:figma"],
            hoverText: "Розробка коштувала 3 000 грн"
        },
        {
            id: 6,
            image: "/projects/training.png",
            title: "Дизайн буклету спортзалу",
            descr: "Дизайн буклету для компанії яка проводить тренування",
            type: "#Design",
            technologiesIcons: ["devicon:figma"],
            hoverText: "Розробка коштувала 2 000 грн"
        },
        {
            id: 7,
            image: "/projects/catford.png",
            title: "Розробка сайту Catford",
            descr: "Розробка сайту за готовим макетом",
            type: "#Develop",
            technologiesIcons: ["devicon:html5", "devicon:css3", "devicon:jquery"],
            hoverText: "Розробка коштувала 4 000 грн"
        },
        {
            id: 8,
            image: "/projects/bender-host.png",
            title: "Розробка сайту & адмін панелі",
            descr: "Розробка сайту та адмін панелі BerderHost",
            type: "#Develop",
            technologiesIcons: ["devicon:html5", "devicon:css3", "devicon:vuejs", "devicon:javascript"],
            hoverText: "Розробка коштувала 6 000 грн"
        }
    ];

    const title = [
        {
            text: "Портфоліо",
            className: "text-white"
        },
        {
            text: "компанії",
            className: "text-white"
        },
        {
            text: "Complex",
            className: "text-[#2EECC5]"
        },
        {
            text: "Agency",
            className: "text-[#2EECC5]"
        }
    ];

    return (
        <div className="bg-worksBg bg-cover bg-center min-h-screen">
            <div className="container mx-auto px-2 sm:px-0">
                <div className="my-24">
                    <TypewriterEffect
                        words={title}
                        className="text-center"
                    />
                </div>
                <motion.div
                    variants={fadeIn("top", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {portfolio.map((item) => (
                        <PortfolioCard
                            key={item.id}
                            {...item}
                        />
                    ))}
                </motion.div>

                <div className="mt-16 w-full mx-auto flex justify-center">
                    <Button
                        borderRadius="9999px"
                        className="border-[#2EECC5] bg-[#2EECC5]/10 text-lg font-bold">
                        Замовити
                    </Button>
                </div>
            </div>
        </div>
    );
}
