import React from 'react';

export default function GenieExplainer() {
    return (
        <section className="py-24 bg-gradient-to-br from-indigo-50 to-violet-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm mb-6 border border-indigo-100">
                            Deep Dive
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                            After-Session Explainer & <br />
                            <span className="text-indigo-600">Hidden Dynamics Uncovered</span>
                        </h2>
                        <ul className="space-y-6">
                            {[
                                { title: "Turn-by-Turn Analysis", desc: "Review the full transcript with overlay annotations showing exactly where emotional shifts occurred." },
                                { title: "Behavioral Patterns", desc: "Genie maps recurring patterns (e.g., 'Patient withdraws when asked about father') across multiple sessions." },
                                { title: "Supervisor-Ready Reports", desc: "Generate a one-page clinically rich summary perfect for supervision or peer consultation." }
                            ]?.map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">{i + 1}</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image/Mockup */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="relative rounded-2xl bg-white shadow-2xl shadow-indigo-900/10 border border-slate-200 overflow-hidden p-2 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
                                        <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-3 bg-white border border-l-4 border-l-orange-500 border-slate-200 rounded shadow-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] font-bold text-orange-600">INSIGHT GENERATED</span>
                                            <span className="text-[10px] text-slate-400">10:42 AM</span>
                                        </div>
                                        <p className="text-xs text-slate-700 font-medium">
                                            Patient showed hesitation (3s pause) before answering. Potential topic avoidance regarding "work stress".
                                        </p>
                                    </div>
                                    <div className="p-3 bg-white border border-l-4 border-l-indigo-500 border-slate-200 rounded shadow-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[10px] font-bold text-indigo-600">SUGGESTION</span>
                                            <span className="text-[10px] text-slate-400">AI COACH</span>
                                        </div>
                                        <p className="text-xs text-slate-700 font-medium">
                                            Consider revisiting this topic with a gentler approach next session. "I noticed a pause when we discussed work..."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
