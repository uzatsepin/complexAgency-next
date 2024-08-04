import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomModal from "@/components/Others/CustomModal";
import Link from "next/link";
import {collectionIdPortfolio, getImgUrl} from "@/lib/getImgUrl";
import {IPortfolio} from "@/components/Works/Works";

interface IProps extends IPortfolio {
    delete: (id: string) => void
}

export default function PortfolioCardAdmin({id, image, title, descr, type, technologiesIcons, hoverText, delete:handleDelete}: IProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                    <span className="text-white text-xl font-bold">
                        {hoverText}
                    </span>
                </div>
                <Icon icon="mi:delete" className="absolute top-4 right-4 text-2xl text-white hover:text-red-500 transition-all duration-300 cursor-pointer" onClick={() => setIsModalOpen(true)}/>
                <Link href={`/admin/edit/${id}`} className="absolute top-4 left-4 text-2xl text-white hover:text-[#2CE8C2] transition-all duration-300 cursor-pointer"><Icon icon="ic:twotone-edit" /></Link>
            </div>
            <div className="p-6 bg-zinc-800 rounded-b-3xl">
                <div className="mb-4 flex gap-4 ">
                    <div className="text-xs">{type}</div>
                    <div>
                        <a
                            href="#"
                            className="block">
                            <h3 className="text-xl 2xl:text-2xl font-bold group-hover:text-[#2CE8C2] transition-all duration-300">{title}</h3>
                        </a>
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
            <CustomModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}>
                    <h2 className="text-center text-xl">Видалити роботу?</h2>
                    <div className="flex gap-4 mt-8 items-center justify-center">
                        <div className="flex gap-2 text-center items-center justify-center sm:text-lg rounded-[41px] border-[1.5px] border-[#2EECC5] px-8 py-2 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/50 hover:border-[#2EECC5] cursor-pointer transition-all duration-300 text-white" onClick={() => handleDelete(id ? id : '')}>
                            Так
                        </div>
                        <div className="flex gap-2 text-center items-center justify-center sm:text-lg rounded-[41px] border-[1.5px] border-[#f03c60] px-8 py-2 bg-[#f03c60]/10 hover:bg-[#f03c60]/50 hover:border-[#f03c60] cursor-pointer transition-all duration-300 text-white" onClick={() => setIsModalOpen(false)}>
                            Ні
                        </div>
                    </div>
                </CustomModal>
        </div>
    );
}
