import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api', // Use relative path to leverage Next.js Rewrites (avoids CORS)
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as any).auth.token || localStorage.getItem('token');
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            // Add this header just in case requests slip through or for server-side calls
            headers.set('ngrok-skip-browser-warning', 'true');
            return headers;
        },
    }),
    // Define tag types for caching and invalidation
    tagTypes: ['User', 'Notes'],
    endpoints: (builder) => ({
        // This are example endpoints (just for structure reference)
        // You can inject endpoints from other files using injectEndpoints
        getHealthCheck: builder.query<{ status: string }, void>({
            query: () => 'health-check',
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHealthCheckQuery } = baseApi;
