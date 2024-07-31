'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'

interface AdminNavLinkProps {
    href: string
    text: string
    iconName: string
}

export default function AdminNavLink({ href, text, iconName }: AdminNavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={`flex gap-4 items-center p-4 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/20 transition-all duration-300 ${isActive ? 'text-[#2EECC5] font-bold bg-[#2EECC5]/20' : 'text-white'}`}
        >
            <Icon
                icon={iconName}
                className={`h-6 w-6 ${isActive ? 'text-[#2EECC5]' : 'text-white'}`}
            />
            {text}
        </Link>
    )
}