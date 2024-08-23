import BlogItem from "@/components/Blog/BlogItem";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import React from "react";
import {Icon} from "@iconify/react";

export default function Blog() {
    const blogTitle = [
        {
            text: 'Блог',
            className: "text-white"
        },
        {
            text: 'компанії',
            className: "text-white"
        },
        {
            text: 'ComplexAgency',
            className: "text-[#2EECC5]"
        }
    ]
    return (
        <>
            <div className="mt-24">
                <div className='flex justify-center'>
                    <TypewriterEffect words={blogTitle} className="text-center md:text-left"/>
                </div>
                <div className='grid grid-cols-3 mt-8'>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                </div>
                <a
                    href="#whyUs"
                    className="mt-6 flex gap-2 items-center justify-center mx-auto text-md sm:text-xl rounded-[41px] border-[1.5px] border-[#2EECC5] px-4 sm:px-8 py-2 sm:py-2 w-fit text-center bg-[#2EECC5]/10 hover:bg-[#2EECC5]/25 cursor-pointer transition-all duration-300 hover:shadow-shadowInput hover:gap-4">
                    Більше новин <Icon icon="iconamoon:arrow-right-2"/>
                </a>
            </div>
        </>
    )
}