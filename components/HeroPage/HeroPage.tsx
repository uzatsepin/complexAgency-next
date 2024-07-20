"use client";

import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Icon } from "@iconify/react";

export default function HeroPage() {
    const title = [
        {
            text: "Комплексні",
            className: "text-white"
        },
        {
            text: "рішення",
            className: "text-white"
        },
        {
            text: "для",
            className: "text-white"
        },
        {
            text: "твого",
            className: "text-white"
        },
        {
            text: "бізнесу",
            className: "text-[#2CE8C2]"
        }
    ];

    return (
        <div
            className="flex flex-col bg-center bg-no-repeat bg-cover bg-opacity-4 bg-blend-luminosity"
            style={{ backgroundImage: "url('/wave-whyUs.svg')", backgroundColor: "rgba(24, 11, 28, 0.04)" }}>
            <div className="container mx-auto pt-6 h-screen px-2 sm:px-0">
                <Header />

                <div className="flex flex-col gap-4 sm:gap-6 max-w-full md:max-w-[672px] mt-24 sm:mt-36 md:mt-64">
                    <TypewriterEffect
                        words={title}
                        className="text-center md:text-left"
                    />
                    <p className="text-sm sm:text-xl text-[#ffffff]/65 text-center md:text-left">
                        Ми - агенство цифрових рішень під ключ, від дизайну до розробки, ми виконаємо твое побажання.
                    </p>
                    <motion.div
                        variants={fadeIn("top", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mt-4 sm:mt-8 flex items-center gap-4 sm:gap-8 justify-center md:justify-normal flex-col md:flex-row">
                        <div className="flex gap-2  items-center text-md sm:text-xl rounded-[41px] border-[1.5px] border-[#2EECC5] px-4 sm:px-8 py-2 sm:py-4 w-fit text-center bg-[#2EECC5]/10 hover:bg-[#2EECC5]/25 cursor-pointer transition-all duration-300">
                            Детальніше <Icon icon="iconamoon:arrow-right-2" />
                        </div>
                        <p className="text-md sm:text-xl text-[#ffffff]/65 hover:text-[#FFFFFF]/90 cursor-pointer transition-all duration-300">
                            Залишились запитання?
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn("top", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="xl:flex xl:max-w-none">
                    <div className="w-full h-full max-w-[300px] max-h-[340px] sm:max-w-[370px] sm:max-h-[409px] xl:max-w-[670px] xl:max-h-[709px] absolute bottom-0 right-0 ">
                        <Image
                            src={"/main-person.png"}
                            width={670}
                            height={709}
                            alt=""
                            className="translate-z-0 w-full h-full"
                        />
                    </div>
                </motion.div>
                <div className="absolute bottom-0 left-0 h-1 bg-border-bottom w-[100%]"></div>
            </div>
        </div>
    );
}
