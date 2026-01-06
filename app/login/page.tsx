'use client';

import Link from "next/link";
import Navbar from "../components/shared/Navbar";
import { useState } from "react";
import { useLoginMutation } from "../../lib/store/services/authApi";
import { useAppDispatch } from "../../lib/store/hooks";
import { setCredentials } from "../../lib/store/features/authSlice";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await login({ email, password }).unwrap();

            // Handle response based on screenshot: 
            // { access_token: "...", token_type: "bearer", user: { id: 1, ... } }
            const token = result.access_token || result.token || result.access;
            const user = result.user || { email };

            if (token) {
                toast.success('Successfully logged in!');
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));

                dispatch(setCredentials({ user, token }));
                router.push('/');
            } else {
                console.error("Login unexpected result:", result);
                if (typeof result === 'string') {
                    toast.success('Successfully logged in!');
                    localStorage.setItem('token', result);
                    const fallbackUser = { email };
                    localStorage.setItem('user', JSON.stringify(fallbackUser));
                    dispatch(setCredentials({ user: fallbackUser, token: result }));
                    router.push('/');
                } else {
                    toast.error('Login succeeded but token was missing.');
                }
            }

        } catch (err: any) {
            console.error('Login failed:', err);
            const msg = err.data?.detail || 'Login failed. Please check your credentials.';
            toast.error(msg);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
                <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200 ring-1 ring-slate-900/5">

                    <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-violet-600">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-white p-2 shadow-lg">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 pb-8 pt-10">
                        <div className="mb-6 text-center">
                            <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
                            <p className="text-sm text-slate-500 mt-1">Sign in to access your personal AI health assistant</p>
                        </div>



                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="mb-1 block text-xs font-semibold uppercase text-slate-500">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div>
                                <div className="mb-1 flex items-center justify-between">
                                    <label className="block text-xs font-semibold uppercase text-slate-500">Password</label>
                                    <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-500">Forgot?</a>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 pr-10 text-slate-800 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                <line x1="1" y1="1" x2="23" y2="23"></line>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-300/50 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>

                        <div className="relative mt-8 flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                            <span className="relative bg-white px-2 text-xs font-medium text-slate-400 uppercase tracking-widest">Or continue with</span>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 hover:border-slate-300">
                                <svg className="h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 hover:border-slate-300">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                Facebook
                            </button>
                        </div>

                        <p className="mt-8 text-center text-xs text-slate-400">
                            Don't have an account? <Link href="/signup" className="font-semibold text-indigo-600 hover:underline">Sign up</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
