'use client';

import React, { useState } from 'react';

export default function TrackerFaq() {
    const faqs = [
        {
            question: "Is the analysis done in real-time?",
            answer: "Yes, metrics are extracted and updated immediately after each session concludes, so your dashboard is always current when you review it before the next appointment."
        },
        {
            question: "Can I manually adjust the data?",
            answer: "Always. The AI provides suggestions based on the session transcript, but you have full control to edit, override, or add manual data points if necessary."
        },
        {
            question: "Is raw patient data shared with anyone?",
            answer: "No. All analytics happen within your secure, HIPAA-compliant instance. Aggregated data is never sold or shared with third parties."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-slate-900">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-slate-100 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                            >
                                <span className="text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors">{faq.question}</span>
                                <span className={`ml-6 flex h-7 w-7 items-center justify-center rounded-full transition-all ${openIndex === index ? 'bg-indigo-50 text-indigo-600 rotate-180' : 'text-slate-400'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="pb-4 text-slate-600 text-sm leading-relaxed">
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
