import HeroOthers from '@/components/HeroOthers/HeroOthers'
import React from 'react'

import type { Metadata } from 'next'
import Accordion from '@/components/Accordion/Accordion'
import WhyReact from '@/components/ReactPage/WhyReact'
import Contacts from '@/components/Contacts/Contacts'
import Footer from '@/components/Footer/Footer'
export const metadata: Metadata = {
  title: 'ReactJS | Complex Agency – комплексні рішення для твого бізнесу використовуючи ReactJS',
  description: 'Complex Agency – провідна студія web-розробки, яка спеціалізується на створенні інноваційних рішень для бізнесу за допомогою ReactJS. Ми надаємо повний спектр послуг, від дизайну до розробки, щоб втілити ваші ідеї в успішні цифрові проекти. Довірте нам розвиток вашого бізнесу і досягніть нових висот разом з нами!',
}

export default function ReactPage() {
  return (
    <div>
        <HeroOthers />
        <Accordion />
        <WhyReact />
        <Contacts />
        <Footer />
    </div>
  )
}
