'use client';

import React, { useState } from 'react';

export default function TreatmentFaq() {
    const faqs = [
        {
            question: "Are the treatment plans Wiley compliant?",
            answer: "Yes, our AI models are trained on evidence-based practices that align with major treatment planning standards, including Wiley Treatment Planners, ensuring your documentation meets insurance and audit requirements."
        },
        {
            question: "Can I edit the generated plan?",
            answer: "Completely. The AI generates a robust draft (approx. 90% done), which you can then edit, add to, or refine to perfectly match your clinical judgment before finalizing."
        },
        {
            question: "What modalities are supported?",
            answer: "We support a wide range of therapeutic modalities including CBT, DBT, ACT, EMDR, Psychodynamic, Solution-Focused, Play Therapy, and more. You can specify your preferred modality when generating the plan."
        },
        {
            question: "Does it help with SMART goals?",
            answer: "Absolutely. The AI is specifically tuned to structure objectives in the SMART format (Specific, Measurable, Achievable, Relevant, Time-bound), saving you the mental effort of formatting them manually."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                        Common Questions
                    </h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {faqs.map((faq, index) => (
                        <div key={index} className="group">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
                            >
                                <span className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{faq.question}</span>
                                <span className={`ml-6 flex h-7 w-7 items-center justify-center rounded-full transition-all ${openIndex === index ? 'bg-indigo-50 text-indigo-600 rotate-180' : 'text-slate-400'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="pb-6 text-slate-600 text-sm leading-relaxed">
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
