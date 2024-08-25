"use client";

import React, {useState} from "react";
import Image from "next/image";
import { Button } from "../../ui/moving-border";
import {pb} from "@/pb";
import {toast} from "sonner";
import CustomModal from "@/components/Others/CustomModal";
import {Icon} from "@iconify/react";
import Link from "next/link";
import AnimatedLinks from "@/components/MainPage/AnimatedLinks/AnimatedLinks";

interface ILinks {
    name: string
    link: string
    icon: string
}

export default function Header({links}: {links: ILinks[]}) {

    interface IError {
        name?: string
        contact?: string
    }

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [errors, setErrors] = useState({} as IError);


    const closeModal = () => {
        setIsOpen(false);
    }

    const sendRequest = async () => {
        const newErrors: IError = {};

        if(!name) newErrors.name = 'Поле не може бути пустим, введіть імʼя';
        if(!contact) newErrors.contact = 'Поле не може бути пустим, введіть телефон';

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

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
        <div className="flex items-center justify-between px-2 md:px-0">
            <Link href="/public" className='flex flex-col items-center gap-4 font-bold text-xl'>
                <Image
                    src="/new-logo.png"
                    width={65}
                    height={70}
                    alt="Logo"
                    priority={true}
                    className="cursor-pointer h-[50px] w-[45px] lg:h-[70px] lg:w-[65px]"
                />
                <h2 className='text-sm lg:text-2xl'>Complex <span className='text-gradient'>Agency</span></h2>
            </Link>
            <div>
                <AnimatedLinks links={links} />
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
                                className={`outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput ${errors.name ? 'border-red-500' : ''}`}
                                placeholder="Ваше ім'я"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <div className="text-red-500 text-sm mt-2">{errors.name}</div>}
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
                                    className={`outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput ${errors.name ? 'border-red-500' : ''}`}
                                    placeholder="@username\user@gmail.com"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                                {errors.contact && <div className="text-red-500 text-sm mt-2">{errors.contact}</div>}
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button
                                className="flex gap-2 text-center items-center justify-center sm:text-lg rounded-[41px] border-[1.5px] border-[#2EECC5] px-8 py-2 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/50 hover:border-[#2EECC5] cursor-pointer transition-all duration-300 text-white disabled:opacity-40"
                                onClick={() => sendRequest()}>
                                <Icon icon="ph:plus-bold"/>
                                Додати роботу
                            </button>
                        </div>

                        <div className="mt-6 text-center text-xs text-white/80">
                            Менеджер звʼяжеться з вами якомога швидше.
                            <span>Всі права захищено.</span>
                        </div>
                    </div>
                </CustomModal>
            </div>

        </div>
    );
}
