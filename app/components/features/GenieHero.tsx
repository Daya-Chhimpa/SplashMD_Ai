import React from 'react';

export default function GenieHero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-32">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-50/60 via-white to-transparent pointer-events-none" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                        Now Available in Beta
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        Your Clinical Compass For <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-violet-600">Stronger Therapeutic Alliances</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Go beyond the transcript. Analyze tone, pace, and subtle cues to measure therapeutic alliance, detect interaction ruptures, and improve patient retention.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
                            Unlock Insights
                        </a>
                        <a href="#how-it-works" className="text-sm font-semibold leading-6 text-slate-700 hover:text-indigo-600 transition-colors flex items-center gap-2">
                            Watch Demo <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Hero UI Mockup - Light Mode */}
                <div className="mt-20 relative">
                    <div className="relative rounded-2xl bg-white shadow-2xl shadow-slate-900/10 border border-slate-200 overflow-hidden ring-1 ring-slate-900/5 p-2">
                        <div className="bg-slate-50/50 rounded-xl border border-slate-100 p-6 md:p-8">

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Main Chart Area */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="font-bold text-slate-800">Alliance Score Trend</h3>
                                            <span className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">▲ 12% Improvement</span>
                                        </div>
                                        <div className="h-48 flex items-end justify-between gap-2 px-2">
                                            {[65, 68, 72, 70, 75, 82, 85, 88].map((h, i) => (
                                                <div key={i} className="w-full bg-indigo-100 rounded-t-sm relative group">
                                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-indigo-500 to-violet-500 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                                                    {/* Tooltip */}
                                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                        Session {i + 1}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between mt-2 text-xs text-slate-400">
                                            <span>Session 1</span>
                                            <span>Session 8</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase font-bold">Empathy</div>
                                                <div className="text-lg font-bold text-slate-900">High</div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase font-bold">Pacing</div>
                                                <div className="text-lg font-bold text-slate-900">Optimal</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar / Donut */}
                                <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-2">Session Balance</h3>
                                        <p className="text-xs text-slate-500 mb-6">Talk time distribution analysis</p>

                                        <div className="relative w-40 h-40 mx-auto">
                                            <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                                                <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                                <path className="text-indigo-500" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                                <path className="text-violet-500" strokeDasharray="30, 100" strokeDashoffset="-60" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                                <span className="text-2xl font-bold text-slate-900">60%</span>
                                                <span className="text-[10px] text-slate-400 font-bold uppercase">Patient</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                                <span className="text-slate-600">Patient</span>
                                            </div>
                                            <span className="font-bold text-slate-900">60%</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                                                <span className="text-slate-600">Therapist</span>
                                            </div>
                                            <span className="font-bold text-slate-900">30%</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                                <span className="text-slate-600">Silence</span>
                                            </div>
                                            <span className="font-bold text-slate-900">10%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-12 -right-6 lg:-right-12 bg-white p-4 rounded-xl shadow-xl border border-indigo-100 flex items-center gap-4 animate-bounce [animation-duration:4s] z-10">
                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 font-bold uppercase">Analysis Complete</div>
                            <div className="text-sm font-bold text-slate-900">No Ruptures Detected</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
