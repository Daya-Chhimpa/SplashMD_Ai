export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        How SplashMD Works
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Automate your documentation in three simple steps, giving you more time to focus on your patients.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200" />

                    {[
                        {
                            title: "Record Session",
                            desc: "Securely record your patient sessions using our HIPAA-compliant audio capture tool.",
                            icon: (
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                            )
                        },
                        {
                            title: "AI Analysis",
                            desc: "Our advanced AI processes the audio, identifying key medical terms, diagnosis codes, and plans.",
                            icon: (
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                            )
                        },
                        {
                            title: "Review & Sign",
                            desc: "Review the generated SOAP note, make any quick edits, and sign off within seconds.",
                            icon: (
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            )
                        },
                    ].map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center group">
                            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-xl shadow-indigo-200 transition-transform group-hover:scale-110 duration-300">
                                {step.icon}
                                <div className="absolute -bottom-3 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white shadow-lg">
                                    Step 0{i + 1}
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-bold text-slate-900">{step.title}</h3>
                            <p className="mt-3 text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
