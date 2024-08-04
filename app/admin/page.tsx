'use client'

import React, { useEffect, useState } from "react";
import Counter from "@/components/animata/text/counter";
import {Icon} from "@iconify/react";
import KanbanBoard from "@/components/KanbanBoard/KanbanBoard";
import axios from "axios";
import {useRequestStore} from "@/store/useRequestStore";

interface IAnalytics {
    totalVisitors: number,
    newUsers: number,
    eventCount: number,
    averageSessionDuration: string
}

export default function AdminPage() {

    const [analytics, setAnalytics] = useState<IAnalytics>()
    const {cards, fetchCards } = useRequestStore();

    const cardsCount = cards.length > 0 ? Number(cards.length) : 0;

    const fetchAnalyticsData = async () => {
        try {
            await fetch('/api/analytics')
                .then(res => res.json())
                .then(res => setAnalytics(res));


        } catch(e) {
            console.log(e);
        }
    }



    useEffect(() => {
        fetchAnalyticsData();
        fetchCards()
    }, [])

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-lg text-white/80">
                    Довідкова інформація про ресурс
                </p>
            </div>
            <div className={'grid grid-cols-3 2xl:grid-cols-5 mt-8 gap-6'}>
                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="ri:user-add-fill" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={cardsCount} className={'text-3xl 2xl:text-5xl'}/>
                            <div className={'text-sm text-nowrap 2xl:text-md text-white/70 font-bold'}>Кількість заявок</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>заявки оформлені через сайт</p>
                </div>
                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="hugeicons:view" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={analytics?.totalVisitors ?? 0} className={'text-5xl'}/>
                            <div className={'text-sm text-nowrap 2xl:text-md text-white/70 font-bold'}>Переглядів сайту</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>Переглядів за останні 7 днів</p>
                </div>

                <div className={'p-4 border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="mdi:users" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={analytics?.newUsers ?? 0} className={'text-5xl'}/>
                            <div className={'text-sm text-nowrap 2xl:text-md text-white/70 font-bold'}>Нових користувачів</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>Унікальні користувачі за останні 7 днів</p>
                </div>

                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="tabler:click" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={analytics?.eventCount ?? 0} className={'text-5xl'}/>
                            <div className={'text-sm text-nowrap 2xl:text-md text-white/70 font-bold'}>Кількість взаємодій</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>Кількість взаємодій\кліків на сайті</p>
                </div>

                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="gravity-ui:persons" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <span className="font-bold text-foreground text-xl 2xl:text-4xl">{analytics?.averageSessionDuration ?? 0}</span>
                            <div className={'text-md text-white/70 font-bold'}>Час відвідування</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>Середній час перебування на сайті</p>
                </div>
            </div>

            <div className="mt-8 w-full">
                <h1 className="text-3xl font-bold">Активні заявки з сайту</h1>
                <KanbanBoard />
            </div>
        </div>
    )
}