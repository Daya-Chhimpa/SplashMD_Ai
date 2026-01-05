import React from 'react';

export default function GenieFeatures() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900">Your Sixth Sense in Therapy</h2>
                    <p className="mt-4 text-slate-600">Advanced analysis that captures what human ears might miss.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all group">
                        <div className="w-12 h-12 bg-fuchsia-50 rounded-xl flex items-center justify-center text-fuchsia-600 mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Rupture Detection</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Identifies subtle breaks in the therapeutic bond by analyzing micro-pauses and tone shifts, alerting you before patients disengage.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all group">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Empathy Scoring</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Receive objective feedback on your empathetic accuracy. See exactly which interventions landed well and which missed the mark.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-fuchsia-900/5 transition-all group">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Pacing & Pauses</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Genie measures silence. Are you jumping in too fast? Or letting the silence do the heavy lifting? Get the data to adjust your flow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
