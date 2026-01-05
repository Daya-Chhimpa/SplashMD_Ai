import React from 'react';

export default function TreatmentHero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-32">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-50/50 via-white to-transparent pointer-events-none" />
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-inset ring-violet-700/10">
                        <span className="flex h-2 w-2 rounded-full bg-violet-600"></span>
                        Now Available in Beta
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        Create Goal-Focused <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Treatment Plans</span> in Minutes
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Ditch the "copy-paste" fatigue. Generate personalized, evidence-based treatment plans tailored to each client's unique diagnosis and goals with a single click.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-500 hover:shadow-indigo-300 transition-all active:scale-95">
                            Start Planning Free
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-2 hover:text-indigo-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                            Watch Demo
                        </a>
                    </div>
                </div>

                {/* Hero Image / UI Mockup */}
                <div className="mt-20 relative">
                    {/* Main Interface Window */}
                    <div className="relative rounded-2xl bg-white shadow-2xl shadow-indigo-900/10 border border-slate-200 overflow-hidden ring-1 ring-slate-900/5">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/50 px-4 py-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                            </div>
                            <div className="mx-auto text-xs font-medium text-slate-400">Treatment Plan - Sarah J. - #TP-2025-001</div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="flex flex-col lg:flex-row h-[600px]">
                            {/* Sidebar Configuration */}
                            <div className="w-full lg:w-80 border-r border-slate-200 bg-slate-50 p-6 space-y-6">
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Diagnosis</label>
                                    <div className="mt-2 p-3 bg-white rounded-lg border border-slate-200 text-sm font-medium text-slate-900 flex items-center justify-between shadow-sm">
                                        F41.1 Generalized Anxiety
                                        <svg className="w-4 h-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Modalities</label>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200">CBT</span>
                                        <span className="px-2.5 py-1 rounded-md bg-white text-slate-600 text-xs font-bold border border-slate-200">DBT</span>
                                        <span className="px-2.5 py-1 rounded-md bg-white text-slate-600 text-xs font-bold border border-slate-200">Mindfulness</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Focus Areas</label>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" checked readOnly className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                                            <span className="text-sm text-slate-700">Panic Reduction</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" checked readOnly className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                                            <span className="text-sm text-slate-700">Sleep Hygiene</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                                            <span className="text-sm text-slate-700">Social Isolation</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl py-3 text-sm font-bold shadow-md hover:opacity-90 transition-opacity">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    Regenerate Plan
                                </button>
                            </div>

                            {/* Main Document Area */}
                            <div className="flex-1 p-8 bg-white overflow-y-auto">
                                <div className="max-w-2xl mx-auto space-y-8">

                                    {/* Problem 1 */}
                                    <div className="group rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 p-4 -mx-4 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 h-8 w-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs shrink-0">01</div>
                                            <div className="space-y-3 flex-1">
                                                <div>
                                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Problem Definition</h3>
                                                    <p className="mt-1 text-slate-700 leading-relaxed">Client reports excessive worry occurring nearly every day for at least 6 months, causing significant distress and impairment in social and occupational functioning.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Goals */}
                                    <div className="group rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 -mx-4 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <div className="space-y-3 flex-1">
                                                <div>
                                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Long Term Goal</h3>
                                                    <p className="mt-1 text-slate-700 leading-relaxed">Reduce frequency and intensity of anxiety symptoms to a manageable level (GAD-7 score &lt; 5) within 6 months.</p>
                                                </div>
                                                <div className="pl-4 border-l-2 border-indigo-200 space-y-3">
                                                    <div>
                                                        <h4 className="text-xs font-bold text-slate-500 uppercase">Objective 1</h4>
                                                        <p className="text-sm text-slate-700">Client will identify 3 cognitive distortions related to anxiety triggers weekly.</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-slate-500 uppercase">Objective 2</h4>
                                                        <p className="text-sm text-slate-700">Client will practice progressive muscle relaxation for 15 mins daily.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interventions */}
                                    <div className="group rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 p-4 -mx-4 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs shrink-0">Rx</div>
                                            <div className="space-y-3 flex-1">
                                                <div>
                                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Planned Interventions</h3>
                                                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                                                        <li className="flex items-center gap-2">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                                            Psychoeducation regarding the physiological response to anxiety.
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                                            Guided discovery to challenge catastrophic thinking patterns.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements for 3D effect */}
                    <div className="absolute top-1/2 -right-12 p-4 bg-white rounded-xl shadow-xl border border-slate-100 animate-bounce [animation-duration:3s]">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">Compliance Check</p>
                                <p className="text-sm font-bold text-slate-900">Wiley Treatment Planner Aligned</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-20 -left-6 p-4 bg-white rounded-xl shadow-xl border border-slate-100 animate-bounce [animation-duration:4s]">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">Time Saved</p>
                                <p className="text-sm font-bold text-slate-900">~45 mins per plan</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
