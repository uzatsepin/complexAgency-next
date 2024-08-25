import HeroReact from '@/components/ReactPage/HeroReact'
import React from 'react'

import type { Metadata } from 'next'
import Accordion from '@/components/Accordion/Accordion'
import WhyReact from '@/components/ReactPage/WhyReact'
import Contacts from '@/components/MainPage/Contacts/Contacts'
import Footer from '@/components/MainPage/Footer/Footer'
export const metadata: Metadata = {
  title: 'ReactJS | Complex Agency – комплексні рішення для твого бізнесу використовуючи ReactJS',
  description: 'Complex Agency – експерти з розробки інноваційних бізнес-рішень за допомогою ReactJS. Довірте нам успіх вашого бізнесу.',
}

export default function ReactPage() {
  return (
    <div>
        <HeroReact />
        <Accordion />
        <WhyReact />
        <Contacts />
        <Footer />
    </div>
  )
}
