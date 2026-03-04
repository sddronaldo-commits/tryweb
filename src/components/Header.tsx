'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/teachers-space', label: "Teacher's Space" },
    { href: '/field-officers-space', label: "Field Officer's Space" },
];

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-[72px]">
                {/* Mobile hamburger */}
                <button
                    className="sm:hidden p-2 -ml-2 text-[#834400] hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <img
                        src="/logo.png"
                        alt="Lend A Hand India"
                        className="h-10 sm:h-12 w-auto"
                    />
                    <div className="hidden xs:block">
                        <div className="text-[#834400] font-bold text-base sm:text-lg leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            Lend A Hand India
                        </div>
                        <div className="text-[#834400] text-[10px] sm:text-xs leading-tight" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            Building A Skilled Tomorrow
                        </div>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 text-sm transition-colors ${isActive
                                        ? 'text-[#834400] font-bold'
                                        : 'text-[#834400]/70 hover:text-[#834400]'
                                    }`}
                                style={{ fontFamily: "'Open Sans', sans-serif" }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    {/* Search icon */}
                    <button className="ml-2 p-2 text-[#834400]/70 hover:text-[#834400] hover:bg-gray-100 rounded-lg transition-colors" aria-label="Search">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile search icon */}
                <button className="sm:hidden p-2 -mr-2 text-[#834400]/70 hover:text-[#834400]" aria-label="Search">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            {/* Mobile menu drawer */}
            {menuOpen && (
                <div className="sm:hidden border-t border-gray-100 bg-white shadow-lg">
                    <nav className="flex flex-col py-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`px-6 py-3 text-sm transition-colors ${isActive
                                            ? 'text-[#834400] font-bold bg-[#834400]/5'
                                            : 'text-[#834400]/70 hover:text-[#834400] hover:bg-gray-50'
                                        }`}
                                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
