import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_HOST,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      if (localStorage.getItem('token')) {
        headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
