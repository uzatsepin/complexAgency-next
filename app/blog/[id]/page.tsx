'use client'

import Header from "@/components/Header/Header";
import React, {useEffect, useState} from "react";
import {pb} from "@/pb";
import {IPost} from "@/app/blog/page";
import dayjs from "dayjs";
import Image from "next/image";
import {getImgUrl} from "@/lib/getImgUrl";
import Footer from "@/components/Footer/Footer";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function BlogPage({params}: { params: { id: string } }) {

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

    const [post, setPost] = useState<IPost>()
    const imgUrl = getImgUrl('s680rgnf6j0phmt', post?.id, post?.image)
    const router = useRouter()

    async function fetchPost() {
        try {
            const response = await pb.collection("posts").getOne<IPost>(params.id, {
                expand: 'tag'
            })
            setPost(response)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchPost()
    }, [])


    return (
        <div className='pb-16'>
            <div
                className="flex flex-col bg-center bg-no-repeat bg-cover bg-opacity-4 bg-blend-luminosity"
                style={{backgroundImage: "url('/wave-whyUs.svg')", backgroundColor: "rgba(24, 11, 28, 0.04)"}}>
                <div className="container mx-auto pt-6 px-4 md:px-6 relative">
                    <Header links={links}/>
                    <div onClick={() => router.back()} className='mt-6 flex items-center gap-2 text-[#2eecc5]'>
                        <Icon icon='iconamoon:arrow-left-2-light' className='w-6 h-6 text-[#2eecc5]'/>
                        Назад
                    </div>
                    <div className='p-4 lg:p-16 w-full bg-zinc-800 mt-10 rounded-2xl'>
                        <h1 className='text-center text-xl lg:text-3xl font-bold'>{post?.title}</h1>
                        <div className='flex items-center justify-between gap-4 mt-6'>
                            <div
                                className='text-sm lg:text-md text-zinc-900 py-1 px-2 lg:py-2 lg:px-4 bg-[#2eecc5] rounded-full'>{post?.expand.tag.name}</div>
                            <div className='text-sm lg:text-md text-white/80'>{dayjs(post?.created).format('DD.MM HH:mm')}</div>
                        </div>
                        <div className='w-full flex items-center justify-center mt-6'>
                            <Image src={imgUrl} width={500} height={500} priority={true} alt={post?.title || ''}
                                   className='rounded-2xl overflow-hidden'/>
                        </div>
                        <div className='mt-6'>
                            <p className='text-lg text-descr' dangerouslySetInnerHTML={{__html: post?.full_descr || ''}}>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}