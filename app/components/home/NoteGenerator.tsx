'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useAppSelector } from '../../../lib/store/hooks';

export default function NoteGenerator() {
    const router = useRouter();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const handleSelection = (mode: 'live' | 'upload') => {
        if (!isAuthenticated) {
            toast.error('Please login first to start a session');
            return;
        }
        router.push('/scribe');
    };

    return (
        <div className="w-full">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">Start Documentation</h2>
                <p className="text-slate-500 text-sm mt-1">Select a method to begin your session note.</p>
            </div>

            <div className="flex flex-col gap-4">
                {/* Option 1: Live Session */}
                <div
                    onClick={() => handleSelection('live')}
                    className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:shadow-indigo-100 border border-slate-200 hover:border-indigo-600 transition-all duration-300 cursor-pointer flex items-center gap-5"
                >
                    <div className="flex-shrink-0 h-16 w-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Start Telehealth Session</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Secure video call with real-time AI transcription.</p>
                    </div>
                    <div className="ml-auto text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                </div>

                {/* Option 2: Upload Recording */}
                <div
                    onClick={() => handleSelection('upload')}
                    className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:shadow-violet-100 border border-slate-200 hover:border-violet-600 transition-all duration-300 cursor-pointer flex items-center gap-5"
                >
                    <div className="flex-shrink-0 h-16 w-16 bg-violet-50 rounded-full flex items-center justify-center text-violet-600 group-hover:scale-105 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Upload Recording</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Upload an existing audio file for processing.</p>
                    </div>
                    <div className="ml-auto text-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">HIPAA Compliant & Secure | SOC2 Certified</p>
            </div>
        </div>
    );
}
