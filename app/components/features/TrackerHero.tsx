import React from 'react';

export default function TrackerHero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-32">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-50/50 via-white to-transparent pointer-events-none" />
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                        Outcome Analytics
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        See the Full Picture of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Patient Progress</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Visualize treatment outcomes session by session. track symptoms, alliance scores, and clinical improvements with automated visual analytics.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-500 transition-all hover:-translate-y-0.5">
                            Start Tracking Outcomes
                        </a>
                    </div>
                </div>

                {/* Hero Dashboard Graph Mockup */}
                <div className="mt-20 relative">
                    <div className="relative rounded-2xl bg-white shadow-2xl shadow-indigo-900/10 border border-slate-200 overflow-hidden ring-1 ring-slate-900/5 p-2">
                        <div className="bg-slate-50/50 rounded-xl border border-slate-100 p-6 md:p-8">

                            {/* Dashboard Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">Clinical Outcomes Dashboard</h2>
                                    <p className="text-sm text-slate-500">Patient: John Doe • Primary Diagnosis: MDD (F33.1)</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        PHQ-9
                                    </div>
                                    <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                                        GAD-7
                                    </div>
                                </div>
                            </div>

                            {/* Charts Container */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                                {/* Main Line Chart */}
                                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                                    <h3 className="text-sm font-bold text-slate-900 mb-6 flex justify-between items-center">
                                        Symptom Reduction Over Time
                                        <span className="text-xs font-normal px-2 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">▼ 42% Improvement</span>
                                    </h3>

                                    {/* CSS-only Chart Mockup */}
                                    <div className="h-64 sticky w-full flex items-end gap-2 sm:gap-4 relative pb-6 border-b border-slate-100 border-l border-slate-100 pl-4">
                                        {/* Grid Lines */}
                                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-xs text-slate-300">
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                            <div className="border-t border-slate-100 w-full h-0"></div>
                                        </div>

                                        {/* Data Points & Line Visualization (simplified with bars/lines) */}
                                        {[18, 16, 15, 12, 11, 8, 7, 5].map((val, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-2 group cursor-pointer">
                                                <div
                                                    className="w-full max-w-[40px] bg-gradient-to-t from-indigo-500 to-violet-500 rounded-t-md opacity-80 group-hover:opacity-100 transition-opacity relative"
                                                    style={{ height: `${(val / 20) * 100}%` }}
                                                >
                                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                                        Score: {val}
                                                    </div>
                                                </div>
                                                <span className="text-[10px] font-medium text-slate-400">Wk {i + 1}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Summary Stats Cards */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Therapeutic Alliance</h3>
                                        <div className="flex items-end gap-2">
                                            <span className="text-4xl font-extrabold text-slate-900">4.8</span>
                                            <span className="text-sm font-medium text-slate-500 mb-1">/ 5.0</span>
                                        </div>
                                        <div className="mt-3 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                                        </div>
                                        <p className="mt-3 text-xs text-slate-500">
                                            Patient feels "Highly Understood" based on semantic analysis of last 3 sessions.
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Risk Factors</h3>
                                        <div className="space-y-3 mt-4">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-600 font-medium">Suicidal Ideation</span>
                                                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-bold">None</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-600 font-medium">Sleep Disturbance</span>
                                                <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs font-bold">Moderate</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-600 font-medium">Social Isolation</span>
                                                <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-bold">Improving</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
