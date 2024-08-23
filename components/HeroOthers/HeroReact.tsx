"use client";

import React, {useState} from "react";
import Header from "../Header/Header";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "@/lib/variants";
import {TypewriterEffect} from "../ui/typewriter-effect";
import {Icon} from "@iconify/react";
import {Button} from "../ui/moving-border";
import CustomModal from "@/components/Others/CustomModal";
import {pb} from "@/pb";
import {toast, Toaster} from "sonner";

export default function HeroReact() {
    const title = [
        {
            text: "Якісна",
            className: "text-white"
        },
        {
            text: "розробка",
            className: "text-white"
        },
        {
            text: "додатків",
            className: "text-white"
        },
        {
            text: "на",
            className: "text-white"
        },
        {
            text: "ReactJS",
            className: "text-[#2CE8C2]"
        }
    ];

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

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');


    const closeModal = () => {
        setIsOpen(false);
    }

    const sendRequest = async () => {
        try {
            const response = await pb.collection('fastRequest').create({
                title: name,
                contact,
                from: 'heroPage',
                column: 'new'
            })
            setName('')
            setContact('')
            setIsOpen(false);
            toast.success('Запит успішно відправлено')
        } catch (e) {
            console.log(e)
            toast.error('Помилка при відправці запиту')
        }
    }


    return (
        <div
            id="hero"
            className="flex flex-col bg-center bg-no-repeat bg-cover bg-opacity-4 bg-blend-luminosity"
            style={{backgroundImage: "url('/wave-whyUs.svg')", backgroundColor: "rgba(24, 11, 28, 0.04)"}}>
            <div className="container mx-auto pt-6 h-screen px-4 md:px-6 relative">
                <Header links={links}/>

                <div
                    className="flex flex-col gap-4 px-4 md:px-0 sm:gap-6 max-w-full md:max-w-[672px] mt-20 sm:mt-36 md:mt-64">
                    <TypewriterEffect
                        words={title}
                        className="md:text-left"
                    />
                    <p className="text-sm sm:text-xl text-[#ffffff]/65 md:text-left">
                        Ми - агенство цифрових рішень під ключ, від дизайну до розробки, ми виконаємо твое побажання застосовуючи framework ReactJS, що забезпечить якісну та швидку роботу вашого веб-додатку.
                    </p>
                    <motion.div
                        variants={fadeIn("top", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mt-4 sm:mt-8 flex gap-4 sm:gap-8 justify-normal flex-col md:flex-row">
                        <a
                            href="#whyUs"
                            className="flex gap-2 items-center text-md sm:text-xl rounded-[41px] border-[1.5px] border-[#2EECC5] px-4 sm:px-8 py-2 sm:py-4 w-fit text-center bg-[#2EECC5]/10 hover:bg-[#2EECC5]/25 cursor-pointer transition-all duration-300 hover:shadow-shadowInput">
                            Детальніше <Icon icon="iconamoon:arrow-right-2"/>
                        </a>

                        <p className="text-md flex items-center sm:text-xl text-[#ffffff]/65 hover:text-[#FFFFFF]/90 cursor-pointer transition-all duration-300 text-left"
                           onClick={() => setIsOpen(true)}>
                            Залишились запитання?
                        </p>
                        <CustomModal isOpen={isOpen} onClose={closeModal}>
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
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
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
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <Button
                                        borderRadius="9999px"
                                        className="border-[#2EECC5] bg-[#2EECC5]/10 text-lg font-bold" onClick={() => sendRequest()}>
                                        Надіслати
                                    </Button>
                                </div>
                                <div className="mt-4 text-center text-xs text-white/80">
                                    Менеджер звʼяжеться з вами якомога швидше.
                                    <span>Всі права захищено.</span>
                                </div>
                            </div>
                        </CustomModal>

                    </motion.div>
                    <motion.div
                    variants={fadeIn("top", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="xl:flex xl:max-w-none">
                    <div
                        className="w-full h-full max-w-[230px] max-h-[260px] sm:max-w-[370px] sm:max-h-[409px] xl:max-w-[470px] xl:max-h-[520px] absolute bottom-0 right-0 ">
                        <Image
                            src={"/react-hexagon.png"}
                            width={570}
                            height={570}
                            alt=""
                            className="translate-z-0 w-full h-full"
                        />
                    </div>
                </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-border-bottom w-[100%]"></div>
            </div>
            <Toaster position='top-right'/>
        </div>
    );
}