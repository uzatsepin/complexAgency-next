import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import {IPost} from "@/app/blog/page";
import {getImgUrl} from "@/lib/getImgUrl";

export default function BlogItem(post:IPost) {

    const imgUrl = getImgUrl('s680rgnf6j0phmt', post.id, post.image)

    return (
        <Link href={`/blog/${post.id}`} className="group transition-all duration-300 block w-full">
            <div className="w-full overflow-hidden rounded-t-3xl shadow-lg hover:shadow-xl relative group">
                <div className="block w-full">
                    <Image
                        src={imgUrl}
                        alt={post.title}
                        width={350}
                        height={350}
                        className="w-full object-cover lg:group-hover:scale-125 transition-all min-h-[350px] max-h-[350px]"
                    />
                </div>
                <div
                    className="absolute inset-0 bg-black bg-opacity-80 opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                        Читати детальніше...
                    </span>
                </div>
            </div>
            <div className="p-6 bg-zinc-800 rounded-b-3xl">
                <div className="mb-4 flex gap-4 ">
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='text-xs text-zinc-900 py-2 px-4 bg-[#2eecc5] rounded-full'>{post?.expand.tag.name}</div>
                            <div className='text-xs text-white/80'>{dayjs(post.created).format('DD.MM HH:mm')}</div>
                        </div>
                        <div className='mt-4'>
                            <h3 className="text-xl font-bold group-hover:text-[#2CE8C2] transition-all duration-300 line-clamp-3">
                                {post?.title}
                            </h3>
                            <p className="text-white/80 mt-4 line-clamp-5 min-h-[120px]">
                                {post?.short_descr}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}