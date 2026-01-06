'use client';

import React, { useState, useRef } from 'react';

interface SecureUploadProps {
    patientId: string;
    onUploadComplete: () => void;
}

export default function SecureUpload({ patientId, onUploadComplete }: SecureUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [status, setStatus] = useState<'idle' | 'uploading' | 'encrypting' | 'complete'>('idle');

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            validateAndSetFile(e.target.files[0]);
        }
    };

    const validateAndSetFile = (selectedFile: File) => {
        // Basic validation for audio types (expand as needed)
        if (!selectedFile.type.startsWith('audio/')) {
            alert('Please upload a valid audio file (MP3, WAV, M4A).');
            return;
        }
        setFile(selectedFile);
        setStatus('idle');
        setUploadProgress(0);
    };

    const startSecureUpload = async () => {
        if (!file) return;

        setStatus('uploading');

        // Simulate Upload Progress
        for (let i = 0; i <= 100; i += 5) {
            setUploadProgress(i);
            await new Promise(resolve => setTimeout(resolve, 100)); // Simulate network lag
        }

        setStatus('encrypting');
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate server-side encryption

        setStatus('complete');
        setTimeout(() => {
            onUploadComplete();
        }, 1000);
    };

    return (
        <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Encryption Badge */}
            <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    End-to-End Encryption Verify
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100 overflow-hidden relative">

                {/* Active Header */}
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-sm z-10 relative">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Secure Audio Intake</h3>
                        <p className="text-sm text-slate-500 mt-1">Session Target: <span className="font-mono font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{patientId}</span></p>
                    </div>
                    <div className="h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    </div>
                </div>

                {/* Drop Zone */}
                <div className="p-8">
                    {!file ? (
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`
                        group relative flex flex-col items-center justify-center w-full h-64 rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer
                        ${isDragging
                                    ? 'border-indigo-500 bg-indigo-50/50 scale-[0.99]'
                                    : 'border-slate-200 bg-slate-50/50 hover:border-indigo-400 hover:bg-slate-50'}
                    `}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                accept="audio/*"
                                className="hidden"
                            />

                            <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M12 2v20M2 12h20" /></svg>
                            </div>

                            <p className="text-sm font-semibold text-slate-700">Click to upload or drag audio file</p>
                            <p className="text-xs text-slate-400 mt-2">MP3, WAV, M4A supported (Max 200MB)</p>
                        </div>
                    ) : (
                        <div className="w-full">
                            {/* File Selected View */}
                            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 text-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-slate-900 truncate">{file.name}</p>
                                    <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB • Ready to secure</p>
                                </div>
                                {status === 'idle' && (
                                    <button onClick={() => setFile(null)} className="text-slate-400 hover:text-red-500 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                )}
                            </div>

                            {/* Progress Bar (Visible when uploading/encrypting) */}
                            {(status === 'uploading' || status === 'encrypting' || status === 'complete') && (
                                <div className="mb-6 space-y-2">
                                    <div className="flex justify-between text-xs font-semibold text-slate-600">
                                        <span>
                                            {status === 'uploading' && 'Uploading to Secure Vault...'}
                                            {status === 'encrypting' && 'Encrypting At Rest (AES-256)...'}
                                            {status === 'complete' && 'Upload Complete'}
                                        </span>
                                        <span>{uploadProgress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-300 ease-out rounded-full ${status === 'complete' ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                                            style={{ width: `${uploadProgress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}

                            {/* Action Button */}
                            {status === 'idle' && (
                                <button
                                    onClick={startSecureUpload}
                                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]"
                                >
                                    Start Secure Processing
                                </button>
                            )}

                            {status === 'complete' && (
                                <div className="w-full py-3.5 bg-emerald-50 text-emerald-700 rounded-xl font-bold border border-emerald-100 text-center flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    File Locked & Queued
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
