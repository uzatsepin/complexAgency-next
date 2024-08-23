"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

function AccordionVue() {
    const [accordionItems, setAccordionItems] = useState([
        {
            title: "Що таке VueJS і чому він використовується для розробки веб-додатків?",
            content: "VueJS - це прогресивний JavaScript-фреймворк, розроблений для створення користувацьких інтерфейсів. Він дозволяє розробникам створювати гнучкі та динамічні веб-додатки з високою продуктивністю завдяки компонентному підходу та легкості інтеграції.",
            isOpen: false
        },
        {
            title: "Які переваги використання VueJS для мого бізнесу?",
            content: "Використання VueJS забезпечує швидку та ефективну розробку, зручну інтеграцію з іншими технологіями, високу продуктивність додатків та можливість створення повторно використовуваних компонентів, що знижує витрати на розробку та підтримку.",
            isOpen: false
        },
        {
            title: 'Скільки часу займає розробка веб-додатка на VueJS?',
            content: 'Час розробки залежить від складності проекту, але завдяки використанню VueJS ми можемо значно скоротити терміни розробки за рахунок повторного використання компонентів та ефективного управління станом додатка.',
            isOpen: false
        },
        {
            title: 'Чи можу я інтегрувати мій існуючий веб-сайт з новим VueJS додатком?',
            content: 'Так, VueJS легко інтегрується з існуючими веб-сайтами та додатками. Ми можемо допомогти вам плавно перейти до використання VueJS, зберігаючи функціональність вашого поточного веб-сайту.',
            isOpen: false
        },
        {
            title: 'Чому варто обрати вашу веб-студію для розробки на VueJS?',
            content: 'Наша веб-студія має багаторічний досвід роботи з VueJS та іншими сучасними технологіями. Ми пропонуємо індивідуальний підхід до кожного клієнта, високу якість розробки, дотримання термінів та комплексне обслуговування від ідеї до реалізації та підтримки вашого проекту.',
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

export default AccordionVue;
