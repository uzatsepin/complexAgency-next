"use client";

import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Icon } from "@iconify/react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/animated-modal";
import { Button } from "../ui/moving-border";

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
            id="hero"
            className="flex flex-col bg-center bg-no-repeat bg-cover bg-opacity-4 bg-blend-luminosity"
            style={{ backgroundImage: "url('/wave-whyUs.svg')", backgroundColor: "rgba(24, 11, 28, 0.04)" }}>
            <div className="container mx-auto pt-6 h-screen px-4 md:px-6">
                <Header />

                <div className="flex flex-col gap-4 px-4 md:px-0 sm:gap-6 max-w-full md:max-w-[672px] mt-20 sm:mt-36 md:mt-64">
                    <TypewriterEffect
                        words={title}
                        className="md:text-left"
                    />
                    <p className="text-sm sm:text-xl text-[#ffffff]/65 md:text-left">
                        Ми - агенство цифрових рішень під ключ, від дизайну до розробки, ми виконаємо твое побажання.
                    </p>
                    <motion.div
                        variants={fadeIn("top", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mt-4 sm:mt-8 flex gap-4 sm:gap-8 justify-normal flex-col md:flex-row">
                        <a
                            href="#whyUs"
                            className="flex gap-2  items-center text-md sm:text-xl rounded-[41px] border-[1.5px] border-[#2EECC5] px-4 sm:px-8 py-2 sm:py-4 w-fit text-center bg-[#2EECC5]/10 hover:bg-[#2EECC5]/25 cursor-pointer transition-all duration-300 hover:shadow-shadowInput">
                            Детальніше <Icon icon="iconamoon:arrow-right-2" />
                        </a>

                        <Modal>
                            <ModalTrigger className="p-0">
                                <p className="text-md sm:text-xl text-[#ffffff]/65 hover:text-[#FFFFFF]/90 cursor-pointer transition-all duration-300 text-left">
                                    Залишились запитання?
                                </p>
                            </ModalTrigger>
                            <ModalBody className="bg-zinc-900">
                                <ModalContent>
                                    <div className="text-2xl">Залишились питання?</div>

                                    <div className="mt-4 text-white/80 text-md">
                                        Заповни коротеньку форму і наш менеджер звʼяжеться з вами найближчим часом
                                    </div>

                                    <div className="mt-8">
                                        <div className="relative w-full">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2">
                                                Ваше ім&apos;я
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                                placeholder="Ваше ім'я"
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <div className="relative w-full">
                                                <label
                                                    htmlFor="contact"
                                                    className="block mb-2">
                                                    Пошта\Telegram
                                                </label>
                                                <input
                                                    id="contact"
                                                    type="text"
                                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                                    placeholder="@username\user@gmail.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-8 flex justify-center">
                                            <Button
                                                borderRadius="9999px"
                                                className="border-[#2EECC5] bg-[#2EECC5]/10 text-lg font-bold">
                                                Надіслати
                                            </Button>
                                        </div>
                                        <div className="mt-4 text-center text-xs text-white/80">
                                            Менеджер звʼяжеться з вами якомога швидше.
                                            <span>Всі права захищено.</span>
                                        </div>
                                    </div>
                                </ModalContent>
                            </ModalBody>
                        </Modal>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn("top", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="xl:flex xl:max-w-none">
                    <div className="w-full h-full max-w-[230px] max-h-[260px] sm:max-w-[370px] sm:max-h-[409px] xl:max-w-[670px] xl:max-h-[709px] absolute bottom-0 right-0 ">
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
