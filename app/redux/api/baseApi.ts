import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://e-bazar-latest.onrender.com',
    credentials: "include",
    prepareHeaders: (headers, {getState}) =>{
        const token = (getState() as RootState).auth.access;
        if(token){
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
})

export default baseApi

