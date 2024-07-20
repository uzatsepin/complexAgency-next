import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { TarifsScroll } from "./TarifsScroll/TarifsScroll";

export default function Tarifs() {
    const title = [
        {
            text: "Оберіть",
            className: "text-[#2CE8C2]"
        },
        {
            text: "тариф",
            className: "text-white"
        },
        {
            text: "під",
            className: "text-white"
        },
        {
            text: "вашу",
            className: "text-white"
        },
        {
            text: "задачу",
            className: "text-white"
        }
    ];
    return (
        <div>
            <div className="container mx-auto mt-24">
                <div>
                    <TypewriterEffect
                        words={title}
                        className="text-center"
                    />
                </div>
            </div>
            <div className="mt-12">
                    <TarifsScroll />
                </div>
        </div>
    );
}
