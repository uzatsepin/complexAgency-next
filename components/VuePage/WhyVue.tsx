import React from "react";
import { BenefitsTextVue } from "./BenefitsTextVue";

export interface IDummyContent {
    title: string;
    description: JSX.Element;
    badge: string;
    image: string;
}

const dummyContent = [
    {
        title: "Швидке впровадження та економія часу",
        description: (
            <>
                <p className="text-lg">
                    Завдяки простому синтаксису та зрозумілій архітектурі, <strong className="text-[#2EEEC2]">VueJS</strong> дозволяє швидше
                    розробляти та запускати нові продукти, що зменшує витрати на розробку та прискорює вихід на ринок.
                </p>
            </>
        ),
        badge: "Fast develop",
        image: "/vue/fast-develop-time.webp"
    },
    {
        title: "Зниження витрат на обслуговування",
        description: (
            <>
                <p className="text-lg">
                    Компонентний підхід та чітке розділення логіки дозволяють легше підтримувати та оновлювати додатки. Це допомагає знижувати витрати на технічне обслуговування і підтримку.
                </p>
            </>
        ),
        badge: "Low cost",
        image: "/vue/cost-develop.webp"
    },
    {
        title: "Гнучкість та адаптивність",
        description: (
            <>
                <p className="text-lg">
                    <strong className="text-[#2EEEC2]">VueJS</strong> легко інтегрується з іншими технологіями та існуючими системами, що дозволяє вам поступово адаптувати нові функції та інтегрувати їх без значних витрат і ризиків.
                </p>
            </>
        ),
        badge: "Adaptive",
        image: "/vue/adaptive.webp"
    },
    {
        title: "Покращений досвід користувачів",
        description: (
            <>
                <p className="text-lg">
                    Висока продуктивність і швидкість роботи додатків на <strong className="text-[#2EEEC2]">VueJS</strong>забезпечують відмінний користувацький досвід, що може підвищити задоволеність клієнтів і зменшити відтік користувачів.
                </p>
            </>
        ),
        badge: "Productivity",
        image: "/vue/productivity.webp"
    },
    {
        title: "Підтримка великої спільноти та екосистеми",
        description: (
            <>
                <p className="text-lg">
                    <strong className="text-[#2EEEC2]">VueJS</strong>має активну спільноту і велику кількість плагінів та бібліотек, що дозволяє швидше вирішувати проблеми та інтегрувати нові можливості без необхідності розробки з нуля.
                </p>
            </>
        ),
        badge: "Ecosystem",
        image: "/vue/ecosystem.webp"
    }
];

export default function WhyVue() {
    return (
        <div className="mt-14 px-4 lg:px-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-center">Чому <span className="text-[#2EEEC2]">VueJS</span> – це найкращий вибір для бізнесу?</h2>
            <p className="text-center max-w-[800px] mx-auto mt-4">
                <strong className="text-[#2EEEC2]">VueJS</strong> – оптимальний вибір для бізнесу, що прагне ефективності, гнучкості та швидкого
                розвитку цифрових рішень
            </p>
            <div className="mt-10">
            <BenefitsTextVue benefitsText={dummyContent}/>
            </div>
        </div>
    );
}
