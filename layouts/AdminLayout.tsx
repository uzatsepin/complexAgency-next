import Image from "next/image";
import Link from "next/link";
import {Icon} from "@iconify/react";
import React from "react";
import AdminNavLink from "@/components/Others/AdminNavLink";

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({children}: AdminLayoutProps) => {

    return (
        <div className="min-h-screen h-full flex">
            <div className="bg-zinc-900 shadow-2xl w-[300px] py-6">
                <div className="flex items-center justify-center">
                    <Image
                        src="/logo.svg"
                        width={131}
                        height={65}
                        alt="logo"
                        className="cursor-pointer h-12 w-32 md:h-16 md:w-36"
                    />
                </div>
                <div className="mt-8">
                    <ul className="flex flex-col gap-2">
                        <AdminNavLink href={'/admin'} text={'Dashboard'} iconName={'material-symbols:dashboard'}/>
                        <AdminNavLink href={'/admin/portfolio'} text={'Портфоліо'} iconName={'bi:person-workspace'}/>
                    </ul>
                </div>
            </div>
            <div className='flex-1 p-10'>{children}</div>
        </div>
    )
}

export default AdminLayout;