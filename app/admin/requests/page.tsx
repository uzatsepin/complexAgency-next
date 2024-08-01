import React from "react";
import Table from "@/components/Others/Table";

export default function Page() {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Портфолио</h1>
                <p className="mt-2 text-lg text-white/80">
                    На даний момент додано робіт:
                </p>
            </div>
            <div>
                <Table />
            </div>
        </div>
    )
}