'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: '🌐',
        name: 'Сайт “Візитка”',
        price: 'Від 900₴',
        description: 'Розробка цільових сторінок, оптимізованих для конверсій, з фокусом на залучення й утримання клієнтів, поліпшення' +
            ' користувацького досвіду і досягнення конкретних бізнес-цілей.',
        deadlines: 'від 1 дня',
        profit: 'Підходить для landing-page, промо-сайтів, персональних сайтів',
    },
    {
        icon: '💻', name: 'Розробка ПЗ',
        price: 'від 1400₴',
        description: 'Розробка програмного забезпечення, орієнтованого на ваші' +
            ' бізнес-потреби, з акцентом на ефективність, безпеку та масштабованість. Наша команда забезпечує високий рівень якості та' +
            ' адаптацію під конкретні цілі вашого підприємства.',
        deadlines: 'від 2 днів',
        profit: 'Підходить для веб-додатків, мобільних додатків, корпоративних систем',
    },
    {
        icon: ' 🎨️', name: 'Дизайн',
        price: 'Від 650₴',
        description: 'Створення візуальних рішень для вашого бізнесу: від графічного' +
            ' дизайну та ілюстрацій до UX/UI-дизайну, забезпечуючи привабливість і зручність використання ваших продуктів.',
        deadlines: 'від 1 дня',
        profit: 'Підходить для логотипів, інтерфейсів, веб-дизайну',
    },
    {
        icon: '🌟',
        name: 'Брендинг',
        price: 'Від 1200₴',
        description: 'Розробка брендингу, спрямованого на створення унікального і впізнаваного образу вашого бізнесу. Ми допомагаємо' +
            ' формувати стратегію бренду, що підвищує впізнаваність, довіру та лояльність клієнтів, забезпечуючи вашому бізнесу конкурентні переваги.',
        deadlines: 'від 2 днів',
        profit: 'Підходить для логотипів, фірмового стилю, упаковки',
    },
    {
        icon: '📽️',
        name: 'Моушн-дизайн',
        price: 'Від 1400₴',
        description: 'Розробка моушн-дизайну, що привертає увагу та підсилює ваш' +
            ' бренд. Ми створюємо анімації, які ефективно комунікують ваші ідеї, підвищують залученість і залишають незабутнє враження на вашій аудиторії.',
        deadlines: 'від 2 днів',
        profit: 'Підходить для реклами, відео-контенту, анімацій',
    },
    {
        icon: '📊',
        name: 'Маркетинг',
        price: 'Від 10%',
        description: 'Розробка маркетингових стратегій, спрямованих на зростання вашого' +
            ' бізнесу. Ми створюємо ефективні кампанії, які підвищують впізнаваність бренду, залучають нових клієнтів і збільшують' +
            ' продажі, забезпечуючи стійкий розвиток вашої компанії.',
        deadlines: 'від 3 днів',
        profit: 'Підходить для SMM, контекстної реклами, SEO',
    },
];

const PricingBlock = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative flex flex-nowrap overflow-scroll mx-auto gap-4 p-4 no-visible-scrollbar mb-24">
            {services.map((service, index) => (
                <div key={index}>
                    <motion.div
                        key={service.name}
                        className="relative min-w-80 h-[420px] bg-zinc-800 rounded-lg overflow-hidden cursor-pointer"
                        onHoverStart={() => setActiveIndex(index)}
                        animate={{
                            zIndex: activeIndex === index ? 10 : 1,
                            scale: activeIndex === index ? 1.05 : 1,
                        }}
                        transition={{duration: 0.3}}
                    >
                        <div className="h-full p-6 flex flex-col justify-between">
                            <div className="text-center flex flex-col justify-between h-full">
                                <div className="text-4xl mb-2 mx-auto">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-[#2EECC5] mb-2">{service.name}</h3>
                                <p className='text-white text-lg font-bold mb-2'>{service.deadlines}</p>
                                <p className='text-white/70 text-sm'>{service.profit}</p>
                                <p className="mt-auto text-white font-bold text-3xl">{service.price}</p>
                            </div>
                            <motion.div
                                className="absolute inset-0 bg-[#2EECC5]/30 backdrop-blur-xl p-6 flex flex-col items-center justify-center"
                                initial={{opacity: 0}}
                                animate={{opacity: activeIndex === index ? 1 : 0}}
                                transition={{duration: 0.3}}
                            >
                                <p className="text-white text-lg text-center">{service.description}</p>
                                {/*<div>*/}
                                {/*     className='mt-auto text-white border border-white px-3 py-2 rounded-full hover:text-white hover:bg-zinc-900 transition-all duration-300'>Детальніше*/}
                                {/*</div>*/}
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            ))}
        </div>
    );
};

export default PricingBlock;