import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogItem() {
    return (
        <Link href='/' className="group transition-all duration-300 min-w-[400px] max-w-[400px]">
            <div className="w-full max-w-md overflow-hidden rounded-t-3xl shadow-lg hover:shadow-xl relative group">
                <div className="block">
                    <Image
                        src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                        alt="Project Image"
                        width={400}
                        height={240}
                        className="w-full object-cover group-hover:scale-125 transition-all min-h-[240px] max-h-[240px]"
                    />
                </div>
                <div
                    className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                        Читати детальніше...
                    </span>
                </div>
            </div>
            <div className="p-6 bg-zinc-800 rounded-b-3xl">
                <div className="mb-4 flex gap-4 ">
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='text-xs text-zinc-900 p-2 bg-[#2eecc5] rounded-full'>category</div>
                            <div className='text-xs text-white/80'>20.08.2024</div>
                        </div>
                        <div className='mt-2'>
                            <h3 className="text-xl font-bold group-hover:text-[#2CE8C2] transition-all duration-300 line-clamp-3">Автоматизація
                                бізнес-процесів: економимо час і гроші з Complex Agency 🚀</h3>
                            <p className="text-white/80 mt-4 line-clamp-5">Чи траплялося вам так, що час просто втікає, а гроші пролітають
                                мимо, як літак? ⏳💸 Здається, рутинні завдання забирають у вас всю енергію, а ви так і не встигаєте зайнятися
                                чимось важливим?</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}