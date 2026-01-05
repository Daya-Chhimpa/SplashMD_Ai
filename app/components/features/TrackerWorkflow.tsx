import React from 'react';

export default function TrackerWorkflow() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900">How AI Tracking Works</h2>
                    <p className="mt-4 text-slate-600">Automated insights derived directly from your sessions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            num: "01",
                            title: "Session Analysis",
                            desc: "Our AI listens to the session content to identify key symptom keywords, emotional tone, and intervention responses.",
                            color: "from-blue-500 to-cyan-500"
                        },
                        {
                            num: "02",
                            title: "Data Extraction",
                            desc: "Automatically extracts quantitative data points (e.g., 'slept 6 hours', 'anxiety level 8/10') and maps them to clinical metrics.",
                            color: "from-indigo-500 to-violet-500"
                        },
                        {
                            num: "03",
                            title: "Trend Visualization",
                            desc: "Updates patient dashboards instantly, generating simple graphs that show progress over weeks and months.",
                            color: "from-fuchsia-500 to-rose-500"
                        }
                    ].map((step, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-3xl bg-slate-50 p-8 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 transition-all text-center border border-slate-100">
                            <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                                <span className="text-2xl font-bold">{step.num}</span>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
