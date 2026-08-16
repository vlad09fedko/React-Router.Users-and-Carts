import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://dummyjson.com/';

export default createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: 'api',
  tagTypes: ['Users', 'Carts'],
  endpoints: () => ({}),
});
