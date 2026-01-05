import React from 'react';

export default function TreatmentComparison() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900">Why SplashMD stands out</h2>
                    <p className="mt-4 text-slate-600">Move beyond generic templates. Experience planning that adapts to your clinical expertise.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Generic Way */}
                    <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
                        <div className="absolute -top-5 left-8 shadow-sm border border-slate-200 bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                            The "Old" Way
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-2">Generic & Static</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500">
                                    <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                <span className="text-slate-600 font-medium">Cookie-cutter goals that don't fit the patient.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500">
                                    <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                <span className="text-slate-600 font-medium">Limited to a few basic modalities.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500">
                                    <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                <span className="text-slate-600 font-medium">Requires manual editing for every detail.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500">
                                    <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                <span className="text-slate-600 font-medium">Does not learn from your past preferences.</span>
                            </li>
                        </ul>
                    </div>

                    {/* The Generic Way */}
                    <div className="relative p-8 rounded-3xl bg-slate-900 text-white shadow-2xl shadow-indigo-900/40 overflow-hidden ring-1 ring-white/10">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="absolute -top-5 left-8 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ring-2 ring-slate-900/10">
                            The SplashMD Way
                        </div>
                        <h3 className="text-2xl font-bold mb-6 mt-2 relative z-10">Personalized & Evidence-Based</h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50">
                                    <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-slate-200 font-medium">Tailored specifically to patient history & symptoms.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50">
                                    <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-slate-200 font-medium">Supports complex, multi-modality approaches.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50">
                                    <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-slate-200 font-medium">One-click creation with "Human-in-the-loop" design.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50">
                                    <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span className="text-slate-200 font-medium">Adapts to your voice and phrasing over time.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )

}
