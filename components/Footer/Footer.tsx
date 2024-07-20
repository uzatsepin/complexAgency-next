import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Icon } from "@iconify/react";
import './Footer.css'

export default function Footer() {
    const title = [{ text: "Контакти", className: "text-white" }];
    return (
        <footer
            id="contacts"
            className="container mx-auto my-14 md:my-24">
            <div className="text-center">
                <TypewriterEffect
                    words={title}
                    className="md:left-left"
                />
            </div>

            <div className="flex gap-6 md:gap-8 justify-center mt-10 md:mt-14 bg-zinc-800 md:bg-transparent py-4 md:py-0 border-t border-[#ffffff]/20 border-b md:border-transparent">
                <div className="p-2 md:p-4 w-10 h-10 md:h-fit md:w-fit bg-white rounded-full outer-circle hover:scale-125 cursor-pointer transition-all duration-300 hover:bg-[#2CEEC2] group">
                    <Icon icon="f7:person-2-fill"  className="text-black h-6 w-6 md:h-8 md:w-8"/>
                </div>
                <div className="p-2 md:p-4 w-10 h-10 md:h-fit md:w-fit bg-white rounded-full outer-circle hover:scale-125 cursor-pointer transition-all duration-300 hover:bg-[#2CEEC2] group">
                    <Icon icon="ri:behance-fill" className="text-black h-6 w-6 md:h-8 md:w-8"/>
                </div>
                <div className="p-2 md:p-4 w-10 h-10 md:h-fit md:w-fit bg-white rounded-full outer-circle hover:scale-125 cursor-pointer transition-all duration-300 hover:bg-[#2CEEC2] group">
                    <Icon icon="bxl:telegram" className="text-black h-6 w-6 md:h-8 md:w-8"/>
                </div>
                <div className="p-2 md:p-4 w-10 h-10 md:h-fit md:w-fit bg-white rounded-full outer-circle hover:scale-125 cursor-pointer transition-all duration-300 hover:bg-[#2CEEC2] group">
                    <Icon icon="ri:instagram-line" className="text-black h-6 w-6 md:h-8 md:w-8"/>
                </div>
                <div className="p-2 md:p-4 w-10 h-10 md:h-fit md:w-fit bg-white rounded-full outer-circle hover:scale-125 cursor-pointer transition-all duration-300 hover:bg-[#2CEEC2] group">
                    <Icon icon="basil:gmail-outline" className="text-black h-6 w-6 md:h-8 md:w-8"/>
                </div>
            </div>
            <div className="text-center mt-14">
                <div className="text-white/70 text-md">© 2023-2024, Complex Agency - <a className="text-[#2CEEC2]" href="mailto:contact@complex.agency">contact@complex.agency</a></div>
                <div className="text-xs text-white/40 mt-2">Політика сайту та обробка персональних даних</div>
            </div>
        </footer>
    );
}
