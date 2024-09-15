import Hamburger from '@/components/icons/Hamburger';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { NavLinksType } from '@/types';
import Link from 'next/link';
import { Dispatch } from 'react';

type RouteType = {
    routes: NavLinksType[];
    setIsOpenSideNav: Dispatch<SetStateAction<boolean>>;
};

const SideNav = ({ routes, setIsOpenSideNav }: RouteType) => {
    return (
        <Sheet>
            <SheetTrigger onClick={() => setIsOpenSideNav(true)}>
                <Hamburger />
            </SheetTrigger>
            <SheetContent
                side={'left'}
                className='bg-[#02021D] text-white border-none px-0'
            >
                <div>
                    <nav className='mt-10 flex flex-col'>
                        {routes?.map((r) => (
                            <Link
                                key={r.title}
                                href={r.href}
                                className='py-4 px-8 _link_text font-medium hover:bg-white/10'
                            >
                                <SheetClose className='text-start w-full'>
                                    <span>{r.title}</span>
                                </SheetClose>
                            </Link>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SideNav;
