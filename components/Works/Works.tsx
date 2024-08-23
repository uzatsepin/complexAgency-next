"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/moving-border";
import {pb} from "@/pb";

export interface IPortfolio {
    collectionId?: string
    collectionName?: string
    id?: string
    image?: string
    title?: string
    descr?: string
    type?: string
    technologiesIcons?: string[]
    hoverText?: string
    updated?: string
    created?: string,
}

const getUniqueTypes = (portfolio: IPortfolio[]): (string | undefined)[] => {
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
    const [portfolio, setPortfolio] = useState<IPortfolio[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const tabs = useMemo(() => getUniqueTypes(portfolio), [portfolio]);

    const filteredPortfolio = activeTab === "#" ? portfolio : portfolio.filter((item) => item.type === activeTab);

    const [dimensions, setDimensions] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const updateDimensions = useCallback(() => {
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

    const fetchWorks = async () => {
        try {
            setIsLoading(true);
            const worksData = await pb.collection("portfolio").getFullList<IPortfolio>({
                sort: "-created"
            });
            setPortfolio(worksData);
            setIsLoading(false);

        } catch (e) {
            console.error(e);
            setError("Ошибка при загрузке данных");
            setIsLoading(false);
        }
    }

    useEffect(() => {
        updateDimensions();
    }, [updateDimensions]);

    useEffect(() => {
        fetchWorks();

    }, []);

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
                                onClick={() => setActiveTab(type ? type : '')}>
                                {type === "#" ? "All" : type?.replace("#", "")}
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
