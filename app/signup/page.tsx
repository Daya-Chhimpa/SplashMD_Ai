'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRegisterMutation } from '../../lib/store/services/authApi';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: 'clinician' // Default role
    });

    const [register, { isLoading }] = useRegisterMutation();
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(formData).unwrap();
            toast.success('Account created successfully! Please log in.');
            // Assuming successful registration redirects to login or automatically logs in.
            // For now, redirect to login with a success message query param or similar.
            router.push('/login');
        } catch (err: any) {
            console.error('Registration failed:', err);
            const msg = err.data?.detail || 'Registration failed. Please check your inputs.';
            toast.error(msg);
        }
    };

    return (
        <div className="flex min-h-screen w-full flex-col lg:flex-row">
            {/* Left Side - Form Area */}
            <div className="flex w-full flex-col justify-center bg-white px-8 py-12 lg:w-1/2 lg:px-20 xl:px-32">
                <div className="mx-auto w-full max-w-md">

                    {/* Brand/Logo */}
                    <Link href="/" className="mb-12 flex items-center gap-2 w-fit">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                                <line x1="12" x2="12" y1="17" y2="22" />
                                <line x1="8" x2="16" y1="22" y2="22" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-slate-900">SplashMD</span>
                    </Link>

                    <div className="text-center">
                        <h1 className="mb-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
                            Start your free 14-day trial
                        </h1>
                        <p className="mb-8 text-sm text-slate-500">
                            No credit card required. Cancel anytime.
                        </p>
                    </div>



                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-1.5 block text-xs font-bold text-slate-900">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-xs font-bold text-slate-900">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-900">
                                Email <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="name@example.com"
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-900">
                                Password <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Create a password"
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-bold text-slate-900">Role</label>
                            <div className="relative">
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
                                >
                                    <option value="clinician">Clinician</option>
                                    <option value="patient">Patient</option>
                                    <option value="admin">Admin</option>
                                </select>
                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                            <div className="flex h-5 items-center">
                                <input id="terms" type="checkbox" required className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                            </div>
                            <label htmlFor="terms" className="text-xs text-slate-600 leading-5">
                                I agree to the <a href="#" className="font-semibold text-indigo-700 underline decoration-indigo-700/30 underline-offset-2 hover:decoration-indigo-700">BAA</a> and <a href="#" className="font-semibold text-indigo-700 underline decoration-indigo-700/30 underline-offset-2 hover:decoration-indigo-700">Terms of use</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full rounded-lg bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-transform hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating Account...' : 'Continue'}
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-medium">or</span></div>
                    </div>

                    <div className="space-y-3">
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50">
                            <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                            Continue with Google
                        </button>
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50">
                            <svg className="h-5 w-5" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z" /><path fill="#f35325" d="M1 1h10v10H1z" /><path fill="#81bc06" d="M12 1h10v10H12z" /><path fill="#05a6f0" d="M1 12h10v10H1z" /><path fill="#ffba08" d="M12 12h10v10H12z" /></svg>
                            Continue with Microsoft
                        </button>
                    </div>

                    <p className="mt-8 text-center text-sm text-slate-600">
                        Already have an account? <Link href="/login" className="font-bold text-indigo-600 hover:underline">Sign in</Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Feature Showcase */}
            <div className="relative hidden w-full flex-col justify-center bg-gradient-to-br from-indigo-600 to-violet-700 px-12 py-12 text-white lg:flex lg:w-1/2 lg:px-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="relative z-10 mx-auto max-w-lg">
                    <h2 className="mb-12 text-center text-3xl font-bold leading-tight">
                        Your 14-day FREE trial includes
                    </h2>

                    <div className="mb-16 rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-sm border border-white/10">
                        <ul className="space-y-5">
                            {[
                                '15 session notes',
                                '100+ custom note templates',
                                'AI Treatment Planner',
                                'AI Progress Tracker',
                                'Session Insights (Alliance Genie™)'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-indigo-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span className="text-lg font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center">
                        <div className="mb-3 flex justify-center gap-1 text-yellow-400">
                            {[1, 2, 3, 4, 5].map(s => (
                                <svg key={s} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            ))}
                        </div>
                        <p className="mb-6 font-medium text-white/90">
                            Trusted by <span className="font-bold text-white">30,000+</span> mental health professionals
                        </p>

                        <div className="-space-x-4 flex justify-center mb-10">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-500 bg-slate-100" src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i * 100}`} alt="" />
                            ))}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 ring-2 ring-indigo-500 text-[10px] font-bold">30k+</div>
                        </div>

                        <div className="flex justify-center gap-8 opacity-80 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                            <div className="flex flex-col items-center">
                                <div className="mb-1 rounded-full border-2 border-white p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider">HIPAA</span>
                                <span className="text-[8px] uppercase">Compliant</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="mb-1 rounded-full border-2 border-white p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path></svg>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider">PHIPA</span>
                                <span className="text-[8px] uppercase">Compliant</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="mb-1 rounded-full border-2 border-white p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider">SOC 2</span>
                                <span className="text-[8px] uppercase">Type 2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
