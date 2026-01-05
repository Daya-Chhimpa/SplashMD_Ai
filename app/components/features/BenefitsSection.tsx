import React from 'react';

export default function BenefitsSection() {
    const benefits = [
        {
            title: 'Save 2+ Hours Daily',
            description: 'Stop spending your evenings charting. Our AI handles the documentation so you can reclaim your personal time.',
            icon: (
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )
        },
        {
            title: '99% Accuracy',
            description: 'Trained on millions of medical encounters to understand complex medical terminology, accents, and multiple speakers.',
            icon: (
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )
        },
        {
            title: 'Works with Any EHR',
            description: 'Copy and paste structured notes directly into Epic, Cerner, AthenaHealth, SimplePractice, and more.',
            icon: (
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Why Clinicians Love SplashMD
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Designed to solve the biggest pain points in modern medical practice.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                            <p className="text-base text-slate-600 leading-relaxed max-w-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
