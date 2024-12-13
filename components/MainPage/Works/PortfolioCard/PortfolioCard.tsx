import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {collectionIdPortfolio, getImgUrl} from "@/lib/getImgUrl";
import {IPortfolio} from "@/components/MainPage/Works/Works";
import Link from "next/link";


export default function PortfolioCard({id,image, title, descr, type, technologiesIcons, hoverText}: IPortfolio) {

    const imgUrl = getImgUrl(collectionIdPortfolio, id, image)

    return (
        <div className="group transition-all duration-300">
            <div className="w-full max-w-md overflow-hidden rounded-t-3xl shadow-lg hover:shadow-xl relative group">
                <div className="block">
                    <Image
                        src={imgUrl}
                        alt="Project Image"
                        width={400}
                        height={240}
                        className="w-full object-cover group-hover:scale-125 transition-all min-h-[240px] min-w-[400px] max-h-[240px] max-w-[400px]"
                    />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xl font-bold px-4 text-center">
                        {hoverText}
                    </span>
                </div>
            </div>
            <div className="p-6 bg-zinc-800 rounded-b-3xl">
                <div className="mb-4 flex gap-4 ">
                    <div className="text-xs">{type}</div>
                    <div>
                        <Link
                            href="/react"
                            className="block">
                            <h3 className="text-2xl font-bold group-hover:text-[#2CE8C2] transition-all duration-300">{title}</h3>
                        </Link>
                        <p className="text-white/80 mt-4">{descr}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 ">
                    {
                        technologiesIcons && technologiesIcons.map((icon, index) => (
                            <Icon
                                key={index}
                                icon={icon}
                                width={24}
                                height={24}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
