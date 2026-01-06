
import React from 'react';

export default function GenieFeatures() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900">More Than Just Transcription & Summaries</h2>
                    <p className="mt-4 text-slate-600">Advanced analysis that captures what human ears might miss. Unlock the hidden layer of your sessions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Rupture Detection */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all group flex flex-col">
                        <div className="mb-6 bg-slate-50 rounded-xl p-4 border border-slate-100 h-40 flex flex-col justify-center relative overflow-hidden">
                            {/* Mock UI */}
                            <div className="flex gap-2 items-center mb-3">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="text-xs font-bold text-red-500 uppercase">Alert Detected</span>
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-200">
                                <p className="text-xs text-slate-600">"I don't think you understand..."</p>
                                <div className="mt-2 h-1 w-full bg-red-100 rounded-full">
                                    <div className="h-full w-3/4 bg-red-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Real-time Rupture Detection</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Instantly identifies breaks in the therapeutic bond by analyzing micro-pauses and tone shifts, alerting you before patients disengage.
                        </p>
                    </div>

                    {/* Card 2: Empathy Scoring */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all group flex flex-col">
                        <div className="mb-6 bg-slate-50 rounded-xl p-4 border border-slate-100 h-40 flex items-center justify-center relative overflow-hidden">
                            {/* Mock UI */}
                            <div className="relative w-24 h-24">
                                <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                                    <path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                    <path className="text-violet-500" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold text-violet-600">9.2</span>
                                    <span className="text-[8px] uppercase font-bold text-slate-400">Score</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Empathy Scoring</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Receive objective feedback on your empathetic accuracy. See exactly which interventions landed well and which missed the mark.
                        </p>
                    </div>

                    {/* Card 3: Pacing */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all group flex flex-col">
                        <div className="mb-6 bg-slate-50 rounded-xl p-4 border border-slate-100 h-40 flex flex-col justify-center relative overflow-hidden space-y-2">
                            {/* Mock UI */}
                            <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-200">
                                <span className="text-[10px] font-bold text-slate-500">You</span>
                                <div className="h-1.5 w-20 bg-slate-100 rounded-full"><div className="h-full w-10 bg-amber-400 rounded-full"></div></div>
                            </div>
                            <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-200">
                                <span className="text-[10px] font-bold text-slate-500">Patient</span>
                                <div className="h-1.5 w-20 bg-slate-100 rounded-full"><div className="h-full w-16 bg-blue-400 rounded-full"></div></div>
                            </div>
                            <div className="flex justify-center mt-1">
                                <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Excellent Balance</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Pacing & Silence Analysis</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Genie measures silence. Are you jumping in too fast? Or letting the silence do the heavy lifting? Get the data to adjust your flow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
