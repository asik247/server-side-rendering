"use client"
import Link from 'next/link';
import React from 'react';
import ActiveLinks from './ActiveLinks';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-3 shadow-md">
            {/* Logo */}
            <Link href={'/'}>
                <img src="/kfcLogo.jpg" alt="KFC Logo" className="w-24 rounded-2xl" />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-6 font-medium">
                <ActiveLinks href="/foods" className="hover:text-red-500 transition">
                    Foods
                </ActiveLinks>

                <ActiveLinks href="/reviews" className="hover:text-red-500 transition">
                    Reviews
                </ActiveLinks>
                <ActiveLinks href="/feedback" className="hover:text-red-500 transition">
                    FeedBack
                </ActiveLinks>
            </nav>
        </header>
    );
};

export default Header;