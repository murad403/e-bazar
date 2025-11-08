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
    }),
    signIn: builder.mutation({
      query: (payload) =>{
        return {
          url: '/auth/login/',
          method: "POST",
          body: payload
        }
      }
    }),
    forgotPassword: builder.mutation({
      query: (payload) =>{
        return {
          url: '/auth/forgetpassword/',
          method: "POST",
          body: payload
        }
      }
    }),
    resetPassword: builder.mutation({
      query: (payload) =>{
        return {
          url: '/auth/reset_password/',
          method: "POST",
          body: payload
        }
      }
    }),
  })
})

export const { useSignUpMutation, useVerifyOtpMutation, useSignInMutation, useForgotPasswordMutation, useResetPasswordMutation } = authApi;
