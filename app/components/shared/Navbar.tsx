"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { CiShoppingCart } from 'react-icons/ci';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import navbarLinks from '@/app/libs/navbar';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const path = usePathname();
    // console.log(path);

    return (
        <nav className="relative bg-gray-200 text-gray-700">
            <div className="flex items-center justify-between py-2 px-1 md:px-10 lg:px-20">
                <Link href="/" className="text-2xl md:text-3xl lg:text-4xl text-basic font-bold">
                    Laza
                </Link>
                <ul className="hidden md:flex items-center gap-5">
                    {
                        navbarLinks.map((link) => (
                            <li key={link.route}>
                                <Link className={`${path === link.path ? "text-purple-600": "text-gray-700"}`} href={link.path} onClick={() => setOpen(false)}>{link.route}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center gap-2">
                    <Link href="/cart" className="bg-white rounded-full p-1">
                        <CiShoppingCart size={25} />
                    </Link>
                    <Link href="/auth/sign-in" className="hidden md:inline-block bg-basic text-white px-4 py-2 rounded">
                        Sign In
                    </Link>

                    {/* mobile responsive menu */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="ml-2 md:hidden p-2 rounded focus:outline-none focus:ring"
                    >
                        {open ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-1/2 bg-gray-100 shadow-lg transform transition-transform duration-300 md:hidden z-50 ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
                aria-hidden={!open}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <Link href="/" className="text-lg font-bold">
                        Laza
                    </Link>
                    <button
                        onClick={() => setOpen(false)}
                        className="p-1 rounded focus:outline-none focus:ring"
                    >
                        <HiOutlineX size={24} />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 px-4 py-6 text-lg">
                    {
                        navbarLinks.map((link) => (
                            <li key={link.route}>
                                <Link className={`${path === link.path ? "text-purple-600": "text-gray-700"}`} href={link.path} onClick={() => setOpen(false)}>{link.route}</Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="mt-auto px-4 pb-6">
                    <Link href="/cart" className="flex items-center gap-2 bg-white px-3 py-2 rounded mb-3" onClick={() => setOpen(false)}>
                        <CiShoppingCart size={20} />
                        <span>Cart</span>
                    </Link>
                    <Link href="/auth/sign-in" className="block bg-basic text-white text-center px-3 py-2 rounded" onClick={() => setOpen(false)}>
                        Sign In
                    </Link>
                </div>
            </div>

            {open && (
                <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/30 md:hidden z-40"
                />
            )}
        </nav>
    );
};

export default Navbar;