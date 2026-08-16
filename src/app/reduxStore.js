import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import baseApi from '@/shared/api/baseApi';

export default configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, logger),
});
