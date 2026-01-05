import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com/v1/',
        prepareHeaders: (headers, { getState }) => {
            // Example: Get token from state and set Authorization header
            // const token = (getState() as RootState).auth.token
            // if (token) {
            //   headers.set('authorization', `Bearer ${token}`)
            // }
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
