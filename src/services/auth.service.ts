import { createApi } from '@reduxjs/toolkit/query/react'

import type Auth from '../models/auth.model'
import { setLogin } from '../store/auth/auth.slice'
import customFetchBase from './base'

export interface LoginRequest {
  email: string
  password: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customFetchBase,
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation<Auth, LoginRequest>({
      query: (body: LoginRequest) => ({
        url: 'auth/login',
        method: 'POST',
        body: body,
      }),
      transformResponse: (result: { data: Auth }) => result.data,
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setLogin(data))
          // eslint-disable-next-line no-empty
        } catch (_err) {}
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
