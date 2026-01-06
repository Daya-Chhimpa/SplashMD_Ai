'use client';

import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '../../../lib/store/hooks';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    // const handleLogout logic removed as it's now in ProfileDropdown


    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                            <line x1="12" x2="12" y1="17" y2="22" />
                            <line x1="8" x2="16" y1="22" y2="22" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                        SplashMD
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Features Dropdown */}
                    <div className="group relative">
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors outline-none py-2">
                            Features
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:-rotate-180">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        <div className="invisible absolute top-full left-1/2 -ml-32 mt-1 w-64 translate-y-2 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl shadow-slate-200/50 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                            {/* Invisible bridge to prevent closing when moving cursor from button to dropdown */}
                            <div className="absolute -top-4 left-0 h-4 w-full bg-transparent" />

                            <div className="space-y-0.5">
                                <Link href="/features/ai-note-taker" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                                    AI Note Taker
                                </Link>
                                <Link href="/features/ai-treatment-planner" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                                    AI Treatment Planner
                                </Link>
                                <Link href="/features/ai-progress-tracker" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                                    AI Progress Tracker
                                </Link>
                                <Link href="/features/alliance-genie" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                                    Alliance Genie™
                                </Link>
                            </div>
                        </div>
                    </div>

                    {[
                        { label: 'How it Works', href: '#' },
                        { label: 'Pricing', href: '#' },
                        { label: 'About', href: '#' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <Link
                                href="/scribe"
                                className="hidden md:inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 hover:bg-indigo-500 hover:shadow-lg transition-all active:scale-95"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                Launch Scribe
                            </Link>
                            <ProfileDropdown />
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="hidden text-sm font-semibold text-slate-600 hover:text-indigo-600 sm:block"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-6 font-medium text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <span className="relative z-10 text-sm">Get Started</span>
                                <div className="absolute inset-0 -z-10 translate-y-[100%] bg-gradient-to-r from-indigo-500 to-violet-500 transition-transform duration-300 group-hover:translate-y-0" />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
