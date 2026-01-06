'use client';

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../../lib/store/store';
import { setCredentials } from '../../lib/store/features/authSlice';

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }

    useEffect(() => {
        if (storeRef.current) {
            const token = localStorage.getItem('token');
            const userStr = localStorage.getItem('user');
            if (token) {
                try {
                    const user = userStr ? JSON.parse(userStr) : null;
                    storeRef.current.dispatch(setCredentials({ user, token }));
                } catch (e) {
                    console.error("Failed to parse user from local storage", e);
                }
            }
        }
    }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
