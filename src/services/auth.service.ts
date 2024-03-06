import { createApi } from '@reduxjs/toolkit/query/react'

import IAuth from '../models/auth.model'
import { setLogin } from '../store/auth/auth.slice'
import customFetchBase from './base'

export interface ILoginRequest {
  email: string
  password: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customFetchBase,
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation<IAuth, ILoginRequest>({
      query: (body: ILoginRequest) => ({
        url: 'auth/login',
        method: 'POST',
        body: body
      }),
      transformResponse: (result: { data: IAuth }) => result.data,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setLogin(data))
          // eslint-disable-next-line no-empty
        } catch (err) {}
      }
    })
  })
})

export const { useLoginMutation } = authApi
