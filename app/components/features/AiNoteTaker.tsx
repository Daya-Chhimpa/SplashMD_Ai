import React from 'react';

export default function AiNoteTaker() {
    return (
        <section className="relative overflow-hidden bg-white py-24 sm:py-32">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

                    {/* Text Content */}
                    <div className="lg:pr-8">
                        <div className="lg:max-w-lg">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Live Beta
                            </div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                AI Note Taker
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-slate-600">
                                Focus on your patient, not your screen. Our AI Note Taker listens, transcribes, and generates clinical notes in real-time with human-level accuracy.
                            </p>

                            <div className="mt-8 space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">HIPAA Compliant</h3>
                                        <p className="mt-1 text-sm text-slate-600">Your data is encrypted and protected with enterprise-grade security standards.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Multi-Speaker Recognition</h3>
                                        <p className="mt-1 text-sm text-slate-600">Distinguishes between clinician and patient voices automatically.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Custom Templates</h3>
                                        <p className="mt-1 text-sm text-slate-600">Tailor the output to your specific documentation style and needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex items-center gap-x-6">
                                <a href="#" className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Try it for free
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-slate-900 hover:text-indigo-600 flex items-center gap-1">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Visual Content (Right Side) */}
                    <div className="relative lg:mt-0 mt-12">
                        <div className="relative rounded-2xl bg-slate-900/5 p-3 ring-1 ring-inset ring-slate-900/10 lg:p-4 backdrop-blur-sm">
                            <div className="relative rounded-xl bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
                                {/* Mock UI for Note Taker */}
                                <div className="flex flex-col h-[500px]">

                                    {/* Mock Header */}
                                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-10">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-sm">Session Recording</h3>
                                                <p className="text-[11px] font-medium text-slate-500">00:15:24 • Dr. Smith & John Doe</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600 ring-1 ring-inset ring-red-600/20 tracking-wide uppercase">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                </span>
                                                Live
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mock Chat/Transcript */}
                                    <div className="flex-1 overflow-auto p-6 space-y-5 bg-slate-50/50">
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-700 text-[10px] font-extrabold border border-indigo-200">DR</div>
                                            <div className="space-y-1 max-w-[85%]">
                                                <div className="text-[11px] font-semibold text-slate-400 ml-1">Dr. Smith • 10:02 AM</div>
                                                <div className="rounded-2xl rounded-tl-none bg-white p-3.5 text-sm text-slate-700 shadow-sm border border-slate-200/60 leading-relaxed">
                                                    <p>How have you been feeling since our last session? Have you noticed any changes in your sleep patterns?</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 flex-row-reverse">
                                            <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 text-violet-700 text-[10px] font-extrabold border border-violet-200">PT</div>
                                            <div className="space-y-1 max-w-[85%]">
                                                <div className="text-[11px] font-semibold text-slate-400 mr-1 text-right">John Doe • 10:03 AM</div>
                                                <div className="rounded-2xl rounded-tr-none bg-indigo-600 p-3.5 text-sm text-white shadow-md shadow-indigo-200 leading-relaxed">
                                                    <p>A bit better, actually. I managed to get about 6 hours of sleep last night, which is an improvement.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-700 text-[10px] font-extrabold border border-indigo-200">DR</div>
                                            <div className="space-y-1 max-w-[85%]">
                                                <div className="text-[11px] font-semibold text-slate-400 ml-1">Dr. Smith • 10:03 AM</div>
                                                <div className="rounded-2xl rounded-tl-none bg-white p-3.5 text-sm text-slate-700 shadow-sm border border-slate-200/60 leading-relaxed">
                                                    <p>That's great to hear. Are you still taking the medication as we discussed, or have you made any changes?</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Live Transcribing indicator */}
                                        <div className="flex items-center gap-2 pl-14 opacity-60">
                                            <span className="text-xs font-semibold text-slate-400">Transcribing</span>
                                            <span className="h-1 w-1 rounded-full bg-slate-400 animate-bounce"></span>
                                            <span className="h-1 w-1 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></span>
                                            <span className="h-1 w-1 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></span>
                                        </div>
                                    </div>

                                    {/* Summary Section */}
                                    <div className="bg-white px-6 py-4 border-t border-slate-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                                Real-time AI Summary
                                            </h4>
                                            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">Auto-generated</span>
                                        </div>
                                        <div className="rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                                            <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                                <span className="text-indigo-600 font-bold">Subjective:</span> Patient reports improved sleep duration (approx 6 hours). Verified adherence to current medication Plan.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Floating Elements/Blobs */}
                        <div className="absolute -top-12 -right-12 h-40 w-40 bg-indigo-500/10 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-12 -left-12 h-40 w-40 bg-violet-500/10 rounded-full blur-2xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
