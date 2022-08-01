import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react'
const { ENV_ENDPOINT_API } = import.meta.env

const baseQuery = fetchBaseQuery({ baseUrl: ENV_ENDPOINT_API })

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return await baseQuery(args, api, extraOptions)
}

export default customFetchBase
