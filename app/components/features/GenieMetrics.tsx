import React from 'react';

export default function GenieMetrics() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Text */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 uppercase tracking-wide mb-6">
                            Evidence Based
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                            Improving Outcomes by 2x through Alliance
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600">
                            <p>
                                Research consistently shows that the <strong>Therapeutic Alliance</strong> is the #1 predictor of treatment success—more important than the specific treatment modality used.
                            </p>
                            <p>
                                Alliance Genie™ acts as a "supervision layer" on every call, helping you maintain a strong bond and recover quickly when things get rocky.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <div className="p-4 bg-fuchsia-50 rounded-xl border border-fuchsia-100">
                                <div className="text-3xl font-black text-fuchsia-600">92%</div>
                                <div className="text-sm font-medium text-slate-600 mt-1">Retention Rate</div>
                            </div>
                            <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                                <div className="text-3xl font-black text-indigo-600">3.5x</div>
                                <div className="text-sm font-medium text-slate-600 mt-1">Faster Trust Building</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Abstract Representation of Connection */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-fuchsia-300 to-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                        <div className="relative z-10 grid gap-4">
                            {/* Metric Strip 1 */}
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between animate-[slideIn_5s_infinite]">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">👩‍⚕️</div>
                                    <div className="text-sm font-bold text-slate-700">Therapist</div>
                                </div>
                                <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 w-[70%] animate-[widthStretch_3s_ease-in-out_infinite]"></div>
                                </div>
                            </div>

                            {/* Metric Strip 2 (Connecting Line) */}
                            <div className="h-12 w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500 mx-auto rounded-full"></div>

                            {/* Metric Strip 3 */}
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">👨‍💼</div>
                                    <div className="text-sm font-bold text-slate-700">Patient</div>
                                </div>
                                <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-fuchsia-500 w-[65%] animate-[widthStretch_4s_ease-in-out_infinite]"></div>
                                </div>
                            </div>

                            {/* Insight Bubble */}
                            <div className="absolute top-1/2 right-10 translate-x-8 bg-slate-900 text-white p-3 rounded-lg text-xs font-bold shadow-xl">
                                ✨ Synchrony Detected
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
