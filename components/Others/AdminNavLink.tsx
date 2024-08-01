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
            className={`relative flex gap-4 items-center p-4 hover:bg-[#2EECC5]/20 transition-all duration-300 ${isActive ? 'text-[#2EECC5] font-bold bg-[#2EECC5]/20' : 'text-white'}`}
        >
            <Icon
                icon={iconName}
                className={`h-6 w-6 ${isActive ? 'text-[#2EECC5]' : 'text-white'}`}
            />
            {text}
            {isActive && (
                <span className="absolute right-0 top-0 h-full w-1 bg-[#2EECC5]" />
            )}
        </Link>

    )
}