'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/shared/Navbar';
import AuthGuard from '../components/shared/AuthGuard';
import { useGetUserQuery, useUpdateUserMutation } from '../../lib/store/services/authApi';
import { useAppSelector } from '../../lib/store/hooks';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
    const { user } = useAppSelector((state) => state.auth);
    // Use ID if available, otherwise might fail if API strictly needs ID
    const userId = user?.id || user?.user_id;

    const { data: userData, isLoading: isFetching } = useGetUserQuery(userId, { skip: !userId });
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });

    useEffect(() => {
        if (userData) {
            setFormState({
                first_name: userData.first_name || '',
                last_name: userData.last_name || '',
                email: userData.email || '',
            });
        } else if (user?.email) {
            // Fallback if API hasn't loaded yet or failed but we have email from login
            setFormState(prev => ({ ...prev, email: user.email }));
        }
    }, [userData, user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userId) {
            toast.error('User ID not found. Cannot update profile.');
            return;
        }

        try {
            await updateUser({ id: userId, ...formState }).unwrap();
            toast.success('Profile updated successfully!');
        } catch (err: any) {
            console.error("Update failed", err);
            toast.error('Failed to update profile. Please try again.');
        }
    };

    return (
        <AuthGuard>
            <div className="min-h-screen bg-slate-50 font-sans pb-20">
                <Navbar />

                <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link href="/" className="text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            Back to Home
                        </Link>
                        <h1 className="text-3xl font-bold text-slate-900">Profile Settings</h1>
                        <p className="mt-2 text-slate-600">Manage your account information and preferences.</p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
                        {isFetching ? (
                            <div className="flex justify-center py-10 text-indigo-600">Loading profile...</div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">


                                <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-700 ring-4 ring-white shadow-md">
                                        {formState.first_name?.[0]?.toUpperCase() || formState.email?.[0]?.toUpperCase() || 'U'}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">Profile Photo</h3>
                                        <p className="text-sm text-slate-500 mb-3">Upload a new avatar or remove the existing one.</p>
                                        <div className="flex gap-3">
                                            <button type="button" className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-300 hover:bg-slate-50">Change Photo</button>
                                            <button type="button" className="rounded-lg px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 hover:text-rose-700">Remove</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={formState.first_name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={formState.last_name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        disabled // Usually emails are not editable directly or require verification
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 cursor-not-allowed"
                                    />
                                    <p className="mt-1 text-xs text-slate-400">Email cannot be changed directly. Contact support for assistance.</p>
                                </div>

                                <div className="pt-4 flex justify-end gap-3">
                                    <Link href="/" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={isUpdating}
                                        className="rounded-lg bg-indigo-600 px-6 py-2 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isUpdating ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </AuthGuard>
    );
}
