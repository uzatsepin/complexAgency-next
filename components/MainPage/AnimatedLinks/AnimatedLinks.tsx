import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge'; // Assuming you have tailwind-merge installed

const AnimatedLinks: React.FC<{ links: { name: string, link: string }[] }> = ({ links }) => {
    const fired = useRef(false);
    const defaultSelectedTabIndex = 0;
    const [currentLink, setCurrentLink] = useState<{
        index: number;
        left: undefined | number;
        width: undefined | number;
    }>({
        index: defaultSelectedTabIndex,
        left: undefined,
        width: undefined,
    });

    useEffect(() => {
        setCurrentLink(() => ({
            left: document.getElementById('link-btn-' + defaultSelectedTabIndex)?.offsetLeft,
            width: document.getElementById('link-btn-' + defaultSelectedTabIndex)?.getBoundingClientRect().width,
            index: defaultSelectedTabIndex,
        }));
    }, []);

    return (
        <div className="relative">
            <ul className="gap-1 md:gap-8 border border-[#FFFFFF30] px-2 py-1 md:px-6 md:py-2 rounded-full flex fixed md:relative right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 bottom-6 md:bottom-0 z-10 w-11/12 md:w-fit bg-zinc-900 bg-opacity-80 backdrop-blur-2xl justify-center">
                {links.map((link, i) => (
                    <li
                        key={link.name}
                        id={'link-btn-' + i}
                        onClick={() => {
                            fired.current = true;
                            setCurrentLink(() => ({
                                left: document.getElementById('link-btn-' + i)?.offsetLeft,
                                width: document.getElementById('link-btn-' + i)?.getBoundingClientRect().width,
                                index: i,
                            }));
                        }}
                        className={twMerge(
                            'flex items-center border border-transparent gap-2 py-2 px-2 lg:py-2 lg:px-4 rounded-full hover:bg-[#21232C]' +
                            ' hover:text-[#2EECC5] transition-all duration-300 cursor-pointer',
                            currentLink.index === i && 'hover:text-[#2EECC5] text-[#2EECC5] bg-[#21232C]'
                        )}
                    >
                        <Link href={link.link} className="text-sm md:text-lg">
                            {link.name}
                        </Link>
                    </li>
                ))}
                {/* Animated underline div */}
                <div className={'absolute inset-0 h-full p-2 -z-[1] overflow-hidden'}>
                    <div className={'relative h-full w-full overflow-hidden'}>
                        <div
                            style={{
                                left: `calc(${currentLink.left || 0}px - 0.75rem + 0.25rem)`,
                                width: `${currentLink.width || 0}px`,
                            }}
                            className={twMerge(
                                `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]`,
                                fired.current ? 'bg-[#21232C]' : 'bg-[#21232C]'
                            )}
                        />
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default AnimatedLinks;
