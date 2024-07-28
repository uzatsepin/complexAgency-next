"use client";

import { pb } from "@/pb";
import Image from "next/image";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function LoginPage() {
    const router = useRouter();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const authAdmin = async () => {
        try {
            setLoading(true);
            const authData = await pb.collection("users").authWithPassword(login, password);
            console.log("Login authData:", authData);
            pb.authStore.save(authData.token, authData.record); // Сохраните токен и запись в authStore
            Cookies.set('pb_auth', JSON.stringify(authData), { expires: 7 }); // Сохраните authData в cookies
            toast("Login successful");
            router.push('/admin');
        } catch (e) {
            console.log(e);
            toast.error("Wrong login or password" + e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="gap-2 md:gap-10 border border-[#FFFFFF30] p-6 rounded-2xl flex flex-col w-[430px] bg-zinc-900 bg-opacity-80 backdrop-blur-2xl justify-center">
                <div className="flex items-center justify-center">
                    <Image
                        src="/logo.svg"
                        width={131}
                        height={65}
                        alt="logo"
                        className="cursor-pointer h-12 w-32 md:h-16 md:w-36"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        className="block outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                        placeholder="Login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input
                        type="password"
                        className="block outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div
                        onClick={() => authAdmin()}
                        className="flex gap-2 w-full text-center items-center justify-center text-md sm:text-xl rounded-[41px] border-[1.5px] border-[#2EECC5] px-4 sm:px-8 py-2 sm:py-4 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/25 cursor-pointer transition-all duration-300 hover:shadow-shadowInput mt-4">
                        {loading ? <Icon icon="line-md:loading-loop" width={28} height={28}/> : "Авторизация"}
                    </div>
                </div>
            </div>
            <Toaster position="bottom-right" />
        </div>
    );
}
