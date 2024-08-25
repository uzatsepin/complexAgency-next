"use client";

import React from "react";
import GithubCardSkew from "../../animata/card/github-card-skew";
import { TypewriterEffect } from "../../ui/typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Counter from "../../animata/text/counter";
import { Icon } from "@iconify/react";
import { Reviews } from "@/components/MainPage/Reviews/Reviews";
import Blog from "@/components/Blog/Blog";
import Link from "next/link";

export default function WhyUs() {
    const titleText = [
        {
            text: "Про",
            className: "text-white"
        },
        {
            text: "компанію",
            className: "text-white"
        },
        {
            text: "Complex",
            className: "text-[#2CE8C2]"
        },
        {
            text: "Agency",
            className: "text-[#2CE8C2]"
        }
    ];

    const singleCard = {
        title: "Адаптація під ваші потреби",
        text: "Ми ретельно вивчаємо ваші потреби та цілі, щоб розробити персоналізоване рішення, яке ідеально відповідає вашим очікуванням.",
        image: "./money-icon.svg"
    };

    const othersCard = [
        {
            title: "Контроль вашого проекту",
            text: "Забезпечуємо повний контроль над усіма етапами проекту, від планування до виконання, гарантуючи високу якість та своєчасне завершення.",
            image: "./time-icon.svg"
        },
        {
            title: "Команда спеціалістів",
            text: "Наші досвідчені спеціалісти працюють над вашими проектами, забезпечуючи професійний підхід і високу якість виконання робіт.",
            image: "./person-icon.svg"
        },
        {
            title: "Професійний супровід",
            text: "Надаємо постійну підтримку та консультації на всіх етапах проекту, допомагаючи вам досягти поставлених цілей.",
            image: "./support-icon.svg"
        },
        {
            title: "Веб-додатки на Vue",
            text: "Розробка сучасних веб-додатків на Vue з високою швидкістю та ефективністю.",
            image: "./vuejs.svg",
            link: "/vue"
        },
        {
            title: "Веб-застосунки на React",
            text: "Створення інтерактивних веб-застосунків на React для покращення користувацького досвіду.",
            image: "./reactjs.svg",
            link: "/react"
        },
        {
            title: "Розробка на WordPress",
            text: "Налаштування та розробка функціональних сайтів на WordPress для будь-яких потреб.",
            image: "./wordpress.svg",
            link: "/#wordpress"
        }
    ];

    const counterWords = [
        {
            text: "Досягнення",
            className: "text-white"
        },
        {
            text: "компанії",
            className: "text-white"
        },
        {
            text: "Complex",
            className: "text-[#2EECC5]"
        },
        {
            text: "Agency",
            className: "text-[#2EECC5]"
        },
        {
            text: "за",
            className: "text-white"
        },
        {
            text: "роки",
            className: "text-white"
        }
    ];

    const reviewsWords = [
        {
            text: 'Відгуки',
            className: "text-white"
        },
        {
            text: 'про',
            className: "text-white"
        },
        {
            text: 'нас',
            className: "text-[#2EECC5]"
        }
    ]

    return (
        <section id="whyUs" className="bg-wavesBg bg-cover bg-center min-h-screen">
            <div className="max-w-[1270px] mx-auto my-[86px] px-4 xl:px-0">
                <div className="flex gap-4 justify-between flex-col xl:flex-row">
                    <div className="max-w-[670px]">
                        <TypewriterEffect words={titleText} className="text-center md:text-left"/>
                        <p className="text-[#FFFFFF]/65 text-md md:text-lg mt-6 text-center md:text-left">
                            Ми – агенція, що спеціалізується на моушн-дизайні, розробці, лендінгах, брендингу та дизайні. Використовуємо
                            комплексні бізнес-рішення. З нами ваш бізнес досягне нових висот.
                        </p>
                        <p className="text-[#FFFFFF]/65 text-md md:text-lg mt-4 sm:mt-10 text-center md:text-left">Перегляньте наше портфоліо - воно говорить саме за себе.</p>
                        <a href="#portfolio" className="py-4 px-8 font-bold border-[#2CEEC5] border mt-6 md:w-fit bg-[#161617] shadow-shadowInput custom-element flex items-center justify-center w-full mb-8 md:mb-0">Портфоліо</a>
                    </div>
                    <motion.div
                        variants={fadeIn("top", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        <GithubCardSkew
                            title={singleCard.title}
                            text={singleCard.text}
                            image={singleCard.image}
                        />
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn("top", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-wrap gap-6 mt-8 justify-between flex-col xl:flex-row">
                    {othersCard.map((card, index) => (
                        card.link ? (
                            <Link key={index} href={card.link} className='flex col'>
                                <GithubCardSkew
                                    title={card.title}
                                    text={card.text}
                                    image={card.image}
                                />
                            </Link>
                        ) : (
                            <GithubCardSkew
                                key={index}
                                title={card.title}
                                text={card.text}
                                image={card.image}
                            />
                        )
                    ))}
                </motion.div>

                {/*BLOG*/}

                <div className="mt-24">
                    <Blog />
                </div>

                <motion.div
                    variants={fadeIn("top", 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden">
                    <div className="mt-24 flex justify-center">
                        <TypewriterEffect words={counterWords} className="text-center md:text-left"/>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-12">
                        <div className="shadow-lg border border-[#2EECC5] rounded-xl p-6 bg-zinc-900">
                            <div className="flex items-center justify-center gap-4">
                                <Icon
                                    icon="icon-park-outline:success"
                                    className="text-[#2EECC5] text-2xl md:text-4xl"
                                />
                                <h3 className="font-normal md:font-bold text-xl text-center">Виконано проєктів</h3>
                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <Counter
                                    targetValue={32}
                                    className="text-5xl md:text-7xl"
                                />
                            </div>
                        </div>
                        <div className="shadow-lg border border-[#2EECC5] rounded-xl p-6 bg-zinc-900">
                            <div className="flex items-center justify-center gap-4">
                                <Icon
                                    icon="bi:person-heart"
                                    className="text-[#2EECC5] text-2xl md:text-4xl"
                                />
                                <h3 className="font-normal md:font-bold text-xl text-center">Задоволених клієнтів</h3>
                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <Counter
                                    targetValue={31}
                                    className="text-5xl md:text-7xl"
                                />
                            </div>
                        </div>
                        <div className="shadow-lg border border-[#2EECC5] rounded-xl p-4 md:p-6 bg-zinc-900">
                            <div className="flex items-center justify-center gap-4">
                                <Icon
                                    icon="solar:tag-price-bold"
                                    className="text-[#2EECC5] text-2xl md:text-4xl"
                                />
                                <h3 className="font-normal md:font-bold text-xl text-center">Збільшили середній чек на</h3>
                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <Counter
                                    targetValue={23}
                                    className="text-5xl md:text-7xl"
                                />
                                <span className="text-5xl md:text-7xl">%</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div>
                    <div className="mt-24 flex justify-center">
                        <TypewriterEffect words={reviewsWords} />
                    </div>
                    <Reviews />
                </div>
            </div>
        </section>
    );
}
