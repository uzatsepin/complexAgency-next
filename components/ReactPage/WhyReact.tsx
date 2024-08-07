import React from "react";
import { BenefitsText } from "./BenefitsText";

export interface IDummyContent {
    title: string;
    description: JSX.Element;
    badge: string;
    image: string;
}

const dummyContent = [
    {
        title: "Висока продуктивність",
        description: (
            <>
                <p className="text-lg">
                    ReactJS забезпечує високу продуктивність завдяки використанню віртуального DOM. Це дозволяє значно зменшити час
                    оновлення сторінки та покращити загальну швидкість роботи додатка, що особливо важливо для бізнесів, які прагнуть
                    надавати швидкий та безперебійний досвід користувачам.
                </p>
            </>
        ),
        badge: "ReactJS",
        image: "/react/high-productivity.webp"
    },
    {
        title: "Компонентний підхід",
        description: (
            <>
                <p className="text-lg">
                    ReactJS використовує компонентний підхід, що дозволяє розробникам створювати повторно використовувані компоненти. Це не
                    тільки прискорює процес розробки, але й знижує витрати на підтримку та оновлення додатків. Компоненти можуть бути легко
                    оновлені без впливу на інші частини системи, що робить додатки гнучкими та масштабованими.
                </p>
            </>
        ),
        badge: "Components",
        image: "/react/components.webp"
    },
    {
        title: "SEO-оптимізація",
        description: (
            <>
                <p className="text-lg">
                    Завдяки швидкому рендерингу на стороні сервера, ReactJS забезпечує кращу індексацію вашого веб-сайту пошуковими
                    системами. Це важливо для бізнесів, які прагнуть покращити свою видимість в інтернеті та залучити більше органічного
                    трафіку.
                </p>
            </>
        ),
        badge: "SEO",
        image: "/react/seo-react.webp"
    },
    {
        title: "Широка підтримка спільноти",
        description: (
            <>
                <p className="text-lg">
                    ReactJS має величезну та активну спільноту розробників, що означає, що ви завжди можете знайти підтримку, документацію
                    та безліч готових рішень для вашого проекту. Це зменшує ризики та прискорює процес вирішення технічних проблем.
                </p>
            </>
        ),
        badge: "Community",
        image: "/react/community.webp"
    },
    {
        title: "Легка інтеграція з іншими технологіями",
        description: (
            <>
                <p className="text-lg">
                    ReactJS легко інтегрується з різними бібліотеками та фреймворками, такими як Redux для управління станом додатка або
                    Next.js для серверного рендерингу. Це робить його універсальним інструментом для створення складних та
                    багатофункціональних веб-додатків.
                </p>
            </>
        ),
        badge: "Inregration",
        image: "/react/integration.webp"
    }
];

export default function WhyReact() {
    return (
        <div className="mt-14 px-4 lg:px-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-center">Переваги <span className="text-[#2EEEC2]">ReactJS</span> для вашого бізнесу</h2>
            <p className="text-center max-w-[800px] mx-auto mt-4">
                У сучасному світі цифрових технологій, де конкуренція постійно зростає, вибір правильних інструментів для розробки
                веб-додатків може мати вирішальне значення для успіху вашого бізнесу.
            </p>
            <div className="mt-10">
                <BenefitsText benefitsText={dummyContent}/>
            </div>
        </div>
    );
}
