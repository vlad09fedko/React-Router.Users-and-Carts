import baseApi from '@/shared/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllUsers: build.query({
      query: () => 'users',
      providesTags: ['Users'],
    }),
    getSingleUser: build.query({
      query: id => `users/${id}`,
      providesTags: (res, err, id) => [{ type: 'Users', id }],
    }),
    // createUser: build.mutation({
    //   query: user => ({
    //     url: 'users',
    //     method: 'POST',
    //     body: user,
    //   }),
    //   invalidatesTags: ['Users'],
    // }),
    updateUser: build.mutation({
      query: user => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: build.mutation({
      query: id => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  // useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
