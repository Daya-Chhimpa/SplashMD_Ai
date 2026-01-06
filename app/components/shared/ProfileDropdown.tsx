'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../../lib/store/hooks';
import { logout } from '../../../lib/store/features/authSlice';
import { useRouter } from 'next/navigation';
import { useGetUserQuery } from '../../../lib/store/services/authApi';

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { user } = useAppSelector((state) => state.auth);

    // Attempt to get user ID from stored user object. 
    // If user object just has email (from login page fallback), we might need to fetch by email or expect ID is there.
    // For now, assuming user.id fits the API requirement. 
    // If login response didn't give ID, we might be in trouble here unless we decode token using a library like jwt-decode.
    // But since I can't install new packages easily, I will skip decoding for now and assume ID is present or handle gracefully.

    const userId = user?.id || user?.user_id;

    // Fetch fresh user data if we have an ID
    const { data: userDetails } = useGetUserQuery(userId, { skip: !userId });

    const displayUser = userDetails || user;

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 ring-2 ring-white transition-all hover:ring-indigo-100 focus:outline-none"
            >
                {/* Fallback Initial or User Icon */}
                <span className="font-bold">
                    {displayUser?.first_name ? displayUser.first_name[0].toUpperCase() : (displayUser?.email?.[0].toUpperCase() || 'U')}
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 ring-1 ring-black/5 focus:outline-none z-50">
                    <div className="p-4 border-b border-slate-100/80">
                        <p className="text-sm font-semibold text-slate-800">
                            {displayUser?.first_name} {displayUser?.last_name}
                        </p>
                        <p className="text-xs text-slate-500 truncate mt-0.5">
                            {displayUser?.email}
                        </p>
                        <span className="inline-flex mt-2 items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 capitalize">
                            {displayUser?.role || 'User'}
                        </span>
                    </div>

                    <div className="p-2 space-y-1">
                        <Link
                            href="/profile"
                            onClick={() => setIsOpen(false)}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            Edit Profile
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
