import BlogItem from "@/components/Blog/BlogItem";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import React, {useEffect, useState} from "react";
import {Icon} from "@iconify/react";
import {pb} from "@/pb";
import {IPost} from "@/app/blog/page";
import Link from "next/link";
import {usePostsStore} from "@/store/usePostsStore";

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

    const {posts, fetchPosts} = usePostsStore()

    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <>
            <div className="mt-24">
                <div className='flex justify-center'>
                    <TypewriterEffect words={blogTitle} className="text-center md:text-left"/>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-12 gap-6'>
                    {
                        posts.slice(0,3).map(post => {
                            return (
                                <BlogItem key={post.id} {...post}/>
                            )
                        })
                    }
                </div>
                <Link
                    href="/blog"
                    className="mt-10 flex gap-2 items-center justify-center mx-auto text-md sm:text-xl rounded-[41px] border-[1.5px] border-[#2EECC5] px-4 md:px-8 py-2 md:py-4 w-fit text-center bg-[#2EECC5]/10 hover:bg-[#2EECC5]/25 cursor-pointer transition-all duration-300 hover:shadow-shadowInput hover:gap-4">
                    Більше новин <Icon icon="iconamoon:arrow-right-2"/>
                </Link>
            </div>
        </>
    )
}