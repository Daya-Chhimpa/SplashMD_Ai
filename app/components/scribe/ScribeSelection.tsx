'use client';

import React from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useAppSelector } from '../../../lib/store/hooks';

interface ScribeSelectionProps {
    onSelection: (mode: 'live' | 'upload') => void;
}

export default function ScribeSelection({ onSelection }: ScribeSelectionProps) {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const handleClick = (mode: 'live' | 'upload') => {
        if (!isAuthenticated) {
            toast.error('Please login first to start a session');
            return;
        }
        onSelection(mode);
    };

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-12">
            {/* Option 1: Live Session */}
            <div
                onClick={() => handleClick('live')}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-100 border-2 border-transparent hover:border-indigo-600 transition-all duration-300 cursor-pointer text-center"
            >
                <div className="h-20 w-20 bg-indigo-50 rounded-full mx-auto mb-6 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Start Telehealth Session</h3>
                <p className="text-slate-500 mb-6">Start a secure video call. Record and transcribe in real-time with built-in consent workflows.</p>
                <span className="inline-block text-indigo-600 font-bold group-hover:underline">Start New Session →</span>
            </div>

            {/* Option 2: Upload Recording */}
            <div
                onClick={() => handleClick('upload')}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-violet-100 border-2 border-transparent hover:border-violet-600 transition-all duration-300 cursor-pointer text-center"
            >
                <div className="h-20 w-20 bg-violet-50 rounded-full mx-auto mb-6 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload Recording</h3>
                <p className="text-slate-500 mb-6">Have an existing audio file? Securely upload and process a past session recording.</p>
                <span className="inline-block text-violet-600 font-bold group-hover:underline">Upload File →</span>
            </div>
        </div>
    );
}
