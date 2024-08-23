"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";
import { IDummyContent } from "./WhyVue";

export function BenefitsTextVue({ benefitsText }: { benefitsText: IDummyContent[] }) {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {benefitsText.map((item, index) => (
                    <div
                        key={`content-${index}`}
                        className="mb-10">
                        <h2 className="bg-[#2EEEC2]/40 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">{item.badge}</h2>

                        <p className="text-2xl mb-6 text-[#2EEEC2]">{item.title}</p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}
