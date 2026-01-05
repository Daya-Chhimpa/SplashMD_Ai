'use client';

import React, { useState } from 'react';

export default function AiDoctor() {
    const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
        { role: 'ai', content: "Hello, I'm Dr. Cortex. How can I assist you with your health today?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: 'ai',
                content: "I see. Based on those details, it sounds like you might be experiencing some fatigue. Have you been sleeping well lately? (Note: I am an AI, not a real doctor. Please consult a professional for medical advice.)"
            }]);
        }, 1500);
    };

    return (
        <div className="w-full max-w-5xl mx-auto font-sans">
            {/* Main Container with Light Glassmorphism */}
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5">

                {/* Decorative Background Blobs */}
                <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-50/50 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-rose-50/50 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

                {/* Header */}
                <header className="relative z-10 flex items-center justify-between border-b border-slate-100 bg-white/50 px-6 py-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 shadow-sm"></span>
                            <img
                                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix"
                                alt="Dr Cortex"
                                className="h-10 w-10 rounded-full bg-slate-100 ring-2 ring-white shadow-sm"
                            />
                        </div>
                        <div>
                            <h1 className="text-base font-bold text-slate-800">Dr. Cortex</h1>
                            <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                Online & Ready
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:bg-slate-50 hover:text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:bg-slate-50 hover:text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </button>
                    </div>
                </header>

                {/* Chat Area */}
                <div className="relative z-10 h-[550px] overflow-y-auto p-6 space-y-6 bg-slate-50/30 scroll-smooth">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                            {/* Avatar for messages */}
                            <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center shadow-sm text-xs font-bold ${msg.role === 'user'
                                    ? 'bg-indigo-100 text-indigo-600'
                                    : 'bg-white ring-1 ring-slate-200'
                                }`}>
                                {msg.role === 'user' ? 'You' : <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" className="rounded-full" />}
                            </div>

                            <div
                                className={`max-w-[75%] rounded-2xl p-4 shadow-sm text-sm leading-6 ${msg.role === 'user'
                                        ? 'bg-indigo-600 text-white rounded-br-none shadow-indigo-200'
                                        : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none shadow-slate-100'
                                    }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex items-end gap-2">
                            <div className="h-8 w-8 rounded-full bg-white ring-1 ring-slate-200 flex items-center justify-center shadow-sm">
                                <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" className="rounded-full" />
                            </div>
                            <div className="bg-white rounded-2xl rounded-bl-none p-4 border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="relative z-10 border-t border-slate-100 bg-white p-4">
                    <div className="relative flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your symptoms here..."
                            className="flex-1 rounded-xl bg-slate-50 border border-slate-200 px-5 py-3.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 transition-all font-medium"
                        />
                        <button
                            onClick={handleSend}
                            className="group flex items-center justify-center rounded-xl bg-indigo-600 px-6 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95 transition-all"
                        >
                            <span className="font-semibold mr-2 md:inline hidden">Send</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </div>
                    <div className="mt-3 flex justify-center items-center gap-6 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors cursor-help">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Secure & Encrypted
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors cursor-help">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z" /></svg>
                            AI Disclaimer Apply
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
