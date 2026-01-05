import React from 'react';

export default function SecuritySection() {
    return (
        <section className="relative overflow-hidden py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-3xl bg-slate-900 p-8 sm:p-10 shadow-2xl overflow-hidden">
                            {/* Decorative background effects */}
                            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-violet-500/30 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col items-center text-center text-white">
                                <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 ring-1 ring-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">SOC2 Type II Certified</h3>
                                <p className="text-slate-300 mb-8 max-w-sm">We adhere to the strictest security standards in the industry to keep your practice compliant.</p>

                                <div className="w-full grid grid-cols-2 gap-4 text-left">
                                    <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                                        <span className="text-sm font-medium">HIPAA Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                                        <span className="text-sm font-medium">GDPR Ready</span>
                                    </div>
                                    <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                                        <span className="text-sm font-medium">AES-256 Encryption</span>
                                    </div>
                                    <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                                        <span className="text-sm font-medium">BAA Included</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:pl-8 order-1 lg:order-2">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Uncompromised Security</h2>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Your Data Stays Safe and Private
                        </p>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                            We understand that patient trust is the foundation of your practice. That's why we've built SplashMD with a security-first architecture from day one.
                        </p>
                        <ul role="list" className="mt-8 space-y-4 text-slate-600">
                            <li className="flex gap-x-3">
                                <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                <span><strong className="font-semibold text-slate-900">Zero-Training Policy:</strong> We never train our AI models on your specific patient data without explicit consent.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                <span><strong className="font-semibold text-slate-900">Ephemeral Processing:</strong> Audio is processed in real-time and not permanently stored unless you choose to archive it.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <svg className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                <span><strong className="font-semibold text-slate-900">Audited Infrastructure:</strong> Regular third-party penetration testing and security audits.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
