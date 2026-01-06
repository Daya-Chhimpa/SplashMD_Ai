'use client';

import React, { useState } from 'react';

interface ConsentGateProps {
    onConsentConfirmed: (patientId: string) => void;
}

export default function ConsentGate({ onConsentConfirmed }: ConsentGateProps) {
    const [patientId, setPatientId] = useState('');
    const [hasConsent, setHasConsent] = useState(false);
    const [error, setError] = useState('');

    const handleConfirm = () => {
        if (!patientId.trim()) {
            setError('Please enter a Patient Reference ID.');
            return;
        }
        if (!hasConsent) {
            setError('You must confirm patient consent verification.');
            return;
        }
        setError('');
        onConsentConfirmed(patientId);
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-indigo-50 overflow-hidden">
                {/* Header */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Session Security Check</h3>
                        <p className="text-xs text-slate-500">Step 1 of 2: Verification</p>
                    </div>
                </div>

                <div className="p-8 space-y-6">
                    {/* Patient ID Input */}
                    <div className="space-y-2">
                        <label htmlFor="patientId" className="block text-sm font-semibold text-slate-700">
                            Patient Reference / ID
                        </label>
                        <input
                            type="text"
                            id="patientId"
                            value={patientId}
                            onChange={(e) => setPatientId(e.target.value)}
                            placeholder="e.g. PT-2024-892"
                            className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border transition-all outline-none"
                        />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="relative flex items-start p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 cursor-pointer hover:bg-indigo-50 transition-colors">
                        <div className="flex h-6 items-center">
                            <input
                                id="consent"
                                aria-describedby="consent-description"
                                name="consent"
                                type="checkbox"
                                checked={hasConsent}
                                onChange={(e) => setHasConsent(e.target.checked)}
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="consent" className="font-medium text-slate-900 cursor-pointer">
                                Strict Consent Verification
                            </label>
                            <p id="consent-description" className="text-slate-600 mt-1">
                                I strictly confirm that I have obtained explicit permission from the patient to record and process this therapy session using AI tools. I understand this action is logged for compliance.
                            </p>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            {error}
                        </div>
                    )}

                    {/* Action Button */}
                    <button
                        onClick={handleConfirm}
                        className={`w-full flex justify-center items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 
              ${hasConsent && patientId.trim()
                                ? 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-indigo-200 hover:-translate-y-0.5'
                                : 'bg-slate-300 cursor-not-allowed'}`}
                    >
                        <span>Confirm & Unlock Upload</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
