import { baseApi } from '@/shared/api';

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllUsers: build.query({
      query: () => 'users',
      providesTags: result =>
        result
          ? [
              { type: 'Users', id: 'LIST' },
              ...result.users.map(user => ({
                type: 'Users',
                id: user.id,
              })),
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),

    getSingleUser: build.query({
      query: id => `users/${id}`,
      providesTags: (_, __, id) => [{ type: 'Users', id }],
    }),

    updateUser: build.mutation({
      query: user => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user,
      }),

      async onQueryStarted(user, { dispatch, queryFulfilled }) {
        const listPatch = dispatch(
          userApi.util.updateQueryData('getAllUsers', undefined, draft => {
            const index = draft.users.findIndex(item => item.id === user.id);

            if (index !== -1) {
              draft.users[index] = user;
            }
          }),
        );

        const singlePatch = dispatch(
          userApi.util.updateQueryData('getSingleUser', user.id, draft => {
            Object.assign(draft, user);
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          listPatch.undo();
          singlePatch.undo();
        }
      },
    }),

    deleteUser: build.mutation({
      query: id => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData('getAllUsers', undefined, draft => {
            draft.users = draft.users.filter(user => user.id !== id);
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
