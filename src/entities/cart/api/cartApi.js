import baseApi from '@/shared/api/baseApi';

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
  }),
  overrideExisting: true,
});

export const { useGetAllCartsQuery, useGetSingleCartQuery } = cartApi;
