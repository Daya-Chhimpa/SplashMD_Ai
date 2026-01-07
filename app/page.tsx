'use client';

import React, { useState } from 'react';
import Navbar from './components/shared/Navbar';
import ConsentGate from './components/scribe/ConsentGate';
import SecureUpload from './components/scribe/SecureUpload';
import LiveSession from './components/scribe/LiveSession';
import { useAppSelector } from '../lib/store/hooks';
import { toast } from 'react-hot-toast';

type SessionMode = 'selection' | 'upload' | 'live';

export default function Home() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [mode, setMode] = useState<SessionMode>('selection');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [patientId, setPatientId] = useState<string | null>(null);

  // --- Upload Path Logic ---
  const handleUploadSelection = () => {
    if (!isAuthenticated) {
      toast.error('Please login first to start a session');
      return;
    }
    setMode('upload');
    setCurrentStep(1); // Consent Step
  };

  const handleConsentConfirmedUpload = (id: string) => {
    setPatientId(id);
    setCurrentStep(2); // Upload Step
  };

  const handleUploadComplete = () => {
    setCurrentStep(3); // Processing Step
  };

  // --- Live Session Path Logic ---
  const handleLiveSelection = () => {
    if (!isAuthenticated) {
      toast.error('Please login first to start a session');
      return;
    }
    setMode('live');
    // Live session starts immediately, consent is inside the room
  };

  const handleLiveSessionEnd = () => {
    // When live session ends, we assume recording is auto-saved
    setCurrentStep(3); // Go straight to Processing
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            AI Therapy Scribe
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Secure, HIPAA-compliant session documentation assistant.
          </p>
        </div>

        {/* STEPPER indicator (Only visible if not in Selection mode) */}
        {mode !== 'selection' && currentStep < 3 && (
          <div className="max-w-2xl mx-auto mb-10">
            {/* Simplified Stepper for varying paths */}
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-500">
              <span className={mode === 'upload' && currentStep === 1 ? 'text-indigo-600 font-bold' : ''}>1. Consent</span>
              <span className="text-slate-300">→</span>
              <span className={(mode === 'upload' && currentStep === 2) || mode === 'live' ? 'text-indigo-600 font-bold' : ''}>
                {mode === 'upload' ? '2. Upload Audio' : '2. Live Session'}
              </span>
              <span className="text-slate-300">→</span>
              <span>3. Process</span>
            </div>
          </div>
        )}

        {/* --- MODE SELECTION SCREEN --- */}
        {mode === 'selection' && (
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-12">
            {/* Option 1: Live Session */}
            <div
              onClick={handleLiveSelection}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-100 border-2 border-transparent hover:border-indigo-600 transition-all duration-300 cursor-pointer text-center"
            >
              <div className="h-20 w-20 bg-indigo-50 rounded-full mx-auto mb-6 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Start Telehealth Session</h3>
              <p className="text-slate-500 mb-6">Start a secure video call. Record and transcribe in real-time with built-in consent workflows.</p>
              <span className="inline-block text-indigo-600 font-bold group-hover:underline">Start New Session →</span>
            </div>

            {/* Option 2: Upload Recording */}
            <div
              onClick={handleUploadSelection}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-violet-100 border-2 border-transparent hover:border-violet-600 transition-all duration-300 cursor-pointer text-center"
            >
              <div className="h-20 w-20 bg-violet-50 rounded-full mx-auto mb-6 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload Recording</h3>
              <p className="text-slate-500 mb-6">Have an existing audio file? Securely upload and process a past session recording.</p>
              <span className="inline-block text-violet-600 font-bold group-hover:underline">Upload File →</span>
            </div>
          </div>
        )}

        {/* --- UPLOAD PATH --- */}
        {mode === 'upload' && (
          <div className="transition-all duration-500">
            {currentStep === 1 && (
              <ConsentGate onConsentConfirmed={handleConsentConfirmedUpload} />
            )}
            {currentStep === 2 && patientId && (
              <SecureUpload patientId={patientId} onUploadComplete={handleUploadComplete} />
            )}
          </div>
        )}

        {/* --- LIVE SESSION PATH --- */}
        {mode === 'live' && currentStep !== 3 && (
          <div className="max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-500">
            <LiveSession onSessionEnd={handleLiveSessionEnd} />
          </div>
        )}

        {/* --- COMMON PROCESSING STATE (Step 3) --- */}
        {currentStep === 3 && (
          <div className="max-w-xl mx-auto text-center py-16 bg-white rounded-3xl shadow-xl border border-indigo-50 animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-8 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin opacity-50 absolute"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Processing Session Data</h2>

            <div className="max-w-sm mx-auto space-y-4 mb-8">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Transcribing Audio</span>
                <span className="text-emerald-600 font-bold">Complete</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Extracting Clinical Facts</span>
                <span className="text-indigo-600 font-bold animate-pulse">Running...</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Mapping to Goals</span>
                <span>Pending</span>
              </div>
            </div>

            <p className="text-slate-500 mb-10">
              We are securely analyzing the session to generate your clinical note draft. This typically takes 30-60 seconds.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
              Refresh / Start New
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
