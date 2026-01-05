import React from 'react';

export default function TreatmentWorkflow() {
    const steps = [
        {
            num: "01",
            title: "Select Diagnosis & Modality",
            desc: "Choose from DSM-5 / ICD-10 diagnoses and your preferred therapeutic approach (CBT, EMDR, Play Therapy, etc.).",
            icon: (
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            ),
            color: "bg-indigo-600"
        },
        {
            num: "02",
            title: "AI Generates Custom Plan",
            desc: "Our engine drafts smart goals, objectives, and interventions tailored primarily to your client's bio-psycho-social history.",
            icon: (
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            ),
            color: "bg-violet-600"
        },
        {
            num: "03",
            title: "Review & Export",
            desc: "Make quick adjustments if needed, then export directly to PDF or copy specifically formatted text to your EHR.",
            icon: (
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            ),
            color: "bg-slate-900"
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[40%] left-0 w-full h-0.5 bg-slate-100 -z-10 bg-[linear-gradient(to_right,transparent_0%,#cbd5e1_20%,#cbd5e1_80%,transparent_100%)]"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900">Treatment Planning in 3 Simple Steps</h2>
                    <p className="mt-4 text-slate-600">From diagnosis to documented plan in under 2 minutes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {steps.map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                            <div className={`h-16 w-16 rounded-2xl ${step.color} shadow-lg shadow-indigo-200 flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 duration-300`}>
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {step.desc}
                            </p>

                            {/* Step Number Background */}
                            <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 -z-10 opacity-50 select-none">
                                {step.num}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
