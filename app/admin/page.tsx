'use client'

import React from "react";
import Counter from "@/components/animata/text/counter";
import {Icon} from "@iconify/react";
import { KanbanBoard } from "@/components/KanbanBoard/KanbanBoard";

export default function AdminPage() {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-lg text-white/80">
                    Довідкова інформація про ресурс
                </p>
            </div>
            <div className={'grid grid-cols-5 mt-8 gap-6'}>
                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="gravity-ui:persons" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={21} className={'text-5xl'}/>
                            <div className={'text-lg text-center text-white/70 font-bold'}>кількість заявок</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>заявки оформлені через сайт</p>
                </div>
                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="gravity-ui:persons" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={21} className={'text-5xl'}/>
                            <div className={'text-lg text-center text-white/70 font-bold'}>кількість заявок</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>заявки оформлені через сайт</p>
                </div>
                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="gravity-ui:persons" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={21} className={'text-5xl'}/>
                            <div className={'text-lg text-center text-white/70 font-bold'}>кількість заявок</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>заявки оформлені через сайт</p>
                </div>
                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="gravity-ui:persons" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={21} className={'text-5xl'}/>
                            <div className={'text-lg text-center text-white/70 font-bold'}>кількість заявок</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>заявки оформлені через сайт</p>
                </div>
                <div className={'p-4 border border-2 border-[#2EECC5] rounded-xl shadow-2xl'}>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'p-3 bg-[#2EECC5]/20 rounded-full'}>
                            <Icon icon="gravity-ui:persons" className={'w-8 h-8 text-[#2EECC5]'}/>
                        </div>
                        <div>
                            <Counter targetValue={21} className={'text-5xl'}/>
                            <div className={'text-lg text-center text-white/70 font-bold'}>кількість заявок</div>
                        </div>
                    </div>
                    <p className={'text-white/70 text-center mt-4 text-sm'}>заявки оформлені через сайт</p>
                </div>
            </div>

            <div className="mt-8 w-full">
                <h1 className="text-3xl font-bold">Активні заявки з сайту</h1>
                <KanbanBoard />
            </div>
        </div>
    )
}