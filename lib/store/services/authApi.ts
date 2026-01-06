import { baseApi } from "./api";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: "/accounts/users",
                method: "POST",
                body: userData,
            }),
        }),
        getUser: builder.query({
            query: (id) => `/accounts/users/${id}`,
            providesTags: ['User'],
        }),
        updateUser: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/accounts/users/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery, useUpdateUserMutation } = authApi;
