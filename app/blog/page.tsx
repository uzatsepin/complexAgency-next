'use client'

import Header from "@/components/MainPage/Header/Header";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {pb} from "@/pb";
import BlogItem from "@/components/Blog/BlogItem";
import Footer from "@/components/MainPage/Footer/Footer";
import {AnimatePresence, motion} from "framer-motion";

interface ITag {
    collectionId: string
    collectionName: string
    created: string
    id: string
    name: string
    updated: string
}

export interface IPost {
    collectionId: string
    collectionName: string
    created: string
    full_descr: string
    id: string
    image: string
    short_descr: string
    tag: string
    title: string
    updated: string
    expand: {
        tag: ITag
    }
}

export default function BlogPage() {
    const links = [
        {
            name: "Головна",
            link: "/#hero",
            icon: "lucide:home"
        },
        {
            name: "Про нас",
            link: "/#whyUs",
            icon: "lucide:shield-question"
        },
        {
            name: "Контакти",
            link: "/#contacts",
            icon: "lucide:phone-call"
        }
    ];
    const getUniquenames = (tags: ITag[]): (string | undefined)[] => {
        const names = tags.map((item) => item.name);
        return ["#", ...Array.from(new Set(names))];
    };
    const [posts, setPosts] = useState<IPost[]>([])
    const [activeTab, setActiveTab] = useState<string>("#");

    const filteredPosts = activeTab === "#" ? posts : posts.filter((item) => item.expand.tag.name === activeTab);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState<{ left: number; width: number }>({left: 0, width: 0});
    const [tags, setTags] = useState<ITag[]>([]);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const tabs = useMemo(() => getUniquenames(tags), [tags]);
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

    const fetchTags = async () => {
        try {
            setIsLoading(true);
            const worksData = await pb.collection("tags").getFullList<ITag>({
                sort: "-created",
            });
            setTags(worksData);
            setIsLoading(false);

        } catch (e) {
            console.error(e);
            setError("Ошибка при загрузке данных");
            setIsLoading(false);
        }
    }

    const fetchPosts = async () => {
        try {
            const posts = await pb.collection("posts").getFullList<IPost>({
                sort: "-created",
                expand: "tag"
            });
            setPosts(posts);
        } catch (e) {
            console.error(e);
            setError("Ошибка при загрузке данных");
        }
    }

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

    useEffect(() => {
        updateDimensions();
    }, [updateDimensions]);

    useEffect(() => {
        fetchTags();
        fetchPosts()
    }, []);

    return (
        <div className='pb-14'>
            <div
                className="flex flex-col bg-center bg-no-repeat bg-cover bg-opacity-4 bg-blend-luminosity"
                style={{backgroundImage: "url('/wave-whyUs.svg')", backgroundColor: "rgba(24, 11, 28, 0.04)"}}>
                <div className="container mx-auto pt-6 px-4 md:px-6 relative">
                    <Header links={links}/>

                    <h2 className='mt-10 text-3xl text-center font-bold'>Блог</h2>
                    <div className="w-full max-w-md mx-auto mt-8">
                        <div className="relative flex rounded-xl bg-zinc-800 p-1">
                            <div
                                className="absolute top-1 bottom-1 transition-all duration-300 ease-out bg-[#2eecc5] rounded-lg shadow-md"
                                style={{left: `${dimensions.left}px`, width: `${dimensions.width}px`}}></div>
                            {tabs.map((name, index) => (
                                <button
                                    key={name}
                                    ref={(el) => {
                                        tabRefs.current[index] = el;
                                    }}
                                    className={`relative z-10 w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white transition-colors duration-300 ${
                                        activeTab === name ? "text-zinc-900" : "hover:text-[#2EECC5]"
                                    }`}
                                    onClick={() => setActiveTab(name ? name : '')}>
                                    {name === "#" ? "Всі" : name?.replace("#", "")}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='mt-8'>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mt-8 lg:mt-12">
                            <AnimatePresence>
                                {filteredPosts.map((post) => (
                                    <motion.div
                                        key={post.id}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        layout>
                                        <BlogItem {...post} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}