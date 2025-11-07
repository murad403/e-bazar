import baseApi from '../api/baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (payload) => {
        return {
          url: '/auth/signup/',
          method: 'POST',
          body: payload
        }
      }
    })
  })
})

export const { useSignUpMutation } = authApi;
