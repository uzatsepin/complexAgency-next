"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
    const [accordionItems, setAccordionItems] = useState([
        {
            title: "Що таке ReactJS і чому він використовується для розробки веб-додатків?",
            content: "ReactJS - це популярна бібліотека JavaScript, розроблена Facebook для створення інтерфейсів користувача. Вона дозволяє розробникам створювати динамічні та інтерактивні веб-додатки з високою продуктивністю завдяки використанню компонентного підходу.",
            isOpen: false
        },
        {
            title: "Які переваги використання ReactJS для мого бізнесу?",
            content: "Використання ReactJS забезпечує швидку та ефективну розробку, легку інтеграцію з іншими технологіями, високу продуктивність додатків та можливість створення повторно використовуваних компонентів, що знижує витрати на розробку та підтримку.",
            isOpen: false
        },
        {
            title: 'Скільки часу займає розробка веб-додатка на ReactJS?',
            content: 'Час розробки залежить від складності проекту, але завдяки використанню ReactJS ми можемо значно скоротити терміни розробки завдяки повторному використанню компонентів та ефективному управлінню станом додатка.',
            isOpen: false
        },
        {
            title: 'Чи можу я інтегрувати мій існуючий веб-сайт з новим ReactJS додатком?',
            content: 'Так, ReactJS легко інтегрується з існуючими веб-сайтами та додатками. Ми можемо допомогти вам плавно перейти до використання ReactJS, зберігаючи функціональність вашого поточного веб-сайту.',
            isOpen: false
        },
        {
            title: 'Чому варто обрати вашу веб-студію для розробки на ReactJS?',
            content: 'Наша веб-студія має багаторічний досвід роботи з ReactJS та іншими сучасними технологіями. Ми пропонуємо індивідуальний підхід до кожного клієнта, високу якість розробки, дотримання термінів та комплексне обслуговування від ідеї до реалізації та підтримки вашого проекту.',
            isOpen: false
        }
    ]);

    const toggleAccordionItem = (index: number) => {
        const updatedAccordionItems = [...accordionItems];
        updatedAccordionItems[index].isOpen = !updatedAccordionItems[index].isOpen;
        setAccordionItems(updatedAccordionItems);
    };

    return (
        <div className="mt-12 container mx-auto px-4 lg:px-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-center">Найпоширеніші питання</h2>
            <div className="mt-8 flex flex-col gap-4">
                {accordionItems.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        isOpen={item.isOpen}
                        content={item.content}
                        toggleAccordion={() => toggleAccordionItem(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Accordion;
