import baseApi from '@/shared/baseApi';

export const cartApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllCarts: build.query({
      query: () => 'carts',
      providesTags: ['Carts'],
    }),
    getSingleCart: build.query({
      query: id => `carts/${id}`,
      providesTags: (res, err, id) => [{ type: 'Carts', id }],
    }),
    // createCart: build.mutation({
    //   query: cart => ({
    //     url: 'carts',
    //     method: 'POST',
    //     body: cart,
    //   }),
    //   invalidatesTags: ['Carts'],
    // }),
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
  // useCreateCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
