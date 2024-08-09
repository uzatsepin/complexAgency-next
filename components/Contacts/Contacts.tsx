'use client'
import React, { useState } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Button } from "../ui/moving-border";
import Image from "next/image";
import { toast } from "sonner";
import { pb } from "@/pb";

export default function Contacts() {
    const title = [
        {
            text: "Залишити",
            className: "text-white"
        },
        {
            text: "заявку",
            className: "text-[#2CE8C2]"
        }
    ];

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [direction, setDirection] = useState('')
    const [contact, setContact] = useState('')
    const [tech, setTech] = useState('')


    async function handleSubmitForm() {
        try {
            const response = await pb.collection('fastRequest').create({
                title: name,
                phone,
                contact,
                direction,
                tech,
                column: 'new'
            })
            setName('')
            setPhone('')
            setDirection('')
            setContact('')
            setTech('')
            toast.success('Запит успішно відправлено')
        } catch (e) {
            console.log(e)
            toast.error('Помилка при відправці запиту')
        }
    }

    return (
        <div className="bg-bgFooter" id="formContacts">
            <div className="container mx-auto py-10 px-4 md:px-6 relative">
                <div>
                    <TypewriterEffect words={title} className="md:left-left"/>
                </div>
                <div className="flex md:gap-8 flex-col xl:flex-row">
                    <div className="flex flex-col">
                        <div className="mt-8">
                            <div className="relative w-full md:w-[430px] md:min-w-[200px]">
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
                        </div>
                        <div className="mt-8">
                            <div className="relative w-full md:w-[430px] md:min-w-[200px]">
                                <label
                                    htmlFor="phone"
                                    className="block mb-2">
                                    Ваш телефон
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                    placeholder="+38099999999"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="relative w-full md:w-[430px] md:min-w-[200px]">
                                <label
                                    htmlFor="phone"
                                    className="block mb-2">
                                    Оберіть напрямок
                                </label>
                                <input
                                    type="text"
                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                    placeholder="Дизайн/Розробка/..."
                                    value={direction}
                                    onChange={(e) => setDirection(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-8">
                            <div className="relative w-full md:w-[430px] md:min-w-[200px]">
                                <label
                                    htmlFor="telegram"
                                    className="block mb-2">
                                    Пошта\Телеграм
                                </label>
                                <input
                                    id="telegram"
                                    type="text"
                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                    placeholder="@user\user@admin.com"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="relative w-full md:w-[430px] md:min-w-[200px]">
                                <label
                                    htmlFor="name"
                                    className="block mb-2">
                                    Технічне завдання (за наявності)
                                </label>
                                <input
                                    id="telegram"
                                    type="text"
                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                    placeholder="Потрібен сайт для відображення..."
                                    value={tech}
                                    onChange={(e) => setTech(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-8 md:mt-auto flex justify-center md:justify-end">
                            <Button
                                borderRadius="9999px"
                                className="border-[#2EECC5] bg-[#2EECC5]/10 text-lg font-bold" 
                                onClick={handleSubmitForm}>
                                Надіслати
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src='/phone-img.png' alt="phone-img" width={500} height={498} className="absolute -bottom-10 right-0 hidden lg:flex"/>
                </div>
            </div>
        </div>
    );
}
