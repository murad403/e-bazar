import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://e-bazar-latest.onrender.com' }),
  endpoints: () => ({}),
})

export default baseApi

