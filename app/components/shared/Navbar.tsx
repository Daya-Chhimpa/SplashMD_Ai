'use client';

import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '../../../lib/store/hooks';
import ProfileDropdown from './ProfileDropdown';
import { toast } from 'react-hot-toast';

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

                {/* Navigation Links - HIDDEN */}
                {/* <div className="hidden md:flex items-center gap-8">
                </div> */}

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <ProfileDropdown />
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
