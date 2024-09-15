'use client';

import SideNav from '@/components/header/SideNav';
import Logo from '@/components/shapes/Logo';
import { cn } from '@/lib/utils';
import { NavLinksType } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Header = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [isOpenSideNav, setIsOpenSideNav] = useState<boolean>(false);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const routes: NavLinksType[] = [
        {
            title: 'Home',
            href: '#top',
        },
        {
            title: 'How we help you?',
            href: '#discover',
        },
        {
            title: 'Why we do',
            href: '#mission',
        },
        {
            title: 'About',
            href: '#about',
        },
        {
            title: 'Contact',
            href: '#contact',
        },
    ];

    return (
        <header
            id='top'
            className={cn(
                'py-[30px] sticky top-0 left-0 w-full duration-200',
                scrollY > 80 && 'bg-black/10 backdrop-blur-md py-4',
                isOpenSideNav ? 'z-50' : 'z-[100]'
            )}
        >
            <div className={cn('flex justify-between items-center')}>
                <div className='container'>
                    <div className='text-white flex justify-between items-center'>
                        <Link href={'/'}>
                            <Logo className='sm:w-[294px] w-[205px] sm:h-[20px] h-[14px]' />
                        </Link>
                        <nav className='xl:block hidden'>
                            <ul className='flex gap-x-9'>
                                {routes.map((r) => (
                                    <li key={r.title} className='_link_text'>
                                        <Link className='' href={r.href}>
                                            {r.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className='xl:block hidden'>
                            <a href='#contact' className='button_sm'>
                                Get started
                            </a>
                        </div>
                        {/* Mobile */}
                        <div className='xl:hidden block'>
                            <SideNav
                                routes={routes}
                                setIsOpenSideNav={setIsOpenSideNav}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
