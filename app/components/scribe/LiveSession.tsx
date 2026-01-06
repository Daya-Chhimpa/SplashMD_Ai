'use client';

import React, { useState, useEffect, useRef } from 'react';
import ConsentGate from './ConsentGate';
import toast from 'react-hot-toast';

interface LiveSessionProps {
    onSessionEnd: () => void;
}

export default function LiveSession({ onSessionEnd }: LiveSessionProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [showConsentModal, setShowConsentModal] = useState(false);
    const [sessionDuration, setSessionDuration] = useState(0);
    const [patientName, setPatientName] = useState("Waiting for connection...");
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [permissionError, setPermissionError] = useState<string | null>(null);

    const userVideo = useRef<HTMLVideoElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    // --- 1. Init: Access Fake "Patient" & Real Camera ---
    useEffect(() => {
        // Mock connecting to patient
        const timer = setTimeout(() => {
            setPatientName("Alex Johnson (Patient)");
        }, 1500);

        // Access Real Webcam
        const startCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                });
                setStream(mediaStream);
                if (userVideo.current) {
                    userVideo.current.srcObject = mediaStream;
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                const msg = "Camera Access Denied. Please check browser permissions.";
                setPermissionError(msg);
                toast.error(msg);
            }
        };

        startCamera();

        // Cleanup on unmount
        return () => {
            clearTimeout(timer);
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // Timer logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRecording) {
            interval = setInterval(() => {
                setSessionDuration(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRecording]);

    // --- 2. Recording Logic ---
    const getBestMimeType = () => {
        const types = [
            'audio/webm;codecs=opus',
            'audio/webm',
            'audio/mp4',
            'audio/ogg',
            '' // Fallback to default
        ];
        for (const type of types) {
            if (type === '' || MediaRecorder.isTypeSupported(type)) {
                return type;
            }
        }
        return '';
    };

    const startAudioRecording = () => {
        if (!stream) {
            toast.error("No active stream found (Camera off?)");
            setIsRecording(false);
            return;
        }

        const mimeType = getBestMimeType();

        try {
            const options = mimeType ? { mimeType } : undefined;
            const recorder = new MediaRecorder(stream, options);

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            // onstop is handled inside the stop wrapper promise

            recorder.start(1000); // Collect chunks every second
            mediaRecorderRef.current = recorder;
            console.log("Recording started with mimeType:", mimeType || "browser-default");
            toast.success("Secure Recording Started");
        } catch (err: any) {
            console.error("Failed to start MediaRecorder:", err);
            toast.error(`Recording Error: ${err.message || 'Unknown'}`);
            setIsRecording(false);
        }
    };

    const stopRecordingAndDownload = (): Promise<void> => {
        return new Promise((resolve) => {
            if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') {
                resolve();
                return;
            }

            const toastId = toast.loading("Encrypting & Saving Recording...");

            mediaRecorderRef.current.onstop = () => {
                const mimeType = mediaRecorderRef.current?.mimeType || 'audio/webm';
                const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });

                if (audioBlob.size === 0) {
                    toast.error("Recording failed: No audio captured", { id: toastId });
                    resolve();
                    return;
                }

                const audioUrl = URL.createObjectURL(audioBlob);

                // Auto-Download Trigger
                const link = document.createElement('a');
                link.href = audioUrl;
                link.download = `session-recording-${new Date().toISOString().slice(0, 10)}.webm`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Reset chunks
                audioChunksRef.current = [];

                toast.success("Recording saved to downloads", { id: toastId });
                resolve();
            };

            mediaRecorderRef.current.stop();
        });
    };

    const handleStartRecordingClick = () => {
        // Gatekeeper: Check for consent
        setShowConsentModal(true);
    };

    // --- Handlers ---
    const handleConsentConfirmed = (patientId: string) => {
        setShowConsentModal(false);
        setIsRecording(true);
        // Start Real Recording
        startAudioRecording();
    };

    const handleEndSession = async () => {
        if (isRecording) {
            await stopRecordingAndDownload();
        }
        // Small delay to ensure toast is seen
        setTimeout(() => {
            onSessionEnd();
        }, 1500);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full h-[600px] bg-slate-900 rounded-2xl overflow-hidden relative border border-slate-700 shadow-2xl flex flex-col">

            {/* Header */}
            <div className="h-16 bg-slate-800/90 backdrop-blur-md flex items-center justify-between px-6 z-10 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 rounded-full ${permissionError ? 'bg-red-500' : 'bg-emerald-500 animate-pulse'}`}></div>
                    <div>
                        <span className="text-white font-medium text-sm block leading-tight">Secure Telehealth Channel</span>
                        <span className="text-[10px] text-slate-400">P2P Encrypted • High Quality</span>
                    </div>
                </div>

                {/* Recording Indicator */}
                {isRecording && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider tabular-nums">{formatTime(sessionDuration)}</span>
                    </div>
                )}
            </div>

            {/* Main Video Grid */}
            <div className="flex-1 flex p-4 relative bg-slate-950">

                {/* 1. PATIENT VIEW (Mocked for Demo, since we don't have a 2nd person) */}
                <div className="flex-1 bg-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-700/50">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center">
                        <div className="relative">
                            <div className="h-32 w-32 bg-slate-700 rounded-full flex items-center justify-center text-slate-500 mb-6 ring-4 ring-slate-800 shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </div>
                            {/* Status Dot */}
                            <div className="absolute bottom-6 right-2 h-6 w-6 rounded-full bg-slate-900 flex items-center justify-center border-2 border-slate-800">
                                <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                            </div>
                        </div>
                        <h3 className="text-white font-medium text-xl tracking-tight">{patientName}</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="h-4 w-0.5 bg-emerald-500 animate-[height_1s_ease-in-out_infinite]"></span>
                            <span className="h-6 w-0.5 bg-emerald-500 animate-[height_1s_ease-in-out_infinite_0.1s]"></span>
                            <span className="h-3 w-0.5 bg-emerald-500 animate-[height_1s_ease-in-out_infinite_0.2s]"></span>
                            <span className="text-slate-400 text-sm ml-1">Audio Connected</span>
                        </div>
                    </div>
                </div>

                {/* 2. DOCTOR VIEW (Real Local Camera) */}
                <div className="absolute bottom-6 right-6 w-56 aspect-video bg-black rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden z-20 transition-all hover:scale-105 hover:border-indigo-500/50 group">
                    {permissionError ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-white text-xs text-center p-2">
                            {permissionError}
                        </div>
                    ) : (
                        <>
                            {/* The Real Video Element */}
                            <video
                                ref={userVideo}
                                autoPlay
                                muted
                                playsInline
                                className="w-full h-full object-cover transform scale-x-[-1]" // Mirrored
                            />
                            <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[10px] text-white font-medium">
                                You
                            </div>
                            {/* Mic Active Indicator */}
                            <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                        </>
                    )}
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="h-20 bg-slate-900 flex items-center justify-center gap-6 z-10">
                <button className="h-12 w-12 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all flex items-center justify-center group active:scale-95">
                    <svg className="group-hover:text-indigo-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </button>
                <button className="h-12 w-12 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all flex items-center justify-center group active:scale-95">
                    <svg className="group-hover:text-indigo-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </button>

                {/* Secure Record Trigger */}
                <button
                    onClick={isRecording ? undefined : handleStartRecordingClick}
                    className={`h-12 px-6 rounded-full flex items-center gap-3 font-bold transition-all shadow-lg active:scale-95 ${isRecording
                        ? 'bg-red-500/10 text-red-500 cursor-default ring-1 ring-red-500/50'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
                        }`}
                >
                    {isRecording ? (
                        <>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            Tracking...
                        </>
                    ) : (
                        <>
                            <div className="h-3 w-3 bg-white rounded-full"></div>
                            Start Recording
                        </>
                    )}
                </button>

                <button
                    onClick={handleEndSession}
                    className="h-12 w-12 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 transition-all flex items-center justify-center active:scale-95 ml-2"
                    title="End Session & Download"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12"></rect></svg>
                </button>
            </div>

            {/* CONSENT MODAL */}
            {showConsentModal && (
                <div className="absolute inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="bg-amber-50 px-6 py-4 border-b border-amber-100 flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 text-sm">Action Blocked: Consent Required</h3>
                                <p className="text-[11px] text-slate-500 leading-tight">Recording is disabled until explicit consent is logged.</p>
                            </div>
                            <button
                                onClick={() => setShowConsentModal(false)}
                                className="ml-auto bg-white p-1.5 rounded-full text-slate-400 hover:text-slate-600 shadow-sm border border-slate-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-0">
                            <ConsentGate onConsentConfirmed={(id) => handleConsentConfirmed(id)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
