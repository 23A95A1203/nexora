import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // Login
    login: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    // Logout
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),

    // Register
    register: builder.mutation({
      query: data => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    // Password reset request
    newPasswordRequest: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/reset-password/request`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    // Reset password
    resetPassword: builder.mutation({
      query: ({ userId, token, password }) => ({
        url: `${USERS_URL}/reset-password/reset/${userId}/${token}`,
        method: 'POST',
        body: { password }
      }),
      invalidatesTags: ['User']
    }),

    // Update user profile
    profile: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    // Get user profile
    getUserProfile: builder.query({
      query: () => `${USERS_URL}/profile`,
      providesTags: ['User']
    }),

    // Get all users (admin)
    getUsers: builder.query({
      query: () => USERS_URL,
      providesTags: ['User']
    }),

    // Get all admins
    admins: builder.query({
      query: () => `${USERS_URL}/admins`,
      providesTags: ['User']
    }),

    // Get user by ID (admin)
    getUserById: builder.query({
      query: userId => `${USERS_URL}/${userId}`,
      providesTags: ['User']
    }),

    // Delete user
    deleteUser: builder.mutation({
      query: userId => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),

    // Update user (admin)
    updateUser: builder.mutation({
      query: ({ userId, ...userData }) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'PUT',
        body: { ...userData }
      }),
      invalidatesTags: ['User']
    })
  })
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useNewPasswordRequestMutation,
  useResetPasswordMutation,
  useProfileMutation,
  useGetUserProfileQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
  useAdminsQuery
} = usersApiSlice;
