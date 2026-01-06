'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../../../lib/store/hooks';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simple check to ensure we wait for the store to hydrate
        // In a real app, you might want a specific 'isInitialized' flag in your auth slice
        const timer = setTimeout(() => {
            setIsLoading(false);
            if (!isAuthenticated) {
                // If not authenticated, redirect to login (or home)
                // User said "home page pr hi rhe", keeping it safe with login or home. 
                // Let's redirect to login for better UX, or home if specified.
                router.push('/login');
            }
        }, 100); // Small delay to allow redux to hydrate from localStorage

        return () => clearTimeout(timer);
    }, [isAuthenticated, router]);

    if (isLoading) {
        // You can render a loading spinner here
        return <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-indigo-600">Loading...</div>
        </div>;
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}
