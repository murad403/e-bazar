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
    }),
    verifyOtp: builder.mutation({
      query: ({username, payload}) => {
        return {
          url: `/auth/verify/${username}/`,
          method: 'POST',
          body: { otp: payload }
        }
      }
    })
  })
})

export const { useSignUpMutation, useVerifyOtpMutation } = authApi;
