import React from 'react';

export default function GenieHero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-32">
            {/* Background Gradients - Mystical/Genie vibes with Violet/Fuchsia */}
            <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-fuchsia-50/50 via-white to-transparent pointer-events-none" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700 ring-1 ring-inset ring-fuchsia-700/10">
                        <span className="flex h-2 w-2 rounded-full bg-fuchsia-600 animate-pulse"></span>
                        The World's First AI Co-Therapist
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        Uncover Hidden Dynamics with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600">Alliance Genie™</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Go beyond the transcript. Analyze tone, pace, and subtle cues to measure therapeutic alliance, detect interaction ruptures, and improve patient retention.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-200 hover:shadow-fuchsia-300 transition-all hover:scale-105">
                            Unlock the Magic
                        </a>
                    </div>
                </div>

                {/* Hero UI Mockup - The "Magic Lamp" Dashboard */}
                <div className="mt-20 relative">
                    <div className="relative rounded-2xl bg-slate-900 shadow-2xl shadow-indigo-900/20 border border-slate-800 overflow-hidden p-1">
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50"></div>

                        <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 md:p-8 relative">
                            {/* Background Grid for tech feel */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                                {/* Left: Session Timeline with "Genie" Insights */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                        <h3 className="text-indigo-100 font-bold flex items-center gap-2">
                                            <svg className="w-5 h-5 text-fuchsia-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                                            Live Session Insights
                                        </h3>
                                        <div className="text-xs font-mono text-fuchsia-400 animate-pulse">● Analyzing Audio Stream...</div>
                                    </div>

                                    {/* Conversation Snippets with AI Overlay */}
                                    <div className="space-y-4">
                                        <div className="flex gap-4 opacity-50">
                                            <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                                            <div className="bg-slate-800 rounded-lg rounded-tl-none p-3 text-sm text-slate-300 w-3/4">
                                                I just don't feel like anyone is really listening to me at home...
                                            </div>
                                        </div>
                                        <div className="flex gap-4 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0 border border-indigo-400"></div>
                                            <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg rounded-tr-none p-3 text-sm text-indigo-100 w-3/4">
                                                It sounds like you're feeling incredibly isolated right now.
                                                {/* AI Label */}
                                                <div className="mt-2 flex gap-2">
                                                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">High Empathy Detected</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* The "Genie" Insight Card */}
                                        <div className="mt-6 mx-auto w-full max-w-md bg-gradient-to-r from-fuchsia-900/40 to-indigo-900/40 border border-fuchsia-500/30 rounded-xl p-4 backdrop-blur-md relative overflow-hidden group hover:border-fuchsia-500/60 transition-colors">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-fuchsia-500"></div>
                                            <div className="flex gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-fuchsia-200 font-bold text-sm">Alliance Alert: Potential Rupture</h4>
                                                    <p className="text-slate-400 text-xs mt-1">Patient's voice pitch dropped and response latency increased after the topic of 'Medication' was introduced.</p>
                                                </div>
                                            </div>
                                            {/* Action Buttons */}
                                            <div className="mt-3 flex gap-2 pl-12">
                                                <button className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-md border border-slate-700 transition-colors">Suggest Repair Strategy</button>
                                                <button className="text-xs text-slate-400 hover:text-white px-2 py-1.5">Dismiss</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Real-time Stats */}
                                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Talk Ratio</h4>
                                        <div className="flex h-4 w-full rounded-full overflow-hidden bg-slate-700">
                                            <div className="w-[35%] bg-indigo-500"></div>
                                            <div className="w-[65%] bg-slate-600"></div>
                                        </div>
                                        <div className="flex justify-between text-xs mt-2 text-slate-400">
                                            <span className="text-indigo-400">You: 35%</span>
                                            <span>Patient: 65%</span>
                                        </div>
                                        <p className="text-green-400 text-xs mt-2 flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            Optimal Balance achieved
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Emotional Valence</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-300">Anxiety</span>
                                                <span className="text-amber-400 font-mono">High</span>
                                            </div>
                                            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                                <div className="w-[80%] h-full bg-amber-500/80"></div>
                                            </div>

                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-300">Openness</span>
                                                <span className="text-emerald-400 font-mono">Med</span>
                                            </div>
                                            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                                <div className="w-[50%] h-full bg-emerald-500/80"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-1/2 -left-8 md:-left-12 bg-white p-3 rounded-xl shadow-xl border border-fuchsia-100 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                        <div className="h-10 w-10 text-2xl flex items-center justify-center bg-fuchsia-50 rounded-lg">🧞‍♂️</div>
                        <div>
                            <div className="text-xs text-slate-500 font-bold uppercase">Genie Says</div>
                            <div className="text-sm font-bold text-slate-900">Try mirroring next</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
