'use client';

import React, { useState } from 'react';

export default function NoteGenerator() {
    const [activeLocation, setActiveLocation] = useState('Online');
    const [activeType, setActiveType] = useState('Progress');
    const [selectedModalities, setSelectedModalities] = useState(['Psychodynamic', 'DBT']);

    return (
        <div className="w-full max-w-2xl mx-auto font-sans">
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 p-8">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-900">Set up your note</h2>
                    <p className="text-slate-500 text-sm mt-2">Help us tailor the note to your session and documentation needs</p>
                </div>

                <form className="space-y-6">
                    {/* Date */}
                    <div className="group relative">
                        <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase tracking-wider">Date</label>
                        <div className="relative flex items-center">
                            <input
                                type="date"
                                defaultValue="2025-09-16"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                            />
                            <div className="absolute right-4 pointer-events-none text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Time & Duration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase tracking-wider">Start Time</label>
                            <div className="relative flex items-center">
                                <input
                                    type="time"
                                    defaultValue="14:03"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase tracking-wider">Duration</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    defaultValue="50 min"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-slate-400 font-medium ml-1">Stop time: 2:53 PM (Auto calculated)</p>

                    {/* Session Location */}
                    <div>
                        <label className="mb-3 block text-xs font-bold text-slate-700 uppercase tracking-wider">Session Location</label>
                        <div className="grid grid-cols-3 gap-0 rounded-xl bg-slate-100 p-1 border border-slate-200">
                            {['Online', 'In Person', "Client's Home"].map((loc) => (
                                <button
                                    key={loc}
                                    type="button"
                                    onClick={() => setActiveLocation(loc)}
                                    className={`rounded-lg py-2.5 text-sm font-semibold transition-all ${activeLocation === loc
                                            ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
                                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                        }`}
                                >
                                    {loc}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Speakers */}
                    <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase tracking-wider">Number of Speakers</label>
                        <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium cursor-pointer">
                            <option>Individual (1 Client, 1 Clinician)</option>
                            <option>Couple (2 Clients, 1 Clinician)</option>
                            <option>Group (Multiple Clients)</option>
                        </select>
                    </div>

                    {/* Note Type */}
                    <div>
                        <label className="mb-3 block text-xs font-bold text-slate-700 uppercase tracking-wider">Note Type</label>
                        <div className="grid grid-cols-3 gap-4">
                            {['Intake', 'Progress', "Supervision"].map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setActiveType(type)}
                                    className={`rounded-xl border py-3 text-sm font-semibold transition-all ${activeType === type
                                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-4 ring-indigo-500/10'
                                            : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                                        }`}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        {type}
                                        {type === 'Supervision' && <svg className="text-slate-400" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Template */}
                    <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase tracking-wider">Template</label>
                        <div className="relative">
                            <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium cursor-pointer">
                                <option>Progress SOAP Individual</option>
                                <option>DAP Note</option>
                                <option>General Psychiatry Note</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Modalities */}
                    <div>
                        <label className="mb-1.5 flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Approaches and Modalities
                            <svg className="text-slate-400" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                        </label>
                        <div className="min-h-[48px] w-full rounded-xl border border-slate-200 bg-white px-2 py-1.5 text-slate-900 shadow-sm focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all">
                            <div className="flex flex-wrap gap-2">
                                {selectedModalities.map(m => (
                                    <span key={m} className="flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-700">
                                        {m}
                                        <button type="button" onClick={() => setSelectedModalities(prev => prev.filter(i => i !== m))} className="hover:text-rose-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                        </button>
                                    </span>
                                ))}
                                <input className="flex-1 min-w-[100px] border-none bg-transparent p-1.5 text-sm outline-none placeholder:text-slate-400" placeholder="Type to search..." />
                            </div>
                        </div>
                        <p className="mt-2 text-xs text-slate-400">Select up to 5 preferred approaches and modalities</p>
                    </div>

                    {/* Action Button */}
                    <button className="group w-full rounded-xl bg-gradient-to-r from-indigo-800 to-violet-900 py-4 text-center font-bold text-white shadow-lg shadow-indigo-900/20 transition-all hover:scale-[1.01] hover:shadow-indigo-900/30 active:scale-[0.98]">
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin-slow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" /><path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" /></svg>
                            Generate Note
                        </span>
                    </button>

                    <div className="text-center">
                        <a href="#" className="text-xs font-medium text-indigo-600 hover:underline">Configure default settings</a>
                    </div>

                </form>

            </div>
        </div>
    );
}
