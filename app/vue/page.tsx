import React from 'react'

import type {Metadata} from 'next'
import Contacts from '@/components/MainPage/Contacts/Contacts'
import Footer from '@/components/MainPage/Footer/Footer'
import HeroVue from "@/components/VuePage/HeroVue";
import AccordionVue from "@/components/Accordion/AccordionVue";
import WhyVue from "@/components/VuePage/WhyVue";

export const metadata: Metadata = {
    title: 'VueJS | Complex Agency – комплексні рішення для твого бізнесу використовуючи VueJS',
    description: 'Complex Agency – провідна веб-студія, яка створює інноваційні рішення для бізнесу за допомогою VueJS. Довірте нам розвиток вашого бізнесу.',
}

export default function VuePage() {
    return (
        <div>
            <HeroVue/>
            <AccordionVue />
            <WhyVue />
            <Contacts/>
            <Footer/>
        </div>
    )
}
