"use client";

import React, {useState} from "react";
import Image from "next/image";
import { Button } from "../ui/moving-border";
import {pb} from "@/pb";
import {toast, Toaster} from "sonner";
import CustomModal from "@/components/Others/CustomModal";

export default function Header() {
    const links = [
        {
            name: "Головна",
            link: "#hero",
            icon: "lucide:home"
        },
        {
            name: "Про нас",
            link: "#whyUs",
            icon: "lucide:shield-question"
        },
        {
            name: "Контакти",
            link: "#contacts",
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
                name,
                contact,
                from: 'header',
                status: 'new'
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
        <div className="flex items-center justify-between px-2 md:px-0">
            <div>
                <Image
                    src="./logo.svg"
                    width={131}
                    height={65}
                    alt="logo"
                    className="cursor-pointer h-12 w-32 md:h-16 md:w-36"
                />
            </div>
            <div>
                <ul className="gap-2 md:gap-10 border border-[#FFFFFF30] px-2 py-1 md:px-6 md:py-2 rounded-full flex fixed md:relative right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 bottom-6 md:bottom-0 z-10 w-11/12 md:w-fit bg-zinc-900  bg-opacity-80 backdrop-blur-2xl justify-center">
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="flex items-center border border-transparent gap-2 py-2 px-4 rounded-full hover:bg-[#21232C] transition-all duration-300 cursor-pointer hover:text-[#2EECC5]">
                            <a
                                href={link.link}
                                className="text-md md:text-lg">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Button
                    borderRadius="9999px"
                    className="border-[#2EECC5] bg-[#2EECC5]/10 text-lg font-bold" onClick={() => setIsOpen(true)}>
                    Замовити
                </Button>
                <CustomModal isOpen={isOpen} onClose={closeModal}>
                    <div className="text-2xl">Залишити заявку?</div>
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
                                className="border-[#2EECC5] bg-[#2EECC5]/10 text-lg font-bold cursor-pointer"
                                onClick={() => sendRequest()}>
                                Надіслати
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-xs text-white/80">
                            Менеджер звʼяжеться з вами якомога швидше.
                            <span>Всі права захищено.</span>
                        </div>
                    </div>
                </CustomModal>
            </div>

        </div>
    );
}
