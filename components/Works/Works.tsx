"use client";

import React, { useEffect, useRef, useState } from "react";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/moving-border";

interface IPortfolio {
    id: number;
    image: string;
    title: string;
    descr: string;
    type: string;
    technologiesIcons: string[];
    hoverText: string;
}

const portfolio: IPortfolio[] = [
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
        descr: "Дизайн буклету для компанії, яка проводить тренування",
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

const getUniqueTypes = (portfolio: IPortfolio[]): string[] => {
    const types = portfolio.map((item) => item.type);
    return ["#", ...Array.from(new Set(types))];
};

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

const Works: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("#");
    const tabs = getUniqueTypes(portfolio);

    const filteredPortfolio = activeTab === "#" ? portfolio : portfolio.filter((item) => item.type === activeTab);

    const [dimensions, setDimensions] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        if (tabRefs.current) {
            const activeTabElement = tabRefs.current[tabs.indexOf(activeTab)];
            if (activeTabElement) {
                setDimensions({
                    left: activeTabElement.offsetLeft,
                    width: activeTabElement.offsetWidth
                });
            }
        }
    }, [activeTab, tabs]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    return (
        <section
            id="portfolio"
            className="bg-worksBg bg-cover bg-center min-h-screen">
            <div className="container mx-auto px-2 sm:px-0">
                <div className="mt-12 lg:mt-24">
                    <TypewriterEffect
                        words={title}
                        className="text-center"
                    />
                </div>
                <div className="w-full max-w-md mx-auto mt-8 lg:mt-12">
                    <div className="relative flex rounded-xl bg-zinc-800 p-1">
                        <div
                            className="absolute top-1 bottom-1 transition-all duration-300 ease-out bg-[#2eecc5] rounded-lg shadow-md"
                            style={{ left: `${dimensions.left}px`, width: `${dimensions.width}px` }}></div>
                        {tabs.map((type, index) => (
                            <button
                                key={type}
                                ref={(el) => { tabRefs.current[index] = el; }}
                                className={`relative z-10 w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white transition-colors duration-300 ${
                                    activeTab === type ? "text-zinc-900" : "hover:text-[#2EECC5]"
                                }`}
                                onClick={() => setActiveTab(type)}>
                                {type === "#" ? "All" : type.replace("#", "")}
                            </button>
                        ))}
                    </div>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-12">
                    <AnimatePresence>
                        {filteredPortfolio.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                layout>
                                <PortfolioCard {...item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 w-full mx-auto flex justify-center">
                    <Button
                        borderRadius="9999px"
                        className="border-[#2EECC5] bg-[#2EECC5]/10 text-lg font-bold">
                        Замовити
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Works;
