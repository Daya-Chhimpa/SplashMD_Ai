import React from 'react';

export default function TrackerFeatures() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16">
                    What You Can Track
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Symptom Severity", icon: "📉" },
                        { label: "Medication Adherence", icon: "💊" },
                        { label: "Sleep Patterns", icon: "🌙" },
                        { label: "Therapeutic Alliance", icon: "🤝" },
                        { label: "Risk Assessment", icon: "🛡️" },
                        { label: "Goal Completion", icon: "✅" },
                        { label: "Patient Engagement", icon: "🗣️" },
                        { label: "Sentiment Analysis", icon: "🎭" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all">
                            <div className="h-10 w-10 text-2xl flex items-center justify-center bg-slate-50 rounded-lg">{item.icon}</div>
                            <span className="font-bold text-slate-700">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
