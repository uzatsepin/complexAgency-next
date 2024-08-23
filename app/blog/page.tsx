import Header from "@/components/Header/Header";
import React from "react";
import Link from "next/link";
import {Icon} from "@iconify/react";

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
    return (
        <div
            id="hero"
            className="flex flex-col bg-center bg-no-repeat bg-cover bg-opacity-4 bg-blend-luminosity"
            style={{backgroundImage: "url('/wave-whyUs.svg')", backgroundColor: "rgba(24, 11, 28, 0.04)"}}>
            <div className="container mx-auto pt-6 h-screen px-4 md:px-6 relative">
                <Header links={links}/>

                <h1 className='mt-14 text-3xl text-center font-bold'>Блог</h1>
                <div className='mt-14 flex gap-10'>
                    <div className='p-4 rounded-2xl min-w-[350px] shadow-lg bg-zinc-900/[0.8] backdrop-blur-xl'>
                        <h2 className='text-lg text-center text-white/80 pb-3 border-b border-[#2EECC5]'>Популярні категорії</h2>

                        <ul className='mt-4 flex flex-col gap-2'>
                            <li>
                                <Link href='#' className='flex items-center justify-between'>
                                    <p className='text-lg'>Link</p>
                                    <Icon icon="ep:arrow-right-bold" />
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>link</Link>
                            </li>
                            <li>
                                <Link href='#'>link</Link>
                            </li>
                            <li>
                                <Link href='#'>link</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        222
                    </div>
                </div>
            </div>
        </div>
    )
}