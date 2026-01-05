'use client';

import React, { useState } from 'react';

export default function FaqSection() {
    const faqs = [
        {
            question: "How does the AI ensure patient privacy?",
            answer: "We employ end-to-end encryption for all data in transit and at rest. Our systems are HIPAA-compliant, and we have a strict policy against training our core models on customer data without explicit permission. All processing happens in a secure, isolated environment."
        },
        {
            question: "Can I customize the note templates?",
            answer: "Absolutely. SplashMD comes with standard templates like SOAP, DAP, and BIRP, but you can fully customize sections, headers, and formatting to match your specific specialty and documentation style."
        },
        {
            question: "Does it work for multiple speakers?",
            answer: "Yes, our advanced diarization technology can distinguish between multiple speakers, accurately attributing speech to the clinician, patient, and family members even in group settings."
        },
        {
            question: "Is there a mobile app?",
            answer: "Yes, SplashMD is accessible via our iOS and Android apps, allowing you to record sessions and review notes on the go, or securely sync them to your desktop for final editing."
        },
        {
            question: "How much does it cost?",
            answer: "We offer a free trial for you to experience the magic first-hand. After that, we have flexible monthly and annual plans tailored for individual practitioners and group practices. Check our pricing page for details."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all hover:border-indigo-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                            >
                                <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                                <span className={`ml-6 flex h-7 w-7 items-center justify-center rounded-full border transition-all ${openIndex === index ? 'border-indigo-600 bg-indigo-50 text-indigo-600 rotate-180' : 'border-slate-200 text-slate-400'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
