"use client";
import React from "react";
import { StickyScroll } from "../../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Сайт “Візитка”",
        description:
            "Розробка цільових сторінок, оптимізованих для конверсій, з фокусом на залучення й утримання клієнтів, поліпшення користувацького досвіду і досягнення конкретних бізнес-цілей.",
        price: "Від 900₴",
        deadlines: "від 1 дня",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/tarifs/web-site-vizitka.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    },
    {
        title: "Розробка ПЗ",
        description:
            "Розробка програмного забезпечення, орієнтованого на ваші бізнес-потреби, з акцентом на ефективність, безпеку та масштабованість. Наша команда забезпечує високий рівень якості та адаптацію під конкретні цілі вашого підприємства.",
        price: "Від 1400₴",
        deadlines: "від 2 днів",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/tarifs/develop-programm.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    },
    {
        title: "Дизайн",
        description:
            "Створення візуальних рішень для вашого бізнесу: від графічного дизайну та ілюстрацій до UX/UI-дизайну, забезпечуючи привабливість і зручність використання ваших продуктів.",
        price: "Від 650₴",
        deadlines: "від 1 дня",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/tarifs/make-design.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    },
    {
        title: "Брендинг",
        description:
            "Розробка брендингу, спрямованого на створення унікального і впізнаваного образу вашого бізнесу. Ми допомагаємо формувати стратегію бренду, що підвищує впізнаваність, довіру та лояльність клієнтів, забезпечуючи вашому бізнесу конкурентні переваги.",
        price: "Від 1200₴",
        deadlines: "від 2 днів",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/tarifs/make-branding.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    },
    {
        title: "Моушн-дизайн",
        description:
            "Розробка моушн-дизайну, що привертає увагу та підсилює ваш бренд. Ми створюємо анімації, які ефективно комунікують ваші ідеї, підвищують залученість і залишають незабутнє враження на вашій аудиторії.",
        price: "Від 1400₴",
        deadlines: "від 2 днів",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/tarifs/make-motion.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    },
    {
        title: "Маркетинг",
        description:
            "Розробка маркетингових стратегій, спрямованих на зростання вашого бізнесу. Ми створюємо ефективні кампанії, які підвищують впізнаваність бренду, залучають нових клієнтів і збільшують продажі, забезпечуючи стійкий розвиток вашої компанії.",
        price: "Від 10%",
        deadlines: "від 3 днів",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/tarifs/make-marketing.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        )
    }
];
export function TarifsScroll() {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    );
}
