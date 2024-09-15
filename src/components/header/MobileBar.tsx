"use client";

import Hamburger from "@/components/icons/Hamburger";
import { cn } from "@/lib/utils";
import { NavLinksType } from "@/types";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

type RouteType = {
    routes: NavLinksType[];
};

const MobileBar = ({ routes }: RouteType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <button
                className={`xl:hidden block`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Hamburger />
            </button>

            {isOpen && (
                <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 z-[100]">
                    <div
                        ref={menuRef}
                        className={cn(
                            "w-56 h-screen p-5 fixed right-0 top-0 z-10 overflow-hidden bg-yellow  transition-all",
                            isOpen ? "translate-x-0" : "translate-x-full",
                        )}
                    >
                        <div className="flex justify-end items-center">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <IoCloseSharp size={26} />
                            </button>
                        </div>
                        <nav className="mt-14">
                            <ul className="flex flex-col gap-y-9">
                                {routes?.map((r) => (
                                    <li
                                        key={r.title}
                                        className="_link_text text-black font-medium hover:text-white"
                                    >
                                        <Link href={r.href}>{r.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileBar;
