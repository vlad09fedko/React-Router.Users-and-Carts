import baseApi from '@/shared/baseApi';

export const cartApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllCarts: build.query({
      query: () => 'carts',
      providesTags: ['Carts'],
    }),
    getSingleCart: build.query({
      query: id => `carts/${id}`,
      providesTags: (_, __, id) => [{ type: 'Carts', id }],
    }),
    updateCart: build.mutation({
      query: cart => ({
        url: `carts/${cart.id}`,
        method: 'PUT',
        body: cart,
      }),
      invalidatesTags: ['Carts'],
    }),
    deleteCart: build.mutation({
      query: id => ({
        url: `carts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Carts'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllCartsQuery,
  useGetSingleCartQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
